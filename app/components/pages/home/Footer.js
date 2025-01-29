"use client"
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <>
      <section className='footer_section'>
        {/* Background Video */}
        {/* <video autoPlay loop muted playsInline className="footer_bg_video">
        <source src="/homepage/homepage.background_play.mp4" type="video/mp4" />
        </video> */}

        <div className='footer_content'>
          <div className='d-flex'>
            <div className='left_side_footer'>
              <p>Stay up to date, subscribe to our news about any tournament and others</p>
              <div className="input-group w-50">
                <input type="email" className="form-control" placeholder="Email" />
                <button className="btn btn-primary" type="button">Let's GO</button>
              </div>
            </div>

            <div className='right_side_footer ms-auto'>
              <p>
                Register now for BGIS 2025, India’s premier Battle Royale esports tournament. 
                Assemble your squad, meet eligibility criteria, and compete for fame and a ₹2 crore prize pool!
              </p>
            </div>
          </div>

          <p className='text-center' style={{ color: "#FFFFFF" }}>
            LET'S PLAY <span>XYZ GAMING</span>
          </p>

          <div className='text-center'>
            <button type="button" className="btn btn-danger">Danger</button>
          </div>

          <div className='social_media_icon text-center'>
            <a href='/'><i className="bi bi-facebook"></i></a>
            <a href='/'><i className="bi bi-instagram"></i></a>
            <a href='/'><i className="bi bi-linkedin"></i></a>
            <a href='/'><i className="bi bi-youtube"></i></a>
          </div>

          <div className='text-center'>
            <span style={{ color: "#FFFFFF" }}>FAQs</span>
            <span style={{ color: "#FFFFFF" }}>Contact us</span>
            <span style={{ color: "#FFFFFF" }}>T&C</span>
          </div>

          <div className='text-center'>
            <p style={{ color: "#FFFFFF" }}>
              Designed & Developed by RS Infotech System Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
