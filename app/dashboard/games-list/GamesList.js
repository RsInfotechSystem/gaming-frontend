"use client"
import Image from 'next/image';
import React from 'react';
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
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function GamesList() {
  const settings = {
    dots: false, // Hide dots
    infinite: true, // Infinite scroll
    speed: 500, // Slide speed
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



  return (
    <>
      <UserNavbar />
      <section className='tournament_main'>

        <UserLeftSidebar />

        <div className="tournament_list">
          <div style={{ width: "90%", margin: "0px auto" }}>
            <div className="mt-1">
              <p className="tournament_text">
                TOURNAMENTS LIVE{" "}
                <Image className="me-2" width={25} height={20} src={network} alt="network" />
              </p>

              {/* Tournament Slider */}
              <Slider {...settings}>
                <div className="card tournament_card">
                  <Image
                    src="/dashboard/tournament_bgmi.png"
                    width={300}
                    height={200}
                    alt="Battle Ground Mobile India"
                    className="tournament_card_img"
                  />
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title card_content">BGMI - SOLO</h5>
                      <p className="card-text card_content">Game is not a game, it's an emotion</p>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{
                        backgroundColor: "#2b2b2b",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        minWidth: "80px", // Prevents collapsing
                      }}
                    >
                      <Image className="me-2" width={25} height={25} src={coin_img} alt="coin" />
                      <span className="text-white fw-bold">2000</span>
                    </div>
                  </div>

                </div>
                <div className="card tournament_card">
                  <Image
                    src="/dashboard/tournament_bgmi.png"
                    width={300}
                    height={200}
                    alt="Battle Ground Mobile India"
                    className="tournament_card_img"
                  />
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title card_content">BGMI - SOLO</h5>
                      <p className="card-text card_content">Game is not a game, it's an emotion</p>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{
                        backgroundColor: "#2b2b2b",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        minWidth: "80px", // Prevents collapsing
                      }}
                    >
                      <Image className="me-2" width={25} height={25} src={coin_img} alt="coin" />
                      <span className="text-white fw-bold">2000</span>
                    </div>
                  </div>

                </div>
                <div className="card tournament_card">
                  <Image
                    src="/dashboard/tournament_bgmi.png"
                    width={300}
                    height={200}
                    alt="Battle Ground Mobile India"
                    className="tournament_card_img"
                  />
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title card_content">BGMI - SOLO</h5>
                      <p className="card-text card_content">Game is not a game, it's an emotion</p>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{
                        backgroundColor: "#2b2b2b",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        minWidth: "80px", // Prevents collapsing
                      }}
                    >
                      <Image className="me-2" width={25} height={25} src={coin_img} alt="coin" />
                      <span className="text-white fw-bold">2000</span>
                    </div>
                  </div>

                </div>
                <div className="card tournament_card">
                  <Image
                    src="/dashboard/tournament_bgmi.png"
                    width={300}
                    height={200}
                    alt="Battle Ground Mobile India"
                    className="tournament_card_img"
                  />
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title card_content">BGMI - SOLO</h5>
                      <p className="card-text card_content">Game is not a game, it's an emotion</p>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{
                        backgroundColor: "#2b2b2b",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        minWidth: "80px", // Prevents collapsing
                      }}
                    >
                      <Image className="me-2" width={25} height={25} src={coin_img} alt="coin" />
                      <span className="text-white fw-bold">2000</span>
                    </div>
                  </div>

                </div>
               


              </Slider>
            </div>
            <div className='mt-1'>
            <p className='tournament_text mt-5'>ALL GAMES  <Image className='me-2' width={25} height={20} src={all_games} alt="user"></Image></p>
            <div className='d-flex justify-content-around mb-3'>
              <div className='games_bg'>
                <div>
                  <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={bgmi_game} alt="user"></Image>
                </div>
                <div>
                  <p className='game_name'>BGMI</p>
                  <p className='game_info'>5.3 Millions played</p>
                </div>
              </div>
              <div className='games_bg'>
                <div>
                  <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={freefire_game} alt="user"></Image>
                </div>
                <div>
                  <p className='game_name'>FREE FIRE</p>
                  <p className='game_info'>5.3 Millions played</p>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-around mb-3'>
              <div className='games_bg'>
              <div>
                  <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={cod_game} alt="user"></Image>
                </div>
                <div>
                  <p className='game_name'>COD</p>
                  <p className='game_info'>5.3 Millions played</p>
                </div>
              </div>
              <div className='games_bg'>
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
        </div>

        <UserRightSidebar />

      </section>

    </>
  );
}