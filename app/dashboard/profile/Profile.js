"use client";

import Image from "next/image";
import React from "react";
import network from "../../../public/dashboard/network.png";
import cod_game from "../../../public/dashboard/cod_game.jpeg";

export default function Profile() {
  return (
    <div className="tournament_list container-fluid mt-5 pt-5">
       <p className="tournament_text d-flex align-items-center">
                    MY PROFILE{" "}
                    <Image className="ms-2" width={25} height={20} src={network} alt="network" />
                  </p>
      <div className="card profile-card shadow-lg p-4">
        <div className="row align-items-center">
          {/* Profile Image Section */}
          <div className="col-md-4 d-flex justify-content-center">
            <Image
              src={cod_game}
              width={150}
              height={150}
              className="rounded-circle profile-img img-fluid"
              alt="Player Image"
            />
          </div>

          {/* Profile Details Section */}
          <div className="col-md-8 text-center text-md-start">
            <h3 className="fw-bold">John Doe</h3>
            <p className="rank-text fs-5">🏆 Rank: #1</p>
            <p className="team-text fs-5">Team: Warriors</p>
            {/* <button className="btn btn-primary mt-3">View Profile</button> */}
          </div>
        </div>
      </div>
    </div>

    
  );
}
