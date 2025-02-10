"use client";
import React from "react";
import backarrow from "../../../public/homepage/backarrow.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { hideLoader, showLoader } from "@/redux-stores/loaderReducer";
import { setError } from "@/redux-stores/slices/userSlice";
import Swal from "sweetalert2";
import { setCookie } from "cookies-next";
import { communication } from "@/services/communication";
import { useForm } from "react-hook-form";

export default function ResetPasswordModal({ isOpen, onClose, openLoginModal }) {
    if (!isOpen) return null;

    const dispatch = useDispatch();
    const router = useRouter();
    const { isLoading } = useSelector((state) => state.loader);
    const { error } = useSelector((state) => state.user);

    // Initialize form handling
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle Login API Call
    const handleReset = async (data) => {
        try {
            dispatch(showLoader()); // Show loader

            const response = await communication.resetPassword(data);

            if (response?.data?.status === "SUCCESS") {
                Swal.fire({ text: response?.data?.message, icon: "success", timer: 2000 });
                router.push("/");
                onClose(); // Close modal after successful login
            } else {
                dispatch(setError(response?.data?.message || "Reset failed"));
                Swal.fire({ text: response?.data?.message || "Reset failed", icon: "warning" });
            }
        } catch (error) {
            dispatch(setError(error?.response?.data?.message || "Reset failed"));
            Swal.fire({ text: error?.response?.data?.message || "Reset failed", icon: "error" });
        } finally {
            dispatch(hideLoader()); // Hide loader
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="login_page_name">
                    <button className="backarrow_btn" onClick={() => {
                        onClose();
                        setTimeout(openLoginModal, 300);
                    }}>
                        <Image src={backarrow} alt="backarrow" width={12}></Image>
                    </button>
                    <p className="mb-0">RESET PASSWORD</p>
                </div>
                <hr className="modal-hr" />
                <div className="p-5">
                    <form onSubmit={handleSubmit(handleReset)}>

                        <input
                            className="login_input"
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors?.email && <p className="text-danger">{errors?.email?.message}</p>}

                        <input
                            className="login_input"
                            type="password"
                            placeholder="New Password"
                            autoComplete="new-password"
                            {...register("newPassword", {
                                required: "New Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                            })}
                        />
                        {errors?.newPassword && <p className="text-danger">{errors?.newPassword?.message}</p>}

                        <input
                            className="login_input"
                            type="password"
                            placeholder="Confirm New Password"
                            autoComplete="new-password"
                            {...register("confirmNewPassword", {
                                required: "Confirm New Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                            })}
                        />
                        {errors?.confirmNewPassword && <p className="text-danger">{errors?.confirmNewPassword?.message}</p>}

                        <div className="login_main mt-5">
                            <button className="popup_btn" type="submit">RESET</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
