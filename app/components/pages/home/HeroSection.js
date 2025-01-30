"use client"
import React from 'react';
import pubgPoster from "../../../../public/homepage/pubgPoster.jpg";
import freefire from "../../../../public/homepage/freefire.jpg";
import Group from '../../../../public/homepage/Group.png';
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
          <div className="carousel-item active">
  <p className="skill_play" style={{ color: "white" }}>PLAY FOR SKILL</p>
  <p className="skill_play_content" style={{ color: "white" }}>
    The electric blue color reminds me of the police.
    Maybe if you<br></br>played as a Police man in the Ruiner world.
  </p>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <p className='remote_set'>
      <Image src={Group} alt="Lo Angeles" className="d-block" style={{ width: "120px", height: "110px" }} />
    </p>
    <span className='gun_set'>
      <Image src={Maskgroup} alt="Lo Angeles" className="d-block" style={{ width: "250px", height: "280px" }} />
    </span>
  </div>
</div>

            <div className="carousel-item">
              <Image src={pubgPoster} alt="Lo Angeles" className="d-block" style={{ width: "800px",height:"330px"}}/>
            </div>
            <div className="carousel-item">
            <Image src={freefire} alt="Lo Angeles" className="d-block" style={{ width: "800px",height:"330px"}}/>
            </div>
            <div className="carousel-item">
            {/* <Image src={} alt="Lo Angeles" className="d-block" style={{ width: "700px",height:"320px"}}/> */}
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        
        
      </section>

    </>
  );
}





