"use client";

import Image from "next/image";
import React from "react";
import network from "../../../public/dashboard/network.png";
import cod_game from '../../../public/dashboard/cod_game.jpeg';


export default function Profile() {
  return (
    <>
      <div className="tournament_list container-fluid overflow-hidden">
        <div className="tournament_div">
          <div className="mt-1">
            <p className="tournament_text d-flex align-items-center">
              PROFILE{" "}
              <Image className="ms-2" width={25} height={20} src={network} alt="network" />
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="card profile-card shadow-lg p-4">
                <div className="text-center">
                  <Image
                    src={cod_game}
                    width={120}
                    height={120}
                    className="rounded-circle profile-img"
                    alt="Player Image"
                  />
                  <h3 className="mt-3 fw-bold">John Doe</h3>
                  <p className="rank-text">🏆 Rank: #1</p>
                  <p className="team-text">Team: Warriors</p>
                  {/* <a href="#" className="btn btn-primary mt-3">
                    View Profile
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
