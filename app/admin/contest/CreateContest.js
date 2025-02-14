"use client"
import Loader from '@/app/common-component/Loader';
import { gameTypeArray } from '@/helper/game-type';
import { adminCommunication } from '@/services/admin-communication';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CreateContest = ({ setModalStates, type, contestId, getGameList }) => {
    const { register, handleSubmit, formState: { errors }, getValues, watch, setValue } = useForm();
    const [loader, setLoader] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [games, setGames] = useState([])
    const fileInputRef = useRef(null);

    //watch the game id on changing value
    const gameId = watch("gameId");
    const gameType = watch("gameType");


    //On  submit call api
    async function onSubmit(params) {
        try {
            setLoader(true);
            const serverResponse = (type === "create") ? await adminCommunication.createContest(params) : await adminCommunication.updateContest({ ...params, contestId });
            if (serverResponse.data.status === "SUCCESS") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "success", timer: 2000 });
                setModalStates({ contestId: "", type: "", modal: false });
                window.location.reload();
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
            }
            setLoader(false)
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
            setLoader(false)
        }
    }

    //get User by Id
    async function getGameById() {
        try {
            if (!gameId) {
                return
            }
            setLoader(true);
            const serverResponse = await adminCommunication.getGameById(gameId);
            if (serverResponse.data.status === "SUCCESS") {
                setValue("name", serverResponse?.data?.game?.name);
                setValue("email", serverResponse?.data?.game?.description);
                setSelectedImages(serverResponse?.data?.game?.gamefiles);
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
            }
            setLoader(false)
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
            setLoader(false)
        }
    }




    async function getGames() {
        try {
            setLoader(true);
            const serverResponse = await adminCommunication.getActiveGames();
            if (serverResponse.data.status === "SUCCESS") {
                setGames(serverResponse?.data?.games);
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                setGames([])
            }
            setLoader(false)
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
            setLoader(false)
        }
    }
    useEffect(() => {
        if (type === "update") {
            getGameById()
        }
        getGames();
    }, [])
    return (
        <>
            {loader === true ?
                <Loader />
                :
                <div className="modal-overlay" >
                    <div className="modal-content" style={{ width: "900px", height: "550px", overflow: "auto" }} onClick={(e) => e.stopPropagation()}>
                        <div className="login_page_name">
                            <p className="mb-0">{type === "create" ? "Create Contest" : "Update Contest"}</p>
                        </div>
                        <hr className="modal-hr" />
                        <div className="p-4">
                            {/* Login Form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <input
                                            className="login_input"
                                            type="text"
                                            placeholder="Title"
                                            {...register("name", {
                                                required: "Contest Title is required",
                                            })}
                                        />
                                        {errors?.name && <p className="text-danger">{errors?.name?.message}</p>}
                                    </div>
                                    <div className='col-md-6'>
                                        <input
                                            className="login_input"
                                            type="text"
                                            placeholder="Contest description"
                                            {...register("description", {
                                                required: "Contest description is required",
                                            })}
                                        />
                                        {errors?.description && <p className="text-danger">{errors?.description?.message}</p>}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <select
                                            className="login_input"
                                            {...register("gameId", { required: "Game is required" })}
                                            value={getValues("gameId") ?? ""}
                                        >
                                            <option value="">Select Games</option>
                                            {games?.map((ele, index) => (
                                                <option value={ele?.id} key={index + 1}>
                                                    {ele?.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors?.gameId && <p className="text-danger">{errors?.gameId?.message}</p>}
                                    </div>
                                    <div className='col-md-6'>
                                        <select
                                            className="login_input"
                                            {...register("gameType", { required: "Game Type is required" })}
                                            value={getValues("gameType") ?? ""}
                                        >
                                            <option value="">Select Type</option>
                                            {gameTypeArray?.map((ele, index) => (
                                                <option value={ele} key={index + 1}>
                                                    {ele}
                                                </option>
                                            ))}
                                        </select>
                                        {errors?.gameType && <p className="text-danger">{errors?.gameType?.message}</p>}
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <input
                                            className="login_input"
                                            type="date"
                                            placeholder="Contest Date"
                                            {...register("contestDate", {
                                                required: "Contest Date is required",
                                            })}
                                        />
                                        {errors?.contestDate && <p className="text-danger">{errors?.contestDate?.message}</p>}
                                    </div>
                                    <div className='col-md-6'>
                                        <input
                                            className="login_input"
                                            type="time"
                                            placeholder="Contest Time"
                                            {...register("contestTime", {
                                                required: "Contest time is required",
                                            })}
                                        />
                                        {errors?.contestTime && <p className="text-danger">{errors?.contestTime?.message}</p>}
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <input
                                            className="login_input"
                                            type="number"
                                            placeholder="Entry Fee In coins"
                                            {...register("reqCoinsToJoin", {
                                                required: "Entry Fees is required",
                                            })}
                                        />
                                        {errors?.reqCoinsToJoin && <p className="text-danger">{errors?.reqCoinsToJoin?.message}</p>}
                                    </div>
                                    <div className='col-md-6'>

                                        <input
                                            className="login_input"
                                            type="number"
                                            placeholder="Contest Limit"
                                            {...register("playersLimit", {
                                                required: "Contest Limit is required",
                                            })}
                                        />
                                        {errors?.playersLimit && <p className="text-danger">{errors?.playersLimit?.message}</p>}

                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <input
                                            className="login_input"
                                            type="number"
                                            placeholder="Winning Price"
                                            {...register("winningPrice", {
                                                required: "Winning Price is required",
                                            })}
                                        />
                                        {errors?.winningPrice && <p className="text-danger">{errors?.winningPrice?.message}</p>}
                                    </div>
                                    <div className='col-md-6'>
                                        <input
                                            className="login_input"
                                            type="number"
                                            placeholder="No Of Winners"
                                            {...register("noOfWinners", {
                                                required: "No Of winners is required",
                                            })}
                                        />
                                        {errors?.noOfWinners && <p className="text-danger">{errors?.noOfWinners?.message}</p>}
                                    </div>
                                </div>


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

export default CreateContest


