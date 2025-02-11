"use client"
import React, { useEffect, useState } from 'react'
import LoginModal from '../LoginModal';
import SignUpModal from '../SignUpModal';
import ForgotPasswordModal from '../ForgotPasswordModal';
import OtpModal from '../OtpModal';
import RegisterSuccessModal from '../RegisterSuccessModal';
import ResetPasswordModal from '../ResetPasswordModal';
import Footer from './Footer';

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [isResetPasswordOpen, setResetPasswordOpen] = useState(false);
  const [isOtpOpen, setOtpOpen] = useState(false);
  const [isSuccessOpen, setSuccessOpen] = useState(false);

  useEffect(() => {
    if (isLoginOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoginOpen]);


  return (
    <>
    <Navbar />
      <div>
          
      </div>

    </>
  );
}





