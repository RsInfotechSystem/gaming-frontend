"use client"
import Image from 'next/image';
import React from 'react';
import user_img from '../../public/dashboard/usericon.png';
import gameslist from '../../public/dashboard/gameslist.png';
import coins from '../../public/dashboard/coins.png';
import mygames from '../../public/dashboard/mygames.png';
import coin_img from '../../public/dashboard/coin_img.png';
import down_arrow from '../../public/dashboard/down_arrow.png';
import network from '../../public/dashboard/network.png';
import all_games from '../../public/dashboard/all_games.png';
import bgmi_game from '../../public/dashboard/bgmi_game.jpeg';
import cod_game from '../../public/dashboard/cod_game.jpeg';
import freefire_game from '../../public/dashboard/freefire_game_rd.png';
import winnings from '../../public/dashboard/winnings.png';
import tournament_bgmi from '../../public/dashboard/tournament_bgmi.png';

export default function UserNavbar() {
    return (
        <>
            <section>
                          <div className='dashboard_nav' style={{ zIndex: "10" }}>
                              <div className='nav_dash_width'>
                              </div>
                              <div className='main_dash_heading'>
                                  <p>DASHBOARD</p>
                              </div>
                              <div className='dash_btn nav_dash_width' >
                                  <div>
                                      <div className='coin_btn d-flex'>
                                      <Image className='me-2' width={25} height={25} src={coin_img}  alt="user"/>
          
                                      <span className=''> 99,999 </span> </div>
                                  </div>
                                  <div>
                                      <button className='coin_btn profile_btn d-flex'>  <span className=''> Zywfo </span> <Image className='mx-1 my-auto' width={13} height={13} src={down_arrow}  alt="user"/></button>
                          
                                  </div>
                              </div>
                          </div>
                      </section>


        </>
    );
}






