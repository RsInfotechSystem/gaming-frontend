"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import aboutg4 from "../../../../../public/homepage/aboutg4.jpg";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../Footer';
import Link from 'next/link';

export default function AboutUS() {

  return (
    <>
    <Navbar/>
       <div>
       <section className='contact_section'>
            <div className='text-center center_head'>
                <p className='contact_page'>ABOUT <span style={{color:"red"}}>US</span>
                
                </p>
                <p className='contact_content'><Link href='/'><span style={{color:"red"}}>HOME</span></Link> / ABOUT</p>
            </div>  
            {/* <div className='horizontal_line'></div>
          <div className='horizontal_line_small'></div> */}
          </section>

          <section className='row main_about_section'>
               <div className='col-6 about_content_side'>
                <div className='about_head'>
                   <p>
                     ABOUT COMPANY
                   </p>
                </div>

                <div className='about_head_main'>
                   <p>
                     About Time Must <br></br>
                     <span>PlayZone Gaming</span>
                     {/* <span style={{color:"#DA00AB"}}>P</span>
                     <span style={{color:"#83B320"}}>r</span>
                     <span style={{color:"#0470CA"}}>o</span>
                     <span style={{color:"#F9812F"}}>p</span>
                     <span style={{color:"#6B0AFF"}}>e</span>
                     <span style={{color:"#2FC36A"}}>r</span>
                     <span style={{color:"#B700DA"}}>t</span>
                     <span style={{color:"#2AA9D2"}}>i</span>
                     <span style={{color:"#E8623F"}}>e</span>
                     <span style={{color:"#E6405C"}}>s</span> */}
                   </p>
                </div>
                <div className='first_about_content'>
                <p>
                Welcome to <strong>PlayZone Gaming</strong> your ultimate destination for everything gaming! Whether you're a seasoned pro, a casual player, or just starting your journey, we’re here to fuel your passion for gaming with the latest news, in-depth reviews, and an engaging community.
                </p>
                </div>
                <div>
                <p className='second_about_content'>
                At <strong>PlayZone Gaming</strong> we believe that gaming is more than just a pastime—it’s an experience that brings people together, sparks creativity, and pushes the boundaries of technology. Our platform is built for gamers, by gamers, ensuring that you get the best content, exciting discussions, and a space to celebrate the games you love.
                </p>
                </div>
                
                <button className='contact_btn'>CONTACT US</button>
               </div>

               <div className='col-6 about_image_side'>
               <Image src={aboutg4} alt="Office Desk" height={450} className='w-100'/>
               </div>
          </section>

          {/* <section className='row mx-5'>
            <div className='col-6'>
              <div className='company_lead'>
                 <p>
                 Recognized as one of <br></br><span>the leading</span> Companies!
                 </p>
                 <p>meet <span>our team</span></p>
              </div>
              </div>
              
              <div className='col-6'>
              <div className='company_lead_content'>
                  <p>
                  At Time Must Properties, we take great pride in being recognized as one of the leading companies in the real estate industry. With a strong commitment to excellence and a dedication to exceeding our clients’ expectations, we have earned a reputation for delivering outstanding service and exceptional results. Our relentless pursuit of innovation and our unwavering focus on client satisfaction have positioned us as a trusted partner for all real estate needs.
                  </p>
              </div>
              </div>
          </section> */}

          {/* <div className="container-fluid custom-container px-4">
    <div className="row d-flex justify-content-between">
    <div className="col-md-4 col-sm-6 mb-4 card_height">
        <div className='icons_aws'>
            <p>
            <img src="/homepage/mission.png" className="icon-white" width="40" height="40" />
            </p>
            <h5 className="card-title text-center">Company Mission</h5>
            <p className="card-text text-center">"We create an immersive gaming hub where players can discover, connect, and compete. Stay updated with the latest news, reviews, and esports action. Join our community and level up your gaming experience!"</p>
        </div>
   </div>

   <div className="col-md-4 col-sm-6 mb-4 card_height">
        <div>
            <div className='icons_aws'>
                <p>
                    <img src="/assets/vision-icon.png" alt="Mission Icon" width="40" height="40" />
                </p>
            </div>
            <h5 className="card-title text-center">Company Vision</h5>
            <p className="card-text text-center">Some quick example text.</p>
        </div>
  </div>

        <div className="col-md-4 col-sm-12 mb-4 card_height">
                <div className='icons_aws'>
               <p>
               <img src="/assets/vision-icon.png" alt="Mission Icon" width="40" height="40" />
                </p>
                    <h5 className="card-title text-center">Company History</h5>
                    <p className="card-text text-center">Some quick example text.</p>
                </div>
        </div>
    </div>
      </div> */}
       </div>
      
      <Footer />
    </>
  );
}
