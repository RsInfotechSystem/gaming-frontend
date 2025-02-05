"use client";
import React, { useState } from "react";
import SignUpModal from "./SignUpModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setError } from "@/redux-stores/slices/userSlice";
import { useRouter } from "next/navigation";
import { communication } from "@/services/communication";
import { hideLoader, showLoader } from "@/redux-stores/loaderReducer";

export default function LoginModal({ isOpen, onClose, openSignUp, openForgotPassword }) {
    if (!isOpen) return null;

    const dispatch = useDispatch();
    const router = useRouter();
    const { isLoading } = useSelector((state) => state.loader);
    const { error, user } = useSelector((state) => state.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle Login API Call
    const handleLogin = async () => {
        if (!email || !password) {
            return Swal.fire({ text: "Please enter email and password", icon: "warning" });
        }

        try {
            dispatch(showLoader()); // Show loader
            const dataToSend = { email: email.toUpperCase(), password };

            const response = await communication.login(dataToSend);

            if (response?.data?.status === "SUCCESS") {
                dispatch(setUser(response?.data?.userDetails));
                Swal.fire({ text: response?.data?.message, icon: "success", timer: 2000 });
                router.push("/dashboard/manage-request");
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
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="login_page_name">
                        <p className="mb-0">LOG IN</p>
                    </div>
                    <hr className="modal-hr" />
                    <div className="p-4">
                        <input
                            className="login_input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="login_input"
                            type="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="login_main mt-5 mb-4">
                            <button className="popup_btn" onClick={handleLogin} disabled={isLoading}>
                                {isLoading ? "Logging in..." : "LET’S PLAY"}
                            </button>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        {user && <p>Welcome, {user.name}!</p>}
                        <div>
                            <p className="mb-0">
                                <button
                                    className="text-link"
                                    onClick={() => {
                                        onClose();
                                        setTimeout(openSignUp, 300);
                                    }}
                                >
                                    Create New Account
                                </button>
                            </p>
                            <p>
                                <button
                                    className="text-link"
                                    onClick={() => {
                                        onClose();
                                        setTimeout(openForgotPassword, 300);
                                    }}
                                >
                                    Forgot password?
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
