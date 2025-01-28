"use client";
import Image from "next/image";
import dance from "../../../../public/homepage/dance.jpg";
import pubg_1 from "../../../../public/homepage/pubg_1.jpg";
import React from "react";

export default function GamesAvailable() {
  return (
    <section className="games_section">
      <div className="d-flex main_games_section">
        {/* first div with image */}
        <div className="game_list d-flex">
          <div className="available_games_heading">
            <p className="gradient-text">Games Available</p>
          </div>

          <div className="games_vr_line"></div>
          <span className="games_vr_line_right"></span>

          <div className="list_of-games">
            <p id="bgmi_tab">BGMI</p>

            <p id="cod_tab">Call of Duty</p>

            <p id="freefire_tab">Free Fire</p>
          </div>
        </div>

        {/* Second div with image */}
        <div className="game_image_container">
           <div className="card" style={{ width: '30rem' }}>
             <img src="/homepage/pubg_1.jpg" className="card-img-top" alt="..." height={300}/>
             <div className="card-body">
               <h5 className="card-title">BGMI</h5>
               <p className="card-text">Battle Ground Mobile India
                <span style={{paddingLeft:"75px",color:"red",fontWeight:"bold"}}>75% User Playing</span></p>
               {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
             </div>
           </div>
         </div>

      </div>
    </section>
  );
}
