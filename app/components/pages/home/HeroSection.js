"use client"
import React from 'react';
import dance from '../../../../public/homepage/dance.jpg';
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
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src={dance} alt="Lo Angeles" className="d-block" style={{ width: "100%" }}/>
            </div>
            <div className="carousel-item">
            <Image src={dance} alt="Lo Angeles" className="d-block" style={{ width: "100%" }}/>
            </div>
            <div className="carousel-item">
            <Image src={dance} alt="Lo Angeles" className="d-block" style={{ width: "100%" }}/>
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





