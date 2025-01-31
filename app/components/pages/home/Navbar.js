"use client"
import React, { useEffect, useState } from 'react'
import LoginModal from '../LoginModal';

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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
             {/* Login Popup Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
          </div>
        </div>
        
      </section>

    </>
  );
}





