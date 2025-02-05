"use client";
import React, { useState, useEffect } from "react";
import SignUpModal from "./SignUpModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import backarrow from "../../../public/homepage/backarrow.png";
import Image from "next/image";


export default function LoginModal({ isOpen, onClose, openSignUp, openForgotPassword }) {
    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="login_page_name">
                        {/* <button className="backarrow_btn" >
                            <Image src={backarrow} alt="backarrow" width={12}></Image>
                        </button> */}
                        <p className="mb-0">LOG IN</p>
                    </div>
                    <hr className="modal-hr" />
                    <div className="p-4">
                        <input className="login_input" type="email" placeholder="Email" />
                        <input className="login_input" type="password" placeholder="Password" autoComplete="new-password" />
                        <div className="login_main mt-5 mb-4">
                            <button className="popup_btn">LET’S PLAY</button>
                        </div>
                        <div>
                            <p className="mb-0">
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
