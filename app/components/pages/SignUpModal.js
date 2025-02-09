"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import backarrow from "../../../public/homepage/backarrow.png";
import { communication } from "@/services/communication";
import Swal from "sweetalert2";
import { setError, setUser } from "@/redux-stores/slices/userSlice";
import { hideLoader, showLoader } from "@/redux-stores/loaderReducer";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function SignUpModal({ isOpen, onClose, openLoginModal, openOtpModal }) {
    if (!isOpen) return null;

    const dispatch = useDispatch();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSignUp = async (data) => {
        try {
            dispatch(showLoader()); // Show loader

            const response = await communication.createPlayer(...data);

            if (response?.data?.status === "SUCCESS") {
                dispatch(setUser(response?.data?.userDetails));
                Swal.fire({ text: response?.data?.message, icon: "success", timer: 2000 });
                router.push("/");
                onClose(); // Close modal after successful login
            } else {
                dispatch(setError(response?.data?.message || "Login failed"));
                Swal.fire({ text: response?.data?.message || "Login failed", icon: "warning" });
            }
        } catch (error) {
            dispatch(setError(error?.response?.data?.message || "Login failed"));
            Swal.fire({ text: error?.response?.data?.message || "Login failed", icon: "error" });
        } finally {
            dispatch(hideLoader()); // Hide loader
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="login_page_name">
                    <button
                        className="backarrow_btn"
                        onClick={() => {
                            onClose();
                            setTimeout(openLoginModal, 300);
                        }}
                    >
                        <Image src={backarrow} alt="backarrow" width={12} />
                    </button>
                    <p className="mb-0">REGISTER</p>
                </div>
                <hr className="modal-hr" />
                <div className="p-4">
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <input
                            className="login_input"
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors?.name && <p className="text-danger">{errors.name.message}</p>}

                        <input
                            className="login_input"
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}

                        <input
                            className="login_input"
                            type="tel"
                            placeholder="Mobile Number"
                            {...register("mobile", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10-digit mobile number",
                                },
                            })}
                        />
                        {errors?.mobile && <p className="text-danger">{errors.mobile.message}</p>}

                        <input
                            className="login_input"
                            type="date"
                            {...register("dob", { required: "Date of Birth is required" })}
                        />
                        {errors?.dob && <p className="text-danger">{errors.dob.message}</p>}

                        <input
                            className="login_input"
                            type="text"
                            placeholder="Username"
                            {...register("userName", { required: "Username is required" })}
                        />
                        {errors?.userName && <p className="text-danger">{errors.userName.message}</p>}

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
                        {errors?.password && <p className="text-danger">{errors.password.message}</p>}

                        <input
                            className="login_input"
                            type="password"
                            placeholder="Confirm Password"
                            autoComplete="new-password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                            })}
                        />
                        {errors?.confirmPassword && <p className="text-danger">{errors?.confirmPassword.message}</p>}

                        <div className="login_main mt-5">
                            <button className="popup_btn" type="submit">

                                NEXT</button>
                        </div>
                    </form>
                    <div className="mt-4">
                        <p>
                            <button
                                className="text-link"
                                onClick={() => {
                                    onClose();
                                    setTimeout(openLoginModal, 300);
                                }}
                            >
                                Already had an account?
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
