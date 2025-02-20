"use client";
import React from "react";
import pubgPoster from "../../../../public/homepage/pubgPoster.jpg";
import freefire from "../../../../public/homepage/freefire.jpg";
import Group from "../../../../public/homepage/Group.png";
import cod from "../../../../public/homepage/cod.jpg";
import Maskgroup from "../../../../public/homepage/Maskgroup.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div id="demo" className="carousel slide carousel_main" data-bs-ride="carousel">
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        </div>

        {/* Carousel Content */}
        <div className="carousel-inner content_height">
          {/* First Slide with Text and Images */}
          <div className="carousel-item active hero_center">
            <div className="hero_image">
              {/* Left Section */}
              <div className="text_content text_pad">
                <p className="skill_play">PLAY FOR SKILL</p>
                <p className="skill_play_content">
                  The electric blue color reminds me of the police.
                  Maybe if you <br /> played as a Police man in the Ruiner world.
                </p>
                <p className="remote_set">
                  <Image src={Group} alt="Controller Image" className="d-block" />
                </p>
              </div>

              {/* Right Section */}
              <div className="gun_set">
                <Image src={Maskgroup} alt="Gun Image" className="d-block" />
              </div>
            </div>
          </div>

          {/* Other Image Slides */}
          <div className="carousel-item carousel_images">
            <Image src={pubgPoster} alt="Pubg_Image" className="d-block" />
          </div>
          <div className="carousel-item carousel_images">
            <Image src={freefire} alt="FreeFire_Image" className="d-block" />
          </div>
          <div className="carousel-item carousel_images">
            <Image src={cod} alt="COD_Image" className="d-block" />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon next_btn_height"></span>
        </button>
      </div>
    </section>
  );
}
