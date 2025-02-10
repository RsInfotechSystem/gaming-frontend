"use client"
import React, { useEffect, useState } from 'react'
import LoginModal from '../LoginModal';
import SignUpModal from '../SignUpModal';
import ForgotPasswordModal from '../ForgotPasswordModal';
import OtpModal from '../OtpModal';
import RegisterSuccessModal from '../RegisterSuccessModal';

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
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
      <section className='nav row'>
        <div className='nav_main'>
          <div className='logo'>
            <p>PlayZone</p>
          </div>
          <div className='nav_tab'>
            <div className='tabs'>
              <p>About</p>
            </div>
            <div className='tabs'>
              <p>FAQs</p>
            </div>
            <div className='tabs'>
              <p>Contact US</p>
            </div>
          </div>
        </div>

        <div className='second_nav'>
          <div className='nav_hr_line'>

          </div>
          <div className='login_main'>
            <button onClick={() => setIsLoginOpen(true)} className='login_btn'>LOG IN</button>

            {/* <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}
            <LoginModal
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
              openSignUp={() => setSignUpOpen(true)}
              openForgotPassword={() => setForgotPasswordOpen(true)}
            />

            {/* SignUp Modal */}
            <SignUpModal
              isOpen={isSignUpOpen}
              onClose={() => setSignUpOpen(false)}
              openLoginModal={() => setIsLoginOpen(true)}
              openOtpModal={() => setOtpOpen(true)}
            />

            {/* ForgotPassword Modal */}
            <ForgotPasswordModal
              isOpen={isForgotPasswordOpen}
              onClose={() => setForgotPasswordOpen(false)}
              openLoginModal={() => setIsLoginOpen(true)}
            />


            {/* OTP Modal */}
            <OtpModal
              isOpen={isOtpOpen}
              onClose={() => setOtpOpen(false)}
              openSignUp={() => setSignUpOpen(true)}
              openSuccessModal={() => setSuccessOpen(true)}
            />

            {/* Success Modal */}
            <RegisterSuccessModal
              isOpen={isSuccessOpen}
              onClose={() => setSuccessOpen(false)}
              openOtpModal={() => setOtpOpen(true)}

            />

          </div>
        </div>

      </section>

    </>
  );
}





