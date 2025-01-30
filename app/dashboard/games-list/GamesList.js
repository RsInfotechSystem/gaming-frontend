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

export default function GamesList() {

  return (
    <>
      <UserNavbar />
      <section className='tournament_main'>

        <UserLeftSidebar />
        <div className='tournament_list'>
          <div className='mt-1'>
            <p className='tournament_text ps-2 ms-5'>TOURNAMENTS LIVE  <Image className='me-2' width={25} height={20} src={network} alt="user"></Image></p>
            <div className='d-flex justify-content-around mb-3'>

              <div className="card tournament_card">
                <img
                  src="/dashboard/tournament_bgmi.png"
                  alt="Battle Ground Mobile India"
                  className="tournament_card_img"

                />
                <div className="card-body" style={{ display: "flex", gap: "20px" }}>
                  <div>
                    <h5 className="card-title card_content">BGMI - SOLO</h5>
                    <p className="card-text card_content">Game is not a game its emotion</p>
                  </div>
                  <div className="align-content-center" style={{ backgroundColor: "#2b2b2b" }}>
                    <span className='text-white fw-bold'><Image className='me-2' width={25} height={25} src={coin_img} alt="user"></Image>2000</span>
                  </div>
                </div>
              </div>
              <div className="card tournament_card">
                <img
                  src="/dashboard/tournament_bgmi.png"
                  alt="Battle Ground Mobile India"
                  className="tournament_card_img"

                />
                <div className="card-body" style={{ display: "flex", gap: "20px" }}>
                  <div>
                    <h5 className="card-title card_content">BGMI - SOLO</h5>
                    <p className="card-text card_content">Game is not a game its emotion</p>
                  </div>
                  <div className="align-content-center" style={{ backgroundColor: "#2b2b2b" }}>
                    <span className='text-white fw-bold'><Image className='me-2' width={25} height={25} src={coin_img} alt="user"></Image>2000</span>
                  </div>
                </div>
              </div>


            </div>


          </div>
          <div className='mt-1'>
            <p className='tournament_text ps-2 ms-5 mt-5'>ALL GAMES  <Image className='me-2' width={25} height={20} src={all_games} alt="user"></Image></p>
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
            <div className='d-flex mx-5 mb-3'>
              <div className='games_bg ms-3'>
                <div>
                  <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={cod_game} alt="user"></Image>
                </div>
                <div>
                  <p className='game_name'>COD</p>
                  <p className='game_info'>5.3 Millions played</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        <UserRightSidebar/>

      </section>

    </>
  );
}