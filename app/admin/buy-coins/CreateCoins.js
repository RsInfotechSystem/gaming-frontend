"use client"
import { adminCommunication } from '@/services/admin-communication';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CreateCoins = ({ setModalStates, type, coinId, getCoinsList }) => {
    const { register, handleSubmit, formState: { errors }, getValues, watch, setValue } = useForm();
    const [loader, setLoader] = useState(false);

    //On  submit call api
    async function onSubmit(params) {
        try {
            setLoader(true);
            const serverResponse = (type === "create") ? await adminCommunication.createCoins(params) : await adminCommunication.updateCoins({ ...params, coinId });
            if (serverResponse.data.status === "SUCCESS") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "success", timer: 2000 });
                setModalStates({ coinId: "", type: "", modal: false });
                getCoinsList()
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
    async function getCoinById() {
        try {
            if (!coinId) {
                return
            }
            setLoader(true);
            const serverResponse = await adminCommunication.getCoinById(coinId);
            if (serverResponse.data.status === "SUCCESS") {
                setValue("coinsCount", serverResponse?.data?.coin?.coinsCount);
                setValue("rupeesAmt", serverResponse?.data?.coin?.rupeesAmt);
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

    useEffect(() => {
        if (type === "update") {
            getCoinById()
        }
    }, [])
    return (
        <>
            <div className="modal-overlay" >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="login_page_name">
                        <p className="mb-0">{type === "create" ? "Create User" : "Update User"}</p>
                    </div>
                    <hr className="modal-hr" />
                    <div className="p-4">
                        {/* Login Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="login_input"
                                type="number"
                                placeholder="No of Coins"
                                {...register("coinsCount", { required: "No of Coins is required" })}
                            />
                            {errors?.coinsCount && <p className="text-danger">{errors?.coinsCount?.message}</p>}
                            <input
                                className="login_input"
                                type="number"
                                placeholder="Price in Rs"
                                {...register("rupeesAmt", {
                                    required: "Price is required",
                                })}
                            />
                            {errors?.rupeesAmt && <p className="text-danger">{errors?.rupeesAmt?.message}</p>}

                            <div className="login_main modal_button_wrapper mt-5 mb-4">
                                <button className="popup_btn" type="submit">
                                    {type === "create" ? "Create" : "Update"}
                                </button>
                                <button className="popup_btn" onClick={() => setModalStates({ coinId: "", type: "", modal: false })}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateCoins
