"use client"
import Image from 'next/image';
import React from 'react';
import user_img from '../../public/dashboard/usericon.png';
import gameslist from '../../public/dashboard/gameslist.png';
import coins from '../../public/dashboard/coins.png';
import mygames from '../../public/dashboard/mygames.png';
import winnings from '../../public/dashboard/winnings.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UserLeftSidebar() {
    const currentUrl = usePathname().split("/");

    return (
        <>
            {/* <section className='tournament_main'> */}
            <div className='menu_tabs'>
                <div className='tabs_dash_div'>
                    <Link href='/dashboard/games-list' className={currentUrl.includes("games-list") ? "dash_tab" : "tab_inactive"}><Image width={25} height={25} src={gameslist} alt="user"></Image> GAMES LIST</Link>
                </div>
                <div className='tabs_dash_div'>
                    <Link href='/dashboard/game-coins' className={currentUrl.includes("game-coins") ? "dash_tab" : "tab_inactive"}><Image width={25} height={25} src={coins} alt="user"></Image> BUY COINS</Link>
                </div>
                <div className='tabs_dash_div'>
                    <Link href='/dashboard/my-games' className={currentUrl.includes("my-games") ? "dash_tab" : "tab_inactive"}><Image width={25} height={25} src={mygames} alt="user"></Image> MY GAMES</Link>
                </div>
                <div className='tabs_dash_div'>
                    <Link href='/dashboard/winnings' className={currentUrl.includes("winnings") ? "dash_tab" : "tab_inactive"}><Image width={25} height={25} src={winnings} alt="user"></Image> WINNINGS</Link>
                </div>
                <div className='tabs_dash_div'>
                    <Link href='/dashboard/profile' className={currentUrl.includes("profile") ? "dash_tab" : "tab_inactive"}><Image width={25} height={25} src={user_img} alt="user"></Image> PROFILE</Link>
                </div>
                {/* <div className='tabs_dash_div'>
                    <Link href='/dashboard/game-coins' className={currentUrl.includes("role-management") ? "dash_tab" : "tab_inactive"}><Image width={25} height={25} src={coins} alt="user"></Image> BUY COINS</Link>
                </div> */}
            </div>
            {/* </section> */}


        </>
    );
}






