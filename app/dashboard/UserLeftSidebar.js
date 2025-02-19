"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "../style/dashboard.css"; // Import Global CSS

import user_img from '../../public/dashboard/usericon.png';
import coins from '../../public/dashboard/coins.png';
import mygames from '../../public/dashboard/mygames.png';
import winnings from '../../public/dashboard/winnings.png';
import gameslist from '../../public/dashboard/gameslist.png';

export default function UserLeftSidebar({isOpen,closeNav}) {
    const currentUrl = usePathname().split("/");
    const [sidebarOpen, setSidebarOpen] = useState(isOpen);
    

    useEffect(() => {
        if (window.innerWidth > 1024) {
            setSidebarOpen(true); // Always open on laptops
        }
    }, []);

    return (
        <>
            {/* Sidebar */}
            <div className={`menu_tabs ${isOpen ? "open" : ""}`}>
                {/* <div className="tabs_dash_div">
                    <button className="closebtn" onClick={closeNav}>×</button>
                </div> */}
                {/* <div className={`menu_tabs sidebar ${sidebarOpen ? "open" : ""}`}>
                    <button className="closebtn" onClick={() => setSidebarOpen(false)}>×</button>
                </div> */}
                            {/* <section className='tournament_main'> */}
                <div className='tabs_dash_div' onClick={closeNav}>
                    <Link href='/dashboard/games-list' className={currentUrl.includes("games-list") ? "dash_tab" : "tab_inactive"}><Image width={25} height={25} src={gameslist} alt="user"></Image> GAMES LIST</Link>
                </div>
                <div className="tabs_dash_div" onClick={closeNav}>
                    <Link href="/dashboard/game-coins" className={currentUrl.includes("game-coins") ? "dash_tab" : "tab_inactive"}>
                        <Image width={25} height={25} src={coins} alt="coins" /> BUY COINS
                    </Link>
                </div>
                <div className="tabs_dash_div" onClick={closeNav}>
                    <Link href="/dashboard/my-games" className={currentUrl.includes("my-games") ? "dash_tab" : "tab_inactive"}>
                        <Image width={25} height={25} src={mygames} alt="my games" /> MY GAMES
                    </Link>
                </div>
                <div className="tabs_dash_div" onClick={closeNav}>
                    <Link href="/dashboard/winnings" className={currentUrl.includes("winnings") ? "dash_tab" : "tab_inactive"}>
                        <Image width={25} height={25} src={winnings} alt="winnings" /> WINNINGS
                    </Link>
                </div>
                <div className="tabs_dash_div" onClick={closeNav}>
                    <Link href="/dashboard/profile" className={currentUrl.includes("profile") ? "dash_tab" : "tab_inactive"}>
                        <Image width={25} height={25} src={user_img} alt="profile" /> PROFILE
                    </Link>
                </div>
            </div>

            {/* Sidebar Toggle Button */}
            {/* <div id="main">
                <button className="openbtn" onClick={openNav}>
                    ☰ Open Sidebar
                </button>
            </div> */}
        </>
    );
}
