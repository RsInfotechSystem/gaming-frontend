"use client";
import React from "react";
import backarrow from "../../../public/homepage/backarrow.png";
import Image from "next/image";

export default function SignUpModal({ isOpen, onClose, openLoginModal, openOtpModal }) {
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
                    <p className="mb-0">REGISTER</p>
                </div>
                <hr className="modal-hr" />
                <div className="p-4">
                    <input className="login_input"
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}

                    <input className="login_input"
                        type="email"
                        placeholder="Email" />


                    <input className="login_input" type="password" placeholder="Create Password" autoComplete="new-password" />

                    <div className="login_main mt-5">
                        <button className="popup_btn" onClick={() => {
                            onClose();
                            setTimeout(openOtpModal, 300);
                        }}>NEXT</button>
                    </div>
                    <div className="mt-4">
                        <p>
                            <button className="text-link" onClick={() => {
                                onClose();
                                setTimeout(openLoginModal, 300);
                            }}>
                                Already had an account?
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
