"use client"
import Loader from '@/app/common-component/Loader'
import { adminCommunication } from '@/services/admin-communication';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddContestDetails = ({ contestId, setContestModal, getContestList }) => {
    const [loader, setLoader] = useState(false);
    const { register, handleSubmit, formState: { errors }, getValues, watch, setValue } = useForm();
    const router = useRouter();

    async function onSubmit(params) {
        try {
            setLoader(true)
            const serverResponse = await adminCommunication.addRoomId({ contestId, ...params });
            if (serverResponse.data.status === "SUCCESS") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "success", timer: 2000 });
                setContestModal({ contestId: "", modal: false });
                getContestList(1, "")
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
    return (
        <>
            {loader === true ?
                <Loader />
                :
                <div className="modal-overlay" >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="login_page_name">
                            <p className="mb-0">Update Contest Details</p>
                        </div>
                        <hr className="modal-hr" />
                        <div className="p-4">
                            {/* Login Form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className="login_input"
                                    type="text"
                                    placeholder="Room Id"
                                    {...register("roomId", { required: "Room Id is required" })}
                                />
                                {errors?.roomId && <p className="text-danger">{errors?.roomId?.message}</p>}
                                <input
                                    className="login_input"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                />
                                {errors?.password && <p className="text-danger">{errors?.password?.message}</p>}



                                <div className="login_main modal_button_wrapper mt-5 mb-4">
                                    <button className="popup_btn" type="submit">
                                        {"Submit"}
                                    </button>
                                    <button className="popup_btn" onClick={() => setContestModal({ contestId: "", modal: false })}>
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

export default AddContestDetails
