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
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { communication } from '@/services/communication';
import Loader from '@/app/common-component/Loader';
import CustomSearchBox from '@/app/common-component/CustomSearchBox';
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function GamesList() {
  const settings = {
    dots: false, // Hide dots
    infinite: true, // Infinite scroll
    speed: 1000, // Slide speed
    slidesToShow: 2, // Number of visible slides
    slidesToScroll: 1, // Slide 1 at a time
    autoplay: true, // Auto-slide enabled
    autoplaySpeed: 2000, // Auto-slide every 2 seconds
    arrows: true, // Show previous/next buttons
    swipeToSlide: true, // Enable swipe-to-slide movement
    touchThreshold: 10, // Adjust touch sensitivity (default: 5)
    swipe: true, // Ensure swipe is enabled
    draggable: true, // Allow dragging on desktop
    touchMove: true, // Allow touch gestures
    pauseOnHover: true, // Pause autoplay when hovered
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show only 1 card on small screens
        },
      },
    ],
  };


  const [contestList, setContestList] = useState([]);
  const [gameList, setGameList] = useState([]);
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
  const getContestList = async () => {
    try {
      setLoader(true);
      const serverResponse = await communication.getContestList();
      if (serverResponse?.data?.status === "SUCCESS") {
        setContestList(serverResponse?.data?.contestList);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/");
      } else {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
      }
      setLoader(false);
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
      setLoader(false);
    }
  };

  //get Contest on initial load
  const getGamesList = async (page = 1,searchString = "") => {
    try {
      setLoader(true);
      const serverResponse = await communication.getGamesList(page,searchString);
      if (serverResponse?.data?.status === "SUCCESS") {
        setGameList(serverResponse?.data?.gameList);
        setPaginationData(pre => ({
          ...pre, totalPages: serverResponse?.data?.totalPages,
          page: page,
          currentPage: page,
      }))
        // console.log(searchString);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/");
      } else {
        // Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        setGameList([]);
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

  const handleGameClick = (id) => {
    router.push(`/dashboard/games-list/game-info?gameId=${id}`)
  }

  
  useEffect(() => {
    getContestList();
  }, []);

  useEffect(() => {
    getGamesList(paginationData.currentPage, searchString);
    }, [paginationData.isPageUpdated]);



  return (
    <>
      {loader === true ?
        <Loader />
        :
        <div className="tournament_list">
          <div style={{ width: "90%", margin: "0px auto" }}>
            {contestList?.length > 0 || gameList?.length > 0 ? (
              <>
                {contestList?.length > 0 && (
                  <div className="mt-1">
                    <p className="tournament_text">
                      TOURNAMENTS LIVE{" "}
                      <Image className="me-2" width={25} height={20} src={network} alt="network" />
                    </p>

                    {/* Tournament Slider */}
                    <Slider {...settings}>
                      {contestList?.map((contestDetails, index) => (
                        <div className="px-2" key={index}>
                          <div className="card tournament_card d-flex">
                            <Image
                              src={
                                contestDetails?.contestFiles?.[0]?.fileUrl
                                  ? `${NEXT_PUBLIC_SERVER_URL}/getFiles/${contestDetails.contestFiles[0].fileUrl}`
                                  : "/dashboard/tournament_bgmi.png"
                              }
                              width={300}
                              height={200}
                              alt={contestDetails?.name || "Contest Image"}
                              className="tournament_card_img"
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                              <div>
                                <h5 className="card-title card_content">{contestDetails?.name}</h5>
                                <p className="card-text card_content">{contestDetails?.description}</p>
                              </div>
                              <div
                                className="d-flex align-items-center"
                                style={{
                                  backgroundColor: "#2b2b2b",
                                  padding: "8px 12px",
                                  borderRadius: "8px",
                                  minWidth: "80px",
                                }}
                              >
                                <Image className="me-2" width={25} height={25} src={coin_img} alt="coin" />
                                <span className="text-white fw-bold">{contestDetails?.winningPrice}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    </Slider>
                  </div>
                )}

                {gameList?.length > 0 && (
                  <div className="mt-1">
                    <p className="tournament_text mt-5 ">
                      ALL GAMES <Image className="me-2" width={25} height={20} src={all_games} alt="all games" />
                    </p>
                    <div className='nav_search mb-4'>
                      <CustomSearchBox searchString={searchString} setSearchString={setSearchString} apiCall={getGamesList} />
                    </div>
                    <div className="d-flex flex-wrap justify-content-around mb-3">
                      {gameList?.map((game, index) => (
                        <div className="games_bg mb-3" key={index}>
                          <div className="games_bg_inner" style={{ cursor: "pointer" }} onClick={() => handleGameClick(game?.id)}>
                            <div>
                              <Image
                                className="me-2"
                                style={{ borderRadius: "15px" }}
                                width={76}
                                height={76}
                                src={
                                  game?.gamefiles?.[0]?.fileUrl
                                    ? `${NEXT_PUBLIC_SERVER_URL}/getFiles/${game?.gamefiles[0].fileUrl}`
                                    : "/dashboard/default_game.png"
                                }
                                alt={"game img"}
                              />
                            </div>
                            <div>
                              <p className="game_name">{game?.name || "Unknown Game"}</p>
                              <p className="game_info">{game?.playedCount || "0"} Millions played</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="no_data">Data Not Available</p>
            )}
          </div>
        </div>
      }
    </>
  );

}