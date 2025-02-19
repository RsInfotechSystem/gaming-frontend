"use client";
import React from "react";

export default function GamesAvailable() {
  return (
    <section className="games_section">
      <div className="main_games_section">
        <div className="game_list d-flex justify-content-center">
          <div className="available_games_heading">
            <p className="gradient-text">Games Available</p>
            <span className="games_vr_line"></span>
            <span className="games_vr_line_right"></span>
          </div>

          <span className="games_vr_line"></span>
          <span className="games_vr_line_right"></span>

          <div className="list_of_games">
            <p id="bgmi_tab">BGMI</p>

            <p id="cod_tab">Call of Duty</p>

            <p id="freefire_tab">Free Fire</p>
          </div>
      
        </div>

        {/* Second div with image */}
        <div className="game_image_container">
           <div className="card poster_div">
             <img src="/homepage/pubg_1.jpg" className="poster_image" alt="..." height={300}/>
             <div className="card-body">
               <h5 className="game_name">BGMI</h5>
               <p className="game_title">Battle Ground Mobile India
                <span style={{color:"red",fontWeight:"bold"}}>75% User Playing</span></p>
             </div>
           </div>
         </div>
      </div>
      
    </section>
  );
}