"use client";
import React from "react";
import Image from "next/image";
import tournament1 from "../../../../public/homepage/tournament1.jpg";
import tournament2 from "../../../../public/homepage/tournament2.jpg";
import tournament_cod from "../../../../public/homepage/tournament_cod.jpg";


export default function CardsCarousel() {
  return (
    <>
    <section className="news_section">
      <div className="news_head">
         <p>Recent News</p>
      </div>
      <div className="row card_section">
        <div className="cards_content col-md-4">
          <div className="card card_radius">
            <Image src={tournament1} alt="Card 1" className="cards_image d-block" />
            <div className="body_content_btn card-body">
              <p className="card-name">NEWS 109</p>
              <p className="card-content">Usually white text goes good with a red background but by using both black and..</p>
              <button className="read_btn">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="cards_content col-md-4">
          <div className="card card_radius">
            <Image src={tournament2} alt="Card 2" className="cards_image d-block" />
            <div className="body_content_btn card-body">
              <p className="card-name">NEWS 109</p>
              <p className="card-content">Usually white text goes good with a red background but by using both black and..</p>
              <button className="read_btn">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="cards_content col-md-4">
          <div className="card card_radius">
            <Image src={tournament_cod} alt="Card 3" className="cards_image d-block" />
            <div className="body_content_btn card-body">
              <p className="card-name">NEWS 109</p>
              <p className="card-content">Usually white text goes good with a red background but by using both black and..</p>
              <button className="read_btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='nav_hr_line_right'>

      </div> */}
    </section>
    
    </>
  );
}
