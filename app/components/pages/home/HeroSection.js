"use client"
import React from 'react';
import pubgPoster from "../../../../public/homepage/pubgPoster.jpg";
import freefire from "../../../../public/homepage/freefire.jpg";
import Group from '../../../../public/homepage/Group.png';
import cod from '../../../../public/homepage/cod.jpg';
import Maskgroup from '../../../../public/homepage/Maskgroup.png';

import Image from 'next/image';

export default function HeroSection() {

  return (
    <>
      <section>
        <div id="demo" className="carousel slide carousel_main" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          </div>

          <div className="carousel-inner">
          <div className="carousel-item active play_for_skill">
  <p className="skill_play">PLAY FOR SKILL</p>
  <p className="skill_play_content" style={{ color: "white" }}>
    The electric blue color reminds me of the police.
    Maybe if you<br></br>played as a Police man in the Ruiner world.
  </p>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <p className='remote_set'>
      <Image src={Group} alt="Lo Angeles" className="d-block" style={{ width: "120px", height: "110px" }} />
    </p>
    <span className='gun_set'>
      <Image src={Maskgroup} alt="gun Image" className="d-block" style={{ width: "250px", height: "290px" }} />
    </span>
  </div>
</div>

            <div className="carousel-item carousel_images">
              <Image src={pubgPoster} alt="Pubg_Image" className="d-block" style={{ width: "1000px",height:"450px",paddingBottom:"110px",paddingLeft:"120px"}}/>
            </div>
            <div className="carousel-item carousel_images">
            <Image src={freefire} alt="FreeFire_Image" className="d-block" style={{ width: "1000px",height:"450px",paddingBottom:"110px",paddingLeft:"120px"}}/>
            </div>
            <div className="carousel-item carousel_images">
            <Image src={cod} alt="COD_Image" className="d-block" style={{ width: "1000px",height:"450px",paddingBottom:"110px",paddingLeft:"120px"}}/>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon next_btn_height"></span>
          </button>
        </div>
        
        
      </section>

    </>
  );
}





