"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from "framer-motion"

export default function Contact() {

  return (
    <>
    <Navbar/>
      <div className='contact_us'>
          <section className='contact_section'>
            <div className='text-center center_head'>
                <p className='contact_page'>CONTACT <span style={{color:"red"}}>US</span></p>
                <p className='contact_content'><span style={{color:"red"}}>HOME</span> / CONTACT US</p>
            </div>
          </section>

          <section className='row combo_section d-flex justify-content-between'>
      {/* Left Side - Form Section */}
      <motion.div 
        className='col-6 form_section gap-5'
        initial={{ x: -100, opacity: 0 }} // Start from the left
        animate={{ x: 0, opacity: 1 }} // Move to its original position
        transition={{ duration: 1, ease: "easeOut" }} // Animation duration
      >
        <form>
          <div>
            <div className='mb-4 pt-5'>
              <input type="text" className="form-control" placeholder='Name' required />
            </div>
            <div className='mb-4'>
              <input type="email" className="form-control" placeholder='Email' required />
            </div>
            <div className='mb-4'>
              <input type="number" className="form-control" placeholder='Mobile No' required />
            </div>
            <div className='mb-4'>
              <input type="text" className="form-control" placeholder='Subject' />
            </div>
            <div className='mb-4'>
              <textarea className="form-control" rows="5" placeholder='Your Message' required></textarea>
            </div>
            <div>
              <div className='row'>
                <div className='col-3 pb-5'>
                  <button type="submit" className="btn btn-dark w-100 fw-bold">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </motion.div>

      {/* Right Side - Contact Info Section */}
      <motion.div 
        className='col-6 contact_right_side'
        initial={{ x: 200, opacity: 0 }} // Start from the right
        animate={{ x: 0, opacity: 1 }} // Move to its original position
        transition={{ duration: 1, ease: "easeOut" }} // Animation duration
      >
        <div className='get_touch'>
          <p>GET IN TOUCH</p>
        </div>

        <div className='touch_with_us'>
          <p>Connect with us :</p>
          <span>Reach out now</span>
        </div>

        <div className='contact_content_right'>
          <p>
            We’re here to assist you! Please don’t hesitate to reach out with any questions, concerns, or feedback. Your satisfaction is our priority. Contact us now!
          </p>
        </div>

        <div className='contact_deatails'>
          <p>
            <a href='tel:+91 7058610868'>
              <i className="bi bi-telephone-plus-fill"></i> +91- 1234567895
            </a>
          </p>
          <p>
            <a href='tel:+91 7058610868'>
              <i className="bi bi-telephone-plus-fill"></i> +91- 5489759586
            </a>
          </p>
          <p>
            <a href='mailto:rightserveinfotechsystems@gmail.com'>
              <i className="bi bi-envelope-at-fill"></i> rightserveinfotechsystems@gmail.com
            </a>
          </p>
        </div>
      </motion.div>
    </section>
      </div>
      
      <Footer />
    </>
  );
}
