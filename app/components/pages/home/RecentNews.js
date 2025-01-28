"use client";
import React from "react";
import Image from "next/image";
import dance from "../../../../public/homepage/dance.jpg";

export default function CardsCarousel() {
  return (
    <section className="news_section">
      <p style={{color:"white"}}>Recent News</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Image src={dance} alt="Card 1" className="cards_image d-block" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is the content of the first card.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Image src={dance} alt="Card 2" className="cards_image d-block" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is the content of the seco card.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Image src={dance} alt="Card 3" className="cards_image d-block" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">This is the content of the third card.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        {/* <div className="col-md-3">
          <div className="card">
            <Image src={dance} alt="Card 4" className="d-block w-100" />
            <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">This is the content of the fourth card.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
