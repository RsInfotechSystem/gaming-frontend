"use client"
import Image from 'next/image';
import React from 'react';
import user_img from '../../public/dashboard/usericon.png';
import gameslist from '../../public/dashboard/gameslist.png';
import coins from '../../public/dashboard/coins.png';
import mygames from '../../public/dashboard/mygames.png';
import winnings from '../../public/dashboard/winnings.png';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidenav() {
    const currentUrl = usePathname().split("/");
    const router = useRouter();
    return (
        <>
            {/* <section className='tournament_main'> */}
            <div className='menu_tabs'>
                <div className='tabs_dash_div' onClick={() => router.push("/admin/role-management")}>
                    <div className={currentUrl.includes("role-management") ? "dash_tab" : "tab_inactive"} ><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> Role Management</div>
                </div>

                <div className='tabs_dash_div' onClick={() => router.push("/admin/user-management")}>
                    <div className={currentUrl.includes("user-management") ? "dash_tab" : "tab_inactive"} ><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> User Management</div>
                </div>

                <div className='tabs_dash_div' onClick={() => router.push("/admin/game-list")}>
                    <div className={currentUrl.includes("game-list") ? "dash_tab" : "tab_inactive"} ><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> Games List</div>
                </div>

                <div className='tabs_dash_div' onClick={() => router.push("/admin/contest")}>
                    <div className={currentUrl.includes("contest") ? "dash_tab" : "tab_inactive"} ><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> Contest Management</div>
                </div>

                {/* <div className='tabs_dash_div'>
                    <div className={currentUrl.includes("my-game") ? "dash_tab" : "tab_inactive"}><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={mygames} alt="user"></Image> MY GAMES</div>
                </div>

                <div className='tabs_dash_div'>
                    <div className={currentUrl.includes("wining") ? "dash_tab" : "tab_inactive"}><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={winnings} alt="user"></Image> WINNINGS</div>
                </div>
                <div className='tabs_dash_div'>
                    <div className={currentUrl.includes("wining") ? "dash_tab" : "tab_inactive"}><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={user_img} alt="user"></Image> PROFILE</div>
                </div> */}
                <div className='tabs_dash_div' onClick={() => router.push("/admin/buy-coins")}>
                    <div className={currentUrl.includes("buy-coins") ? "dash_tab" : "tab_inactive"}><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={coins} alt="user"></Image> Coins Management</div>
                </div>

                <div className='tabs_dash_div' onClick={() => router.push("/admin/player")}>
                    <div className={currentUrl.includes("player") ? "dash_tab" : "tab_inactive"} ><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> Players</div>
                </div>
                <div className='tabs_dash_div' onClick={() => router.push("/admin/results")}>
                    <div className={currentUrl.includes("results") ? "dash_tab" : "tab_inactive"} ><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> Results</div>
                </div>
                <div className='tabs_dash_div' onClick={() => router.push("/admin/win-history")}>
                    <div className={currentUrl.includes("win-history") ? "dash_tab" : "tab_inactive"} ><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> Win History</div>
                </div>
                <div className='tabs_dash_div' onClick={() => router.push("/admin/withdrawal-history")}>
                    <div className={currentUrl.includes("withdrawal-history") ? "dash_tab" : "tab_inactive"} ><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> Withdrawal History</div>
                </div>
            </div>
            {/* </section> */}


        </>
    );
}






