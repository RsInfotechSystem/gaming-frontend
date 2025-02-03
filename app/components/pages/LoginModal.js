"use client";
import React, { useState, useEffect } from "react";
import SignUpModal from "./SignUpModal";
import ForgotPasswordModal from "./ForgotPasswordModal";

export default function LoginModal({ isOpen, onClose, openSignUp, openForgotPassword }) {
    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="login_page_name">
                        <p className="mb-0">LOG IN</p>
                    </div>
                    <hr className="modal-hr" />
                    <div className="p-5">
                        <input className="login_input" type="email" placeholder="Enter Email" />
                        <input className="login_input" type="password" placeholder="Enter Password" autoComplete="new-password" />
                        <div className="login_main mt-5">
                            <button className="popup_btn">LET’S PLAY</button>
                        </div>
                        <div>
                            <p>
                                <button className="text-link" onClick={() => {
                                    onClose(); // Close Login Modal
                                    setTimeout(openSignUp, 300); // Open SignUpModal after LoginModal closes
                                }}>
                                    Create New Account
                                </button>
                            </p>
                            <p>
                                <button className="text-link" onClick={() => {
                                    onClose(); // Close Login Modal
                                    setTimeout(openForgotPassword, 300); // Open ForgotPasswordModal after LoginModal closes
                                }}>
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
