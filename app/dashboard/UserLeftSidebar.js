"use client"
import Image from 'next/image';
import React from 'react';
import user_img from '../../public/dashboard/usericon.png';
import gameslist from '../../public/dashboard/gameslist.png';
import coins from '../../public/dashboard/coins.png';
import mygames from '../../public/dashboard/mygames.png';
import winnings from '../../public/dashboard/winnings.png';

export default function UserLeftSidebar() {
    return (
        <>
            {/* <section className='tournament_main'> */}
                <div className='menu_tabs'>
                    <div className='tabs_dash_div'>
                        <a href='../dashboard/games-list' className='dash_tab'><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> GAMES LIST</a>
                    </div>
                    <div className='tabs_dash_div'>
                        <a href='#' className='dash_tab'><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={mygames} alt="user"></Image> MY GAMES</a>
                    </div>
                    <div className='tabs_dash_div'>
                        <a href='#' className='dash_tab'><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={winnings} alt="user"></Image> WINNINGS</a>
                    </div>
                    <div className='tabs_dash_div'>
                        <a href='#' className='dash_tab'><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={user_img} alt="user"></Image> PROFILE</a>
                    </div>
                    <div className='tabs_dash_div'>
                        <a href='../dashboard/game-coins' className='dash_tab'><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={coins} alt="user"></Image> BUY COINS</a>
                    </div>
                </div>
            {/* </section> */}


        </>
    );
}






