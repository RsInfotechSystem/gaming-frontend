"use client";
import React from "react";
import backarrow from "../../../public/homepage/backarrow.png";
import Image from "next/image";

export default function ForgotPasswordModal({ isOpen, onClose, openLoginModal }) {
    if (!isOpen) return null;

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
                    <input className="login_input" type="email" placeholder="Enter your Email" />
                    <div className="login_main mt-5">
                        <button className="popup_btn">RESET</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
