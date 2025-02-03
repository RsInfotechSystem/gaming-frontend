"use client";
import React from "react";

export default function ForgotPasswordModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="login_page_name">
                    <p className="mb-0">RESET PASSWORD</p>
                </div>
                <hr className="modal-hr" />
                <div className="p-5">
                    <input className="login_input" type="email" placeholder="Enter your Email" />
                    <div className="login_main mt-5">
                        <button className="popup_btn">RESET PASSWORD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
