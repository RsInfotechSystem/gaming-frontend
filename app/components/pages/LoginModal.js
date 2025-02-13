"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setError } from "@/redux-stores/slices/userSlice";
import { useRouter } from "next/navigation";
import { communication } from "@/services/communication";
import { hideLoader, showLoader } from "@/redux-stores/loaderReducer";
import { setCookie } from "cookies-next";

export default function LoginModal({ onClose, openSignUp, openForgotPassword }) {
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
    const handleLogin = async (data) => {
        try {
            dispatch(showLoader()); // Show loader
            const dataToSend = { email: data?.email, password: data?.password };

            const response = await communication.login(dataToSend);

            if (response?.data?.status === "SUCCESS") {
                dispatch(setUser(response?.data?.userDetails));
                setCookie("GAMING", response?.data?.token);
                setCookie("gamingUserDetails", response?.data?.userDetails);
                Swal.fire({ text: response?.data?.message, icon: "success", timer: 2000 });
                router.push("/dashboard/games-list");
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
                    <p className="mb-0">LOG IN</p>
                </div>
                <hr className="modal-hr" />
                <div className="p-4">
                    {/* Login Form */}
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <input
                            className="login_input"
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}

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

                        <div className="login_main mt-5 mb-4">
                            <button className="popup_btn" type="submit" disabled={isLoading}>
                                {isLoading ? "Logging in..." : "Login"}
                            </button>
                        </div>
                    </form>
                    {error && <p className="text-danger">{error}</p>}

                    <div>
                        <p className="mb-0">
                            <button className="text-link" onClick={() => { onClose(); setTimeout(openSignUp, 300); }}>
                                Create New Account
                            </button>
                        </p>
                        <p>
                            <button className="text-link" onClick={() => { onClose(); setTimeout(openForgotPassword, 300); }}>
                                Forgot password?
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
