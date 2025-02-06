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

export default function MyGames() {
  return (
    <>
     
        {/* <div className="tournament_list">
          <div className='tournament_div'>
            <div className="mt-1">
              <p className="tournament_text">
                MY GAMES{" "}
                <Image className="me-2" width={25} height={20} src={network} alt="network" />
              </p>
              <div className='d-flex'>
                <div className='px-2'>
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
                        <h5 className="card-title card_content">BGMI - SOLO test 1</h5>
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
                </div>
                <div className='px-2'>
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
                        <h5 className="card-title card_content">BGMI - SOLO test 2</h5>
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
                </div>
              </div>
              <div className='d-flex my-3'>
                <div className='px-2'>
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
                        <h5 className="card-title card_content">BGMI - SOLO test 1</h5>
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
                </div>
                <div className='px-2'>
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
                        <h5 className="card-title card_content">BGMI - SOLO test 2</h5>
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
                </div>
              </div>
            </div>
          </div>
        </div> */}
         <div className="tournament_list container-fluid overflow-hidden">
      <div className="tournament_div">
        <div className="mt-1">
          <p className="tournament_text d-flex align-items-center">
            MY GAMES{" "}
            <Image className="ms-2" width={25} height={20} src={network} alt="network" />
          </p>
          <div className="row">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-3">
                <div className="card tournament_card">
                  <Image
                    src="/dashboard/tournament_bgmi.png"
                    width={300}
                    height={200}
                    alt="Battle Ground Mobile India"
                    className="tournament_card_img img-fluid"
                  />
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title card_content">BGMI - SOLO test {item}</h5>
                      <p className="card-text card_content">Game is not a game, it's an emotion</p>
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
                      <span className="text-white fw-bold">2000</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
}