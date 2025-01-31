"use client";
import React from "react";

export default function LoginModal({ isOpen, onClose }) {
    if (!isOpen) return null; // Hide modal if not open

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="login_page_name">
                    <p className="mb-0">LOG IN</p>
                </div>
                <hr className="modal-hr" />
                <div className="p-5">
                    <input className="login_input" type="email" placeholder="Email" />
                    <input className="login_input" type="password" placeholder="Password" />
                    <button className="login-btn">LOG IN</button>
                </div>

                {/* <button className="close-btn" onClick={onClose}>Close</button> */}
            </div>
        </div>
    );
}
