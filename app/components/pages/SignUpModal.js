"use client";
import React from "react";

export default function SignUpModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="login_page_name">
                    <p className="mb-0">CREATE ACCOUNT</p>
                </div>
                <hr className="modal-hr" />
                <div className="p-5">
                    <input className="login_input" type="text" placeholder="Enter Name" />
                    <input className="login_input" type="email" placeholder="Enter Email" />
                    <input className="login_input" type="password" placeholder="Create Password" />
                    <div className="login_main mt-5">
                        <button className="popup_btn">SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
