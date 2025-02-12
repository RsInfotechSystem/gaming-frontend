"use client";

import React, { useState } from "react";
import Image from "next/image";
import coin_img from "../../../../public/dashboard/coin_img.png";
import coins from "../../../../public/dashboard/coins.png";
import network from "../../../../public/dashboard/network.png";
import Link from "next/link";

export default function GameInfo() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="tournament_list">
      <div className="mt-1 coin_pack">
        <div className="mt-1">

          <p className="tournament_text">
            CONTEST{" "}
            <Image className="me-2" width={25} height={20} src={network} alt="network" />
          </p>
        </div>
        <div className="container">
          {/* Tabs */}
          <ul className="nav nav-pills mb-2">
            <li className="nav-item contest_menu_btn">
              <button
                className={`nav-link ${activeTab === "home" ? "active" : ""} contest_menu`}
                onClick={() => setActiveTab("home")}
              >
                Solo
              </button>
            </li>
            <li className="nav-item contest_menu_btn">
              <button
                className={`nav-link ${activeTab === "menu1" ? "active" : ""} contest_menu`}
                onClick={() => setActiveTab("menu1")}
              >
                Duo
              </button>
            </li>
            <li className="nav-item contest_menu_btn">
              <button
                className={`nav-link ${activeTab === "menu2" ? "active" : ""} contest_menu`}
                onClick={() => setActiveTab("menu2")}
              >
                Squad
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "home" && (
              <div className="container tab-pane active">
                <div className="row gy-4">
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                        <div className="card custom-card-contest">
                          <div className="card-header-contest d-flex justify-content-between align-items-center">
                            <h5 className="m-0">First Come First Serve</h5>
                            <span className="badge custom-badge-contest">ID: 2TMSAG</span>
                          </div>

                          <div className="card-body">
                            <div className="row text-center">
                              <div className="col-6">
                                <p className="label-contest">Date</p>
                                <p className="value-contest">12/2/2025</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Time</p>
                                <p className="value-contest">10:30 PM</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Map</p>
                                <p className="value-contest">Classic / Solo</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Perspective</p>
                                <p className="value-contest">TPP</p>
                              </div>
                            </div>

                            <div className="row text-center mt-3">
                              <div className="col-4">
                                <p className="label-contest">Prize Pool</p>
                                <p className="value-contest">💎 1000</p>
                              </div>
                              <div className="col-4">
                                <p className="label-contest">Winners</p>
                                <p className="value-contest">2</p>
                              </div>
                              <div className="col-4">
                                <p className="label-contest">Join Using</p>
                                <p className="value-contest text-success">400 Coins</p>
                              </div>
                            </div>

                            <div className="progress-container-contest mt-3">
                              <div className="d-flex justify-content-between small">
                                <span>45 players remaining</span>
                                <span>5 players joined</span>
                              </div>
                              {/* <div className="progress-contest mt-1">
                                <div className="progress-bar-contest progress-bar-striped" style={{ width: "50%" }}></div>
                              </div> */}
                            </div>

                            <button className="btn btn-warning-contest w-100 mt-3 fw-bold">JOIN NOW</button>
                          </div>
                        </div>

                      </div>
                    ))}
                </div>
              </div>
            )}
            {activeTab === "menu1" && (
              <div className="container tab-pane active">
                <div className="row gy-4">
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                        <div className="card custom-card-contest">
                          <div className="card-header-contest d-flex justify-content-between align-items-center">
                            <h5 className="m-0">First Come First Serve</h5>
                            <span className="badge custom-badge-contest">ID: 2TMSAG</span>
                          </div>

                          <div className="card-body">
                            <div className="row text-center">
                              <div className="col-6">
                                <p className="label-contest">Date</p>
                                <p className="value-contest">12/2/2025</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Time</p>
                                <p className="value-contest">10:30 PM</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Map</p>
                                <p className="value-contest">Classic / Duo</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Perspective</p>
                                <p className="value-contest">TPP</p>
                              </div>
                            </div>

                            <div className="row text-center mt-3">
                              <div className="col-4">
                                <p className="label-contest">Prize Pool</p>
                                <p className="value-contest">💎 1000</p>
                              </div>
                              <div className="col-4">
                                <p className="label-contest">Winners</p>
                                <p className="value-contest">2</p>
                              </div>
                              <div className="col-4">
                                <p className="label-contest">Join Using</p>
                                <p className="value-contest text-success">400 Coins</p>
                              </div>
                            </div>

                            <div className="progress-container-contest mt-3">
                              <div className="d-flex justify-content-between small">
                                <span>45 players remaining</span>
                                <span>5 players joined</span>
                              </div>
                              {/* <div className="progress-contest mt-1">
                                <div className="progress-bar-contest progress-bar-striped" style={{ width: "50%" }}></div>
                              </div> */}
                            </div>

                            <button className="btn btn-warning-contest w-100 mt-3 fw-bold">JOIN NOW</button>
                          </div>
                        </div>

                      </div>
                    ))}
                </div>
              </div>
            )}
            {activeTab === "menu2" && (
              <div className="container tab-pane active">
                <div className="row gy-4">
                  {Array(2)
                    .fill(0)
                    .map((_, index) => (
                      <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                        <div className="card custom-card-contest">
                          <div className="card-header-contest d-flex justify-content-between align-items-center">
                            <h5 className="m-0">First Come First Serve</h5>
                            <span className="badge custom-badge-contest">ID: 2TMSAG</span>
                          </div>

                          <div className="card-body">
                            <div className="row text-center">
                              <div className="col-6">
                                <p className="label-contest">Date</p>
                                <p className="value-contest">12/2/2025</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Time</p>
                                <p className="value-contest">10:30 PM</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Map</p>
                                <p className="value-contest">Classic / Squad</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Perspective</p>
                                <p className="value-contest">TPP</p>
                              </div>
                            </div>

                            <div className="row text-center mt-3">
                              <div className="col-4">
                                <p className="label-contest">Prize Pool</p>
                                <p className="value-contest">💎 1000</p>
                              </div>
                              <div className="col-4">
                                <p className="label-contest">Winners</p>
                                <p className="value-contest">2</p>
                              </div>
                              <div className="col-4">
                                <p className="label-contest">Join Using</p>
                                <p className="value-contest text-success">400 Coins</p>
                              </div>
                            </div>

                            <div className="progress-container-contest mt-3">
                              <div className="d-flex justify-content-between small">
                                <span>45 players remaining</span>
                                <span>5 players joined</span>
                              </div>
                              {/* <div className="progress-contest mt-1">
                                <div className="progress-bar-contest progress-bar-striped" style={{ width: "50%" }}></div>
                              </div> */}
                            </div>

                            <button className="btn btn-warning-contest w-100 mt-3 fw-bold">JOIN NOW</button>
                          </div>
                        </div>

                      </div>
                    ))}
                </div>
              </div>
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
}
