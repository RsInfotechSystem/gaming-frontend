"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import network from "../../../../public/dashboard/network.png";
import { useRouter, useSearchParams } from "next/navigation";
import { communication } from "@/services/communication";
import Swal from "sweetalert2";
import Loader from "@/app/common-component/Loader";
import { formatDate } from "@/helper/formatDate";
import { convertTo12HourFormat } from "@/helper/convert-time-in-12-hours";
import { useForm } from "react-hook-form";
import { getUserDetails } from "@/utilities/get-user-details-from-cokies";
import CustomSearchBox from "@/app/common-component/CustomSearchBox";
import { getCookie } from "cookies-next";

export default function GameInfo() {
  const [activeTab, setActiveTab] = useState("home");
  const [loader, setLoader] = useState(false);
  const [selectedContestId, setSelectedContestId] = useState(null);
  const [gameWiseContestsList, setGameWiseContestsList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [game, setGame] = useState(null);
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    isPageUpdated: false,
    totalPages: 1,
    page: 1
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, handleSubmit, formState: { errors }, getValues, watch, setValue } = useForm();

  const getGameWiseContestList = async (page = 1, searchString = "") => {
    try {
      setLoader(true);
      const serverResponse = await communication.getGameWiseContestList(searchParams.get("gameId"), page, searchString);
      if (serverResponse?.data?.status === "SUCCESS") {
        setGameWiseContestsList(serverResponse?.data?.contestList);
        setPaginationData(pre => ({
          ...pre, totalPages: serverResponse?.data?.totalPages,
          page: page,
          currentPage: page,
        }))
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/");
      } else {
        setGameWiseContestsList([]);
        setPaginationData(pre => ({
          ...pre, totalPages: 0,
        }))
      }
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error?.message, icon: "warning" });
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getGameWiseContestList(paginationData.currentPage, searchString);
  }, [paginationData.isPageUpdated]);

  // Group contests by gameType (SOLO, DUO, SQUAD)
  const groupedContests = {
    SOLO: [],
    DUO: [],
    SQUAD: [],
  };

  gameWiseContestsList?.forEach((contest) => {
    if (contest?.gameType) {
      groupedContests[contest.gameType]?.push(contest);
    }
  });

  const handleJoinClick = (contestId) => {
    setSelectedContestId(contestId); // Store the clicked contest ID
  };

  const handleJoinContest = async (data, contestId) => {
    try {
      setLoader(true);
      const payload = {
        gameUserName: data?.gameUserName,
        contestId: contestId, // Pass contestId in the payload
      };

      const serverResponse = await communication.joinContest(payload);
      if (serverResponse?.data?.status === "SUCCESS") {
        setGameWiseContestsList(serverResponse?.data?.contestList);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/");
      } else {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
      }
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error?.message, icon: "warning" });
    } finally {
      setLoader(false);
    }
  }

  // Tabs mapping
  const tabMapping = {
    home: "SOLO",
    menu1: "DUO",
    menu2: "SQUAD",
  };

  //get Contest on initial load
  const getGameDetails = async () => {
    try {
      setLoader(true);
      const userDetails = getUserDetails(router);
      const serverResponse = await communication.getGameDetails(searchParams.get("gameId"));
      if (serverResponse?.data?.status === "SUCCESS") {
        setGame(serverResponse?.data?.game);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/");
      } else {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
      }
      setLoader(false);
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
      setLoader(false)
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const userDetails = getCookie("gamingUserDetails");
    if (!userDetails) {
      router.push("/");
    } else {
      getGameDetails()
    }
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="tournament_list">
          <div className="mt-1 coin_pack">
            <p className="tournament_text">
              {game ? `${game?.name}` : `Contest`} <Image className="me-2" width={25} height={20} src={network} alt="network" />
            </p>
            <div className='nav_search mb-4'>
              <CustomSearchBox searchString={searchString} setSearchString={setSearchString} apiCall={getGameWiseContestList} />
            </div>
            <div className="container">
              {/* Tabs */}
              <ul className="nav nav-pills mb-2">
                {Object.entries(tabMapping).map(([key, value]) => (
                  <li className="nav-item contest_menu_btn" key={key}>
                    <button
                      className={`nav-link ${activeTab === key ? "active" : ""} contest_menu`}
                      onClick={() => setActiveTab(key)}
                    >
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Render contests dynamically based on activeTab */}
              <div className="tab-content">
                <div className="container tab-pane active">
                  <div className="row gy-4">
                    {groupedContests[tabMapping[activeTab]]?.map((contest, index) => (
                      <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                        <div className="card custom-card-contest">
                          <div className="card-header-contest d-flex justify-content-between align-items-center">
                            <h5 className="m-0">{contest?.name}</h5>
                            <span className="badge custom-badge-contest">
                              {contest?.roomId && `ID: ${contest?.roomId}`}
                            </span>
                          </div>

                          <div className="card-body">
                            <div className="row text-center">
                              <div className="col-6">
                                <p className="label-contest">Date</p>
                                <p className="value-contest">{formatDate(contest?.contestDate)}</p>
                              </div>
                              <div className="col-6">
                                <p className="label-contest">Time</p>
                                <p className="value-contest">{convertTo12HourFormat(contest?.contestTime)}</p>
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
                            </div>

                            <button
                              className="btn btn-warning-contest w-100 mt-3 fw-bold"
                              onClick={() => handleJoinClick(contest?.id)}
                            >
                              JOIN NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedContestId && (
                  <div className="modal-overlay" onClick={() => setSelectedContestId(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                      <div className="p-4">
                        {groupedContests[tabMapping[activeTab]]
                          ?.filter((contest) => contest.id === selectedContestId) // Show only selected contest
                          ?.map((contest, index) => (
                            <div className="modal-content-contest" key={index}>
                              <div className="modal-header-contest">
                                <h5 className="modal-title-contest">{contest?.name}</h5>
                              </div>
                              <div className="modal-body">
                                <p className="pb-4">
                                  <span className="float-start">
                                    Stumble Guys - {tabMapping[activeTab].toUpperCase()}
                                  </span>
                                  <span className="float-end">
                                    {formatDate(contest?.contestDate)} {convertTo12HourFormat(contest?.contestTime)}
                                  </span>
                                </p>
                                <form onSubmit={handleSubmit((data) => handleJoinContest(data, contest?.id))}>
                                  <input
                                    className="login_input"
                                    type="text"
                                    placeholder="Username"
                                    {...register("gameUserName", { required: "Username is required" })}
                                  />
                                  {errors?.gameUserName && <p className="text-danger">{errors?.gameUserName?.message}</p>}

                                  <div className="entry-box">
                                    <span>Entry Fee</span>
                                    <span>{contest?.reqCoinsToJoin === 0 ? `Free` : `${contest?.reqCoinsToJoin}`}</span>
                                  </div>
                                  <div className="entry-box">
                                    <span>To Pay</span>
                                    <span>{contest?.reqCoinsToJoin === 0 ? `Free` : `${contest?.reqCoinsToJoin}`}</span>
                                  </div>
                                  <button className="join-btn" type="submit">
                                    JOIN CONTEST →
                                  </button>
                                </form>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div >
        </div >
      )
      }
    </>
  );
}
