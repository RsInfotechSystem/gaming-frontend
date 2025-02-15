"use client"
import { adminCommunication } from '@/services/admin-communication';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CreateRole = ({ setModalStates, type, userId, getUserList }) => {
    const { register, handleSubmit, formState: { errors }, getValues, watch, setValue } = useForm();
    const [roles, setRoles] = useState([])
    const [loader, setLoader] = useState(false);

    //watch the role on changing value
    const roleId = watch("roleId")

    //On  submit call api
    async function onSubmit(params) {
        try {
            setLoader(true);
            const serverResponse = (type === "create") ? await adminCommunication.createUser(params) : await adminCommunication.updateUser({ ...params, userId });
            if (serverResponse.data.status === "SUCCESS") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "success", timer: 2000 });
                setModalStates({ userId: "", type: "", modal: false });
                getUserList(1, "")
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
    async function getRoles() {
        try {
            setLoader(true);
            const serverResponse = await adminCommunication.getActiveRoles();
            if (serverResponse.data.status === "SUCCESS") {
                setRoles(serverResponse?.data?.roles);
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                setRoles([])
            }
            setLoader(false)
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
            setLoader(false)
        }
    }

    //get User by Id
    async function getUserById() {
        try {
            if (!userId) {
                return
            }
            setLoader(true);
            const serverResponse = await adminCommunication.getUserById(userId);
            if (serverResponse.data.status === "SUCCESS") {
                setValue("name", serverResponse?.data?.user?.name);
                setValue("email", serverResponse?.data?.user?.email);
                setValue("mobile", serverResponse?.data?.user?.mobile);
                setValue("roleId", serverResponse?.data?.user?.roleId);
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
            getUserById()
        }
        getRoles()
    }, [])
    return (
        <>
            <div className="modal-overlay" >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="login_page_name">
                        <p className="mb-0">{type === "create" ? "Create Role" : "Update User"}</p>
                    </div>
                    <hr className="modal-hr" />
                    <div className="p-4">
                        {/* Login Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="login_input"
                                type="text"
                                placeholder="Role Name"
                                {...register("roleName", { required: "Role Name is required" })}
                            />
                            {errors?.roleName && <p className="text-danger">{errors?.roleName?.message}</p>}

                            {/* Checkbox group for tab access */}
                            <div className="tab-access mt-3 mx-4">
                                <label><strong className='text-white'>Select Tab Access:</strong></label>
                                <div className="tab-access-grid">
                                    <div>
                                        <input type="checkbox" value="dashboard" />
                                        <label className='text-white'> Dashboard</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" value="settings" />
                                        <label className='text-white'> Settings</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" value="reports" />
                                        <label className='text-white'> Reports</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" value="analytics" />
                                        <label className='text-white'> Analytics</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" value="analytics" />
                                        <label className='text-white'> Analytics</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" value="analytics" />
                                        <label className='text-white'> Analytics</label>
                                    </div>
                                </div>
                            </div>


                            {/* Buttons */}
                            <div className="login_main modal_button_wrapper mt-5 mb-4">
                                <button className="popup_btn" type="submit">
                                    {type === "create" ? "Create" : "Update"}
                                </button>
                                <button
                                    className="popup_btn"
                                    type="button"
                                    onClick={() => setModalStates({ userId: "", type: "", modal: false })}
                                >
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

export default CreateRole
