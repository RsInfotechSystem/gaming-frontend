"use client";
import React from "react";
import Image from "next/image";
import dance from "../../../../public/homepage/dance.jpg";

export default function CardsCarousel() {
  return (
    <section className="news_section">
      <div className="news_head">
         <p>Recent News</p>
      </div>
      <div className="row">
        <div className="cards_content col-md-4">
          <div className="card">
            <Image src={dance} alt="Card 1" className="cards_image d-block" />
            <div className="body_content_btn card-body">
              <h5 className="card-title">NEWS 109</h5>
              <p className="card-text">Usually white text goes good with a red background but by using both black and..</p>
              <button className="read_btn">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="cards_content col-md-4">
          <div className="card">
            <Image src={dance} alt="Card 2" className="cards_image d-block" />
            <div className="body_content_btn card-body">
              <h5 className="card-title">NEWS 109</h5>
              <p className="card-text">Usually white text goes good with a red background but by using both black and..</p>
              <button className="read_btn">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="cards_content col-md-4">
          <div className="card">
            <Image src={dance} alt="Card 3" className="cards_image d-block" />
            <div className="body_content_btn card-body">
              <h5 className="card-title">NEWS 109</h5>
              <p className="card-text">Usually white text goes good with a red background but by using both black and..</p>
              <button className="read_btn">READ MORE</button>
            </div>
          </div>
        </div>
        {/* <div className="col-md-3">
          <div className="card">
            <Image src={dance} alt="Card 4" className="d-block w-100" />
            <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">This is the content of the fourth card.</p>
              <button className="read_btn">Learn More</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
