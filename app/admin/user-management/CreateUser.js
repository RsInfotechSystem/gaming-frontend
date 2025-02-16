"use client"
import { adminCommunication } from '@/services/admin-communication';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CreateUser = ({ setModalStates, type, userId, getUserList }) => {
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
                        <p className="mb-0">{type === "create" ? "Create User" : "Update User"}</p>
                    </div>
                    <hr className="modal-hr" />
                    <div className="p-4">
                        {/* Login Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="login_input"
                                type="text"
                                placeholder="Name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors?.name && <p className="text-danger">{errors?.name?.message}</p>}
                            <input
                                className="login_input"
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors?.email && <p className="text-danger">{errors?.email?.message}</p>}

                            <input
                                className="login_input"
                                type="number"
                                placeholder="Mobile"
                                {...register("mobile", {
                                    required: "Mobile Number is required",
                                    minLength: {
                                        value: 10,
                                        message: "Mobile Should be 10 digits",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Mobile Should be 10 digits",
                                    },
                                })}
                            />
                            {errors?.mobile && <p className="text-danger">{errors?.mobile?.message}</p>}

                            <select
                                className="login_input"
                                {...register("roleId", { required: "Role is required" })}
                                value={getValues("roleId") ?? ""}
                            >
                                <option value="">Select Role</option>
                                {roles?.map((ele, index) => (
                                    <option value={ele?.id} key={index + 1}>
                                        {ele?.name}
                                    </option>
                                ))}
                            </select>
                            {errors?.roleId && <p className="text-danger">{errors?.roleId?.message}</p>}
                            {type === "create" &&
                                <>
                                    <input
                                        className="login_input"
                                        type="password"
                                        placeholder="Password"
                                        autoComplete="new-password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 8, message: "Password must be at least 8 characters" },
                                        })}
                                    />
                                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                </>
                            }

                            <div className="login_main modal_button_wrapper mt-5 mb-4">
                                <button className="popup_btn" type="submit">
                                    {type === "create" ? "Create" : "Update"}
                                </button>
                                <button className="popup_btn" onClick={() => setModalStates({ userId: "", type: "", modal: false })}>
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

export default CreateUser
