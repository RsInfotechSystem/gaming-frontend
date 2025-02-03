"use client"
import React, { useEffect, useState } from 'react'
import LoginModal from '../LoginModal';
import SignUpModal from '../SignUpModal';
import ForgotPasswordModal from '../ForgotPasswordModal';

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);

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
      <section className='nav'>
        <div className='nav_main'>
          <div className='logo'>
            <p>Logo</p>
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
            <SignUpModal isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)} />

            {/* ForgotPassword Modal */}
            <ForgotPasswordModal isOpen={isForgotPasswordOpen} onClose={() => setForgotPasswordOpen(false)} />
          </div>
        </div>
        
      </section>

    </>
  );
}





