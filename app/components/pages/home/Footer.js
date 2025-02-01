"use client"
import Image from 'next/image';
import React from 'react';
export default function Footer() {
  return (
    <>
      <section className='footer_section'>
        
      <video autoPlay loop muted playsInline className="footer_bg_video">
  <source src="/homepage/background_play.mp4" type="video/mp4" />
</video>

        <div className='footer_content'>
          <div className='d-flex top_footer'>
            <div className='left_side_footer'>
              <p>Stay up to date, subscribe to<br></br>our news about any tournament and others</p>
              <div className="input-group w-50">
                <input type="email" className="form-control email_box" placeholder="Email" />
                <button className="btn btn-primary lets_go_btn" type="button">Let's GO</button>
              </div>
            </div>

            <div className='right_side_footer ms-auto'>
              <p>
                Register now for BGIS 2025, India’s premier Battle Royale esports tournament. 
                Assemble your squad, meet eligibility criteria, and compete for fame and a ₹2 crore prize pool!
              </p>
            </div>
          </div>

         <div className='frame_logo' style={{textAlign:"right"}}>
           <img src="/homepage/Frame.png" className="" alt="..." height={80} />  
         </div>

         <div className='lets_play'>
              <p className='text-center lets_play_set'>
                  LET'S PLAY 
                  {/* <span className='xyz_gaming'>XYZ GAMING</span> */}
              </p>
         </div>
          

          <div className='text-center register_btn'>
            <button type="button">REGISTER NOW</button>
          </div>

          <div className='social_media_icon text-center d-flex'>
            <a href='/'><i className="icon_size bi bi-facebook" style={{width:"20px",height:"20px"}}></i></a>
            <a href='/'><i className="icon_size bi bi-instagram" style={{width:"20px",height:"20px"}}></i></a>
            <a href='/'><i className="icon_size bi bi-linkedin" style={{width:"20px",height:"20px"}}></i></a>
            <a href='/'><i className="icon_size bi bi-youtube" style={{width:"20px",height:"20px"}}></i></a>
          </div>

          <div className='terms_condtion text-center d-flex'>
            <span style={{ color: "#FFFFFF" }}>FAQs</span>
            <span style={{ color: "#FFFFFF" }}>Contact us</span>
            <span style={{ color: "#FFFFFF" }}>T&C</span>
          </div>

          <div className='text-center company_design'>
            <p style={{ color: "#FF8183" }}>
              Designed & Developed by RS Infotech System Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
