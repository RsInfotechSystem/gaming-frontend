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
      <div className="tournament_list container-fluid overflow-hidden">
        <div className="tournament_div">
          <div className="mt-1">
            <p className="tournament_text d-flex align-items-center">
              MY GAMES{" "}
              <Image className="ms-2" width={25} height={20} src={network} alt="network" />
            </p>
            <div className="row">
              {[1, 2, 3, 4,5].map((item, index) => (
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
                          <h5 className="card-title games_desc">BGMI {item}</h5>
                          <p className="card-text games_desc">Entry : 1,000 Coins</p>
                          <p className="card-text games_desc">Players Limit : 50</p>
                          <p className="card-text games_desc">Date : 30/02/2025</p>
                        </div>
                        <div style={{ width: '45%' }}>
                          <h5 className="card-title games_desc">SOLO</h5>
                          <p className="card-text games_desc">Price : 50,000</p>
                          <p className="card-text games_desc">Players Joined : 30</p>
                          <p className="card-text games_desc">Time : 12:00 PM</p>
                        </div>
                      </div>
                      <div className='mt-2'>
                        <p className="card-text games_desc games_info">Description Game is not a game, it's an emotion fhjfberh frfuerf rufrs huf fuhrhs hewfhuewf ewuf fuhewwhuf erwhu fwuef huwf w hufew h fewhf hwe fhew fewhj ewhf huew fhe ef heu fehf erhf erh fhrf rehubbbbbbbbbbbbbbbbbbbbuewh jhhuew</p>
                      </div>
                      <hr className='hr_line_games'></hr>
                      <div className='d-flex justify-content-between'>
                        <div style={{ width: '100%' }}>
                          <h6 className="card-title games_desc">Room ID : 6646VWVFGY</h6>
                          <h6 className="card-title games_desc">Password : 46324EHHUW</h6>
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
            </div>
          </div>
        </div>
      </div>

    </>
  );
}