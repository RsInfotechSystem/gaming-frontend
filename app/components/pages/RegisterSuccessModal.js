"use client";
import React, { useState, useEffect } from "react";
import SignUpModal from "./SignUpModal";
import backarrow from "../../../public/homepage/backarrow.png";
import Image from "next/image";

export default function RegisterSuccessModal({ isOpen, onClose, openSignUp, openOtpModal }) {
    if (!isOpen) return null;


    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="login_page_name">
                        <button className="backarrow_btn" onClick={() => {
                            onClose();
                            setTimeout(openOtpModal, 300);
                        }}>

                            <Image src={backarrow} alt="backarrow" width={12}></Image>
                        </button>
                        <p className="mb-0">REGISTER</p>
                    </div>
                    <hr className="modal-hr" />
                    <div className="p-4">
                        {/* <input className="login_input" type="text" placeholder="OTP" /> */}
                        <p className="text-link" style={{ cursor: "unset" }}>
                            Registered Successfully !
                        </p>
                        <div className="login_main mt-5 mb-4 py-4">
                            <button className="popup_btn">LET’S PLAY</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
