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
          <p className='contact_page'>CONTACT <span style={{ color: "red" }}>US</span></p>
          <p className='contact_content'><span style={{ color: "red" }}>HOME</span> / CONTACT US</p>
        </div>
        {/* <div className='horizontal_line'></div>
          <div className='horizontal_line_small'></div> */}
      </section>

      <section className='row combo_section d-flex justify-content-between'>
        {/* Left Side - Form Section */}
        <motion.div 
          className='col-lg-6 col-md-12 form_section gap-5'
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
        >
          <form>
            <div>
              <div className='mb-4 pt-5'>
                <input type='text' className='form-control' placeholder='Name' required />
              </div>
              <div className='mb-4'>
                <input type='email' className='form-control' placeholder='Email' required />
              </div>
              <div className='mb-4'>
                <input type='number' className='form-control' placeholder='Mobile No' required />
              </div>
              <div className='mb-4'>
                <input type='text' className='form-control' placeholder='Subject' />
              </div>
              <div className='mb-4'>
                <textarea className='form-control' rows='5' placeholder='Your Message' required></textarea>
              </div>
              <div>
                <div className='row'>
                  <div className='col-3 pb-5 submit_btn'>
                    <button type='submit' className='fw-bold'>SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Right Side - Contact Info Section */}
        <motion.div 
          className='col-lg-6 col-md-12 contact_right_side'
          initial={{ x: 200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
        >
          <div className='get_touch'>
            <p>GET IN TOUCH</p>
          </div>

          <div className='touch_with_us'>
            <p>Connect with us :</p>
            <span>Reach out now</span>
          </div>

          <div className='contact_content_right'>
            <p>We’re here to assist you! Please don’t hesitate to reach out with any questions, concerns, or feedback. Your satisfaction is our priority. Contact us now!</p>
          </div>

          <div className='contact_deatails'>
            <p>
              <a href='tel:+91 1234567895'>
                <i className='bi bi-telephone-plus-fill'></i> +91- 1234567895
              </a>
            </p>
            <p>
              <a href='tel:+91 5489759586'>
                <i className='bi bi-telephone-plus-fill'></i> +91- 5489759586
              </a>
            </p>
            <p>
              <a href='mailto:rightserveinfotechsystems@gmail.com'>
                <i className='bi bi-envelope-at-fill'></i> rightserveinfotechsystems@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Google Map Section */}
      <section className='row map_section mt-5'>
        <div className='col-12'>
          <h3 className='text-center mb-4'></h3>
          <div className='map-container' style={{ width: '100%', height: '400px' }}>
            <iframe
              title='Google Map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509706!2d144.95373631531582!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1c4416f%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sin!4v1623859637526!5m2!1sen!2sin'
              width='100%'
              height='400'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
        <div className='nav_hr_line'></div>
      </section>
    </div>
      
      <Footer />
    </>
  );
}
