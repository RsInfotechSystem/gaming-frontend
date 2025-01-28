"use client"
import leadImage from "../../../../public/homepage/leadImage.png";
import Image from "next/image";
import React from 'react';

export default function GameLead() {
  return (
    <>
    <section className='game_lead_section'>
      <div className='main_game_lead_section'>
         <div>
            <p style={{color:"white"}}>#theGameLead</p>
         </div>

         <div className="d-flex">
             <div>
              <Image src={leadImage} alt="Lo Angeles" className="d-block" style={{height:"90%"}}/> 
             </div>
             <div>
                 <div>
                   <p style={{color:"white"}}>PLAY WITH US</p>
                 </div>
                 <div className="d-flex">
                   <div>
                    <p style={{color:"white"}}>Ruiner uses a very distinct all red color palette for their UI. The monochrome palette here gives a sense of power and anger with the red. When I first played through Ruiner I thought the red was the brightest read I've ever seen. But now that I'm looking at it, it kind of has a little purple in it. nd</p>
                    </div>
                    <div>
                    <p className="lead_vr_line"></p>
                    </div>
                    
                 </div>
             </div>
         </div>
      </div>
    </section>
      
    </>
  );
}






