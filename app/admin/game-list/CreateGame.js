"use client"
import Loader from '@/app/common-component/Loader';
import { adminCommunication, getServerUrl } from '@/services/admin-communication';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CreateGame = ({ setModalStates, type, gameId, getGameList }) => {
    const { register, handleSubmit, formState: { errors }, getValues, watch, setValue } = useForm();
    const [loader, setLoader] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const fileInputRef = useRef(null);
    const router = useRouter();
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(prevImages => [...prevImages, ...files]);
        // Reset the file input value
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const removeImage = (index) => {
        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };


    async function onSubmit(params) {
        try {
            if (!selectedImages || selectedImages.length === 0) {
                return Swal.fire({ text: "Please select at least one image", icon: "warning" });
            }

            setLoader(true);
            let response;
            let formData = new FormData();
            let dataToSend = { ...params, title: params.name };

            let isFileAttached = false;
            dataToSend.gameId = gameId;
            dataToSend.oldGameFiles = [];


            selectedImages.forEach((item, index) => {
                if (item instanceof File) {
                    isFileAttached = true;
                    formData.append("gamefiles", item);
                } else if (item.fileUrl) {
                    // Add existing image URLs to dataToSend   
                    if (!dataToSend.existingImages) {
                        dataToSend.existingImages = [];
                    }
                    dataToSend.existingImages.push(item.fileUrl);
                } else {
                    console.warn(`Skipping invalid entry at index ${index}:`, item);
                }
            });

            console.log("Data to send:", JSON.stringify(dataToSend));

            formData.append("gameDetails", JSON.stringify(dataToSend));

            // Log FormData contents
            for (let pair of formData.entries()) {
                console.log("FormData Entry:", pair[0], pair[1]);
            }

            response = type === "create"
                ? await adminCommunication.createGame(formData)
                : await adminCommunication.updateGame(isFileAttached, formData);

            console.log("Server response:", response);

            if (response?.data?.status === "SUCCESS") {
                Swal.fire({ text: response?.data?.message, icon: "success", timer: 2000 });
                setModalStates({ gameId: "", type: "", modal: false });
                getGameList(1, "");
            } else if (response?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: response?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                console.log("Error:", response);
                Swal.fire({ text: response?.data?.message, icon: "warning" });
            }

            setLoader(false);
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
            setLoader(false);
        }
    }


    //get User by Id
    async function getGameById() {
        try {
            console.log("gameId", gameId);
            setLoader(true);
            const serverResponse = await adminCommunication.getGameById(gameId);

            if (serverResponse.data.status === "SUCCESS") {
                setValue("name", serverResponse?.data?.game?.name);
                setValue("description", serverResponse?.data?.game?.description);

                // Convert image URLs to objects with fileUrl property
                const existingImages = serverResponse?.data?.game?.gamefiles?.map((fileUrl) => ({ fileUrl }));
                setSelectedImages(existingImages);
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
            }
            setLoader(false);
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
            setLoader(false);
        }
    }

    useEffect(() => {
        if (type === "update") {
            getGameById()
        }
    }, [])
    return (
        <>
            {loader === true ?
                <Loader />
                :
                <div className="modal-overlay" >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="login_page_name">
                            <p className="mb-0">{type === "create" ? "Create Game" : "Update Game"}</p>
                        </div>
                        <hr className="modal-hr" />
                        <div className="p-4">
                            {/* Login Form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="login_input"
                                    type="text"
                                    placeholder="Game Name"
                                    {...register("name", { required: "Game Name is required" })}
                                />
                                {errors?.name && <p className="text-danger">{errors?.name?.message}</p>}
                                <textarea
                                    className="login_input"
                                    placeholder="Game Description"
                                    {...register("description", {
                                        required: "Game Description is required",
                                    })}
                                />
                                {errors?.description && <p className="text-danger">{errors?.description?.message}</p>}

                                <input
                                    className="login_input"
                                    type="file"
                                    accept="image/*"
                                    placeholder="Select Images"
                                    multiple
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    style={{
                                        marginBottom: '10px',
                                    }}
                                />
                                {selectedImages?.length > 0 && (
                                    <div style={{ marginBottom: '10px' }}>
                                        <p>Selected Images:</p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                            {selectedImages?.map((file, index) => (
                                                <div key={index} style={{ position: 'relative', width: '100px', height: '100px' }}>
                                                    <Image
                                                        src={(typeof file === "object" && file.fileUrl)
                                                            ? `${getServerUrl()}/getFiles/${file.fileUrl}`
                                                            : URL.createObjectURL(file)}
                                                        alt={`Selected ${index + 1}`}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        style={{
                                                            border: '1px solid #ccc',
                                                            borderRadius: '4px',
                                                        }}
                                                    />
                                                    <FontAwesomeIcon icon={faTrash} style={{
                                                        color: 'white', position: 'absolute', cursor: 'pointer',
                                                        zIndex: 1,
                                                        top: '5px',
                                                        right: '5px',
                                                    }} onClick={() => removeImage(index)} />
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                )}

                                <div className="login_main modal_button_wrapper mt-5 mb-4">
                                    <button className="popup_btn" type="submit">
                                        {type === "create" ? "Create" : "Update"}
                                    </button>
                                    <button className="popup_btn" onClick={() => setModalStates({ gameId: "", type: "", modal: false })}>
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CreateGame

