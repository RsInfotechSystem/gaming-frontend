"use client"
import React from 'react'

export default function Navbar() {

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
            <button className='login_btn'>LOG IN</button>
          </div>
        </div>
        
      </section>

    </>
  );
}





