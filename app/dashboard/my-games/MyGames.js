"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import coin_img from '../../../public/dashboard/coin_img.png';
import network from '../../../public/dashboard/network.png';
import all_games from '../../../public/dashboard/all_games.png';
import bgmi_game from '../../../public/dashboard/bgmi_game.jpeg';
import cod_game from '../../../public/dashboard/cod_game.jpeg';
import freefire_game from '../../../public/dashboard/freefire_game_rd.png';
import UserNavbar from '../UserNavbar';
import UserLeftSidebar from '../UserLeftSidebar';
import UserRightSidebar from '../UserRightSidebar';
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { communication } from '@/services/communication';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { formatDate } from '@/helper/formatDate';
import Loader from '@/app/common-component/Loader';
import CustomSearchBox from '@/app/common-component/CustomSearchBox';
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function MyGames() {
  const [contestList, setContestList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    isPageUpdated: false,
    totalPages: 1,
    page: 1
  });
  const router = useRouter();
  const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

  //get Contest on initial load
  const getJoinedContestList = async (page = 1, searchString = "") => {
    try {
      setLoader(true);
      const serverResponse = await communication.getJoinedContestList(page, searchString);
      if (serverResponse?.data?.status === "SUCCESS") {
        setContestList(serverResponse?.data?.contestList);
        setPaginationData(pre => ({
          ...pre, totalPages: serverResponse?.data?.totalPages,
          page: page,
          currentPage: page,
        }))
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/");
      } else {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        // getJoinedContestList([]);
        setPaginationData(pre => ({
          ...pre, totalPages: 0,
        }))
      }
      setLoader(false);
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
      setLoader(false);
    }
  };

  useEffect(() => {
    getJoinedContestList(paginationData.currentPage, searchString);
  }, [paginationData.isPageUpdated]);

  return (
    <>
      {loader === true ?
        <Loader />
        :
        <div className="tournament_list container-fluid overflow-hidden">
          <div className="tournament_div">
            <div className="mt-1">
              <p className="tournament_text d-flex align-items-center">
                MY GAMES{" "}
                {contestList?.length > 0 && (
                  <>
                    {contestList?.map((contest, index) => (
                      <Image
                        key={index}
                        className="ms-2"
                        width={25} height={20} alt="network"
                        src={
                          contest?.contestFiles?.[0]?.fileUrl
                            ? `${NEXT_PUBLIC_SERVER_URL}/getFiles/${contest.contestFiles[0].fileUrl}`
                            : "/dashboard/tournament_bgmi.png"
                        }
                      />
                    ))}
                  </>)}
              </p>
              <div className='nav_search mb-4'>
                <CustomSearchBox searchString={searchString} setSearchString={setSearchString} apiCall={getJoinedContestList} />
              </div>
              <div className="row">
                {contestList?.length > 0 ? (
                  <>
                    {contestList?.map((contest, index) => (
                      <div key={index} className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3">
                        <div className="card tournament_card">
                          <Image
                            src="/dashboard/tournament_bgmi.png"
                            width={300}
                            height={200}
                            alt="Battle Ground Mobile India"
                            className="tournament_card_img img-fluid"
                          />
                          <div className="card-body">
                            <div className='d-flex justify-content-between'>
                              <div style={{ width: '55%' }}>
                                <h5 className="card-title games_desc">{contest?.name}</h5>
                                <p className="card-text games_desc">Entry :{contest?.reqCoinsToJoin}</p>
                                <p className="card-text games_desc">Players Limit : {contest?.playersLimit}</p>
                                <p className="card-text games_desc">Date :{formatDate(contest?.contestDate)}</p>
                              </div>
                              <div style={{ width: '45%' }}>
                                <h5 className="card-title games_desc">{contest?.gameType?.toUpperCase()}</h5>
                                <p className="card-text games_desc">Price : {contest?.winningPrice}</p>
                                <p className="card-text games_desc">Players Joined : {contest?.joinedCount}</p>
                                <p className="card-text games_desc">Time : {contest?.contestTime}</p>
                              </div>
                            </div>
                            <div className='mt-2'>
                              <p className="card-text games_desc games_info">{contest?.description}</p>
                            </div>
                            <hr className='hr_line_games'></hr>
                            <div className='d-flex justify-content-between'>
                              <div style={{ width: '100%' }}>
                                <h6 className="card-title games_desc">Room ID : {contest?.roomId}</h6>
                                <h6 className="card-title games_desc">Password : {contest?.passwordToJoin}</h6>
                                {/* <p className="card-text games_desc">Room ID : 6646VWVFGY</p> */}

                              </div>
                              {/* <div style={{ width: '45%' }}>
                          <h6 className="card-title games_desc">Password : 46324EHHUW</h6>
                        </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>) : (
                  <p className="no_data">Data Not Available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      }

    </>
  );
}