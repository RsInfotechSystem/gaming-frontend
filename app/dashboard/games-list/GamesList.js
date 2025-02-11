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
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

  //get Contest on initial load
  const getContestList = async () => {
    try {
      setLoader(true);
      const serverResponse = await communication.getContestList();
      if (serverResponse?.data?.status === "SUCCESS") {
        setContestList(serverResponse?.data?.contestList);
        Swal.fire({ text: serverResponse?.data?.message, icon: "success", timer: 2000 });
        setLoader(false);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: error?.serverResponse?.data?.message, icon: "error" });
        router.push("/");
        setLoader(false);
      } else {
        Swal.fire({ text: error?.serverResponse?.data?.message, icon: "error" });
      }
    } catch (error) {
      Swal.fire({ text: error?.serverResponse?.data?.message, icon: "error" });
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getContestList()
    // getGameList(currentPage, searchString);
  }, []);


  return (
    <>
      {/* <section className='tournament_main'> */}
      <div className="tournament_list">
        <div style={{ width: "90%", margin: "0px auto" }}>
          <div className="mt-1">
            <p className="tournament_text">
              TOURNAMENTS LIVE{" "}
              <Image className="me-2" width={25} height={20} src={network} alt="network" />
            </p>

            {/* Tournament Slider */}
            {/* Tournament Slider - Horizontal */}
            <Slider {...settings}>
              {contestList?.length > 0 ? (
                contestList.map((contestDetails, index) => (
                  <div className="px-2" key={index}>
                    <div className="card tournament_card d-flex">
                      <Image
                        src={contestDetails?.contestFiles?.[0]?.fileUrl
                          ? `${NEXT_PUBLIC_SERVER_URL}/getFiles/${contestDetails.contestFiles[0].fileUrl}`
                          : "/dashboard/tournament_bgmi.png"}
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
                ))
              ) : (
                <p className="no_data">Data Not Available</p>
              )}
            </Slider>

          </div>

          {/* games list */}
          <div className='mt-1'>
            <p className='tournament_text mt-5'>ALL GAMES  <Image className='me-2' width={25} height={20} src={all_games} alt="user"></Image></p>
            <div className='d-flex justify-content-around mb-3'>
              <div className="games_bg">
                <div className="games_bg_inner">
                  <div>
                    <Image
                      className="me-2"
                      style={{ borderRadius: "15px" }}
                      width={76}
                      height={76}
                      src={bgmi_game}
                      alt="user"
                    />
                  </div>
                  <div>
                    <p className="game_name">BGMI</p>
                    <p className="game_info">5.3 Millions played</p>
                  </div>
                </div>
              </div>

              <div className='games_bg'>
                <div className="games_bg_inner">

                  <div>
                    <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={freefire_game} alt="user"></Image>
                  </div>
                  <div>
                    <p className='game_name'>FREE FIRE</p>
                    <p className='game_info'>5.3 Millions played</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-around mb-3'>
              <div className='games_bg'>
                <div className="games_bg_inner">
                  <div>
                    <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={cod_game} alt="user"></Image>
                  </div>
                  <div>
                    <p className='game_name'>COD</p>
                    <p className='game_info'>5.3 Millions played</p>
                  </div>
                </div>
              </div>
              <div className='games_bg'>
                <div className="games_bg_inner">
                  <div>
                    <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={freefire_game} alt="user"></Image>
                  </div>
                  <div>
                    <p className='game_name'>FREE FIRE</p>
                    <p className='game_info'>5.3 Millions played</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div >
      </div >


      {/* </section> */}

    </>
  );
}