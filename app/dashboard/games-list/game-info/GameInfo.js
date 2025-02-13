"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import coin_img from "../../../../public/dashboard/coin_img.png";
import coins from "../../../../public/dashboard/coins.png";
import network from "../../../../public/dashboard/network.png";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { communication } from "@/services/communication";
import Swal from "sweetalert2";
import Loader from "@/app/common-component/Loader";
import { formatDate } from "@/helper/formatDate";

export default function GameInfo() {
  const [activeTab, setActiveTab] = useState("home");
  const [loader, setLoader] = useState(false);
  const [joinContest, setJoinContest] = useState(false);
  const [gameWiseContestsList, setGameWiseContestsList] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const getGameWiseContestList = async () => {
    try {
      setLoader(true);
      // const userDetails = getUserDetails(router);
      const serverResponse = await communication.getGameWiseContestList(searchParams.get("gameId"));
      if (serverResponse?.data?.status === "SUCCESS") {
        setGameWiseContestsList(serverResponse?.data?.contestList);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/");
      } else {
        setGameWiseContestsList([]);
      }
      setLoader(false);
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error?.message, icon: "warning", });
    } finally {
      setLoader(false);
    }
  };

  const handleJoinClick = () => {
    setJoinContest(true)
  }

  useEffect(() => {
    getGameWiseContestList()
  }, []);

  return (
    <>
      {loader === true ?
        <Loader />
        :
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
                {/* solo contest start */}
                {activeTab === "home" && (
                  <div className="container tab-pane active">
                    <div className="row gy-4">
                      {gameWiseContestsList?.map((contest, index) =>
                      (contest?.gameType === "solo" &&
                        <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                          <div className="card custom-card-contest">
                            <div className="card-header-contest d-flex justify-content-between align-items-center">
                              <h5 className="m-0">First Come First Serve</h5>
                              <span className="badge custom-badge-contest"> {contest?.roomId && `ID: ${contest?.roomId}`}</span>
                            </div>

                            <div className="card-body">
                              <div className="row text-center">
                                <div className="col-6">
                                  <p className="label-contest">Date</p>
                                  <p className="value-contest">{formatDate(contest?.contestDate)}</p>
                                </div>
                                <div className="col-6">
                                  <p className="label-contest">Time</p>
                                  <p className="value-contest">{contest?.contestTime}</p>
                                </div>
                                <div className="col-6">
                                  <p className="label-contest">Map</p>
                                  <p className="value-contest">Classic / {contest?.gameType?.toUpperCase()}</p>
                                </div>
                                <div className="col-6">
                                  <p className="label-contest">Perspective</p>
                                  {/* <p className="value-contest">{contest}</p> */}
                                </div>
                              </div>

                              <div className="row text-center mt-3">
                                <div className="col-4">
                                  <p className="label-contest">Prize Pool</p>
                                  <p className="value-contest">💎 {contest?.winningPrice}</p>
                                </div>
                                <div className="col-4">
                                  <p className="label-contest">Joined Count</p>
                                  <p className="value-contest">{contest?.joinedCount}</p>
                                </div>
                                <div className="col-4">
                                  <p className="label-contest">Join Using</p>
                                  <p className="value-contest text-success">{contest?.reqCoinsToJoin} Coins</p>
                                </div>
                              </div>

                              <div className="progress-container-contest mt-3">
                                <div className="d-flex justify-content-between small">
                                  <span>{contest?.playersLimit - contest?.joinedCount} players remaining</span>
                                  <span>{contest?.joinedCount} players joined</span>
                                </div>
                                {/* <div className="progress-contest mt-1">
                                <div className="progress-bar-contest progress-bar-striped" style={{ width: "50%" }}></div>
                              </div> */}
                              </div>

                              <button className="btn btn-warning-contest w-100 mt-3 fw-bold" data-bs-toggle="modal" data-bs-target="#contestModal" onClick={() => handleJoinClick()}>JOIN NOW</button>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* duo contest start */}
                {activeTab === "menu1" && (
                  <div className="container tab-pane active">
                    <div className="row gy-4">
                      {gameWiseContestsList?.map((contest, index) =>
                      (contest?.gameType === "duo" &&
                        <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                          <div className="card custom-card-contest">
                            <div className="card-header-contest d-flex justify-content-between align-items-center">
                              <h5 className="m-0">First Come First Serve</h5>
                              <span className="badge custom-badge-contest"> {contest?.roomId && `ID: ${contest?.roomId}`}</span>
                            </div>

                            <div className="card-body">
                              <div className="row text-center">
                                <div className="col-6">
                                  <p className="label-contest">Date</p>
                                  <p className="value-contest">{formatDate(contest?.contestDate)}</p>
                                </div>
                                <div className="col-6">
                                  <p className="label-contest">Time</p>
                                  <p className="value-contest">{contest?.contestTime}</p>
                                </div>
                                <div className="col-6">
                                  <p className="label-contest">Map</p>
                                  <p className="value-contest">Classic / {contest?.gameType?.toUpperCase()}</p>
                                </div>
                                <div className="col-6">
                                  <p className="label-contest">Perspective</p>
                                  <p className="value-contest">TPP</p>
                                </div>
                              </div>

                              <div className="row text-center mt-3">
                                <div className="col-4">
                                  <p className="label-contest">Prize Pool</p>
                                  <p className="value-contest">💎 {contest?.winningPrice}</p>
                                </div>
                                <div className="col-4">
                                  <p className="label-contest">Joined Count</p>
                                  <p className="value-contest">{contest?.joinedCount}</p>
                                </div>
                                <div className="col-4">
                                  <p className="label-contest">Join Using</p>
                                  <p className="value-contest text-success">{contest?.reqCoinsToJoin} Coins</p>
                                </div>
                              </div>

                              <div className="progress-container-contest mt-3">
                                <div className="d-flex justify-content-between small">
                                  <span>{contest?.playersLimit - contest?.joinedCount} players remaining</span>
                                  <span>{contest?.joinedCount} players joined</span>
                                </div>
                                {/* <div className="progress-contest mt-1">
                                <div className="progress-bar-contest progress-bar-striped" style={{ width: "50%" }}></div>
                              </div> */}
                              </div>

                              <button className="btn btn-warning-contest w-100 mt-3 fw-bold" data-bs-toggle="modal" data-bs-target="#contestModal" onClick={() => handleJoinClick()}>JOIN NOW</button>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* sqad contest start */}
                {activeTab === "menu2" && (
                  <div className="container tab-pane active">
                    <div className="row gy-4">
                      {gameWiseContestsList?.map((contest, index) =>
                      (contest?.gameType === "squad" &&
                        <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                          <div className="card custom-card-contest">
                            <div className="card-header-contest d-flex justify-content-between align-items-center">
                              <h5 className="m-0">First Come First Serve</h5>
                              <span className="badge custom-badge-contest"> {contest?.roomId && `ID: ${contest?.roomId}`}</span>
                            </div>

                            <div className="card-body">
                              <div className="row text-center">
                                <div className="col-6">
                                  <p className="label-contest">Date</p>
                                  <p className="value-contest">{formatDate(contest?.contestDate)}</p>
                                </div>
                                <div className="col-6">
                                  <p className="label-contest">Time</p>
                                  <p className="value-contest">{contest?.contestTime}</p>
                                </div>
                                <div className="col-6">
                                  <p className="label-contest">Map</p>
                                  <p className="value-contest">Classic / {contest?.gameType?.toUpperCase()}</p>
                                </div>
                                <div className="col-6">
                                  <p className="label-contest">Perspective</p>
                                  <p className="value-contest">TPP</p>
                                </div>
                              </div>

                              <div className="row text-center mt-3">
                                <div className="col-4">
                                  <p className="label-contest">Prize Pool</p>
                                  <p className="value-contest">💎 {contest?.winningPrice}</p>
                                </div>
                                <div className="col-4">
                                  <p className="label-contest">Joined Count</p>
                                  <p className="value-contest">{contest?.joinedCount}</p>
                                </div>
                                <div className="col-4">
                                  <p className="label-contest">Join Using</p>
                                  <p className="value-contest text-success">{contest?.reqCoinsToJoin} Coins</p>
                                </div>
                              </div>

                              <div className="progress-container-contest mt-3">
                                <div className="d-flex justify-content-between small">
                                  <span>{contest?.playersLimit - contest?.joinedCount} players remaining</span>
                                  <span>{contest?.joinedCount} players joined</span>
                                </div>
                                {/* <div className="progress-contest mt-1">
                                <div className="progress-bar-contest progress-bar-striped" style={{ width: "50%" }}></div>
                              </div> */}
                              </div>

                              <button className="btn btn-warning-contest w-100 mt-3 fw-bold" data-bs-toggle="modal" data-bs-target="#contestModal" onClick={() => handleJoinClick()}>JOIN NOW</button>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>
                )}


                {joinContest &&
                  <div className="modal fade" id="contestModal" tabIndex="-1" aria-labelledby="modalTitle" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content-contest">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header-contest">
                          <h5 className="modal-title-contest" id="modalTitle">First Come First Serve</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        {/* <!-- Modal Body --> */}
                        <div className="modal-body">
                          <p>Stumble Guys - SOLO <span className="float-end">14th Feb 2025 11:30 PM</span></p>

                          {/* <!-- Confirmation Box --> */}
                          <div className="confirmation-box">Confirmation
                            Coin Balance = <span>270</span>
                          </div>

                          {/* <!-- Entry Fee & Payment --> */}
                          <div className="entry-box">
                            <span>Entry Fee</span> <span>Free</span>
                          </div>
                          <div className="entry-box">
                            <span>To Pay</span>
                            <span>Free</span>
                          </div>

                          {/* <!-- Join Button --> */}
                          <button className="join-btn">JOIN CONTEST →</button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>}
    </>
  );
}
