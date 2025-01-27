"use client"
import React from 'react';

export default function Dashboard() {

    return (
        <>
            <section>
                <div className='dashboard_nav'>
                    <div className='nav_dash_width'>
                    </div>
                    <div className='main_dash_heading'>
                        <p>DASHBOARD</p>
                    </div>
                    <div className='dash_btn nav_dash_width' >
                        <div>
                            <button className='coin_btn'>99,999</button>
                        </div>
                        <div>
                            <button className='coin_btn'>Zywfo</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='tournament_main'>
                <div className='menu_tabs'>
                    <div className='tabs_dash_div'>
                        <a href='#' className='dash_tab'>GAMES LIST</a>
                    </div>
                    <div className='tabs_dash_div'>
                        <a href='#' className='dash_tab'>MY GAMES</a>
                    </div>
                    <div className='tabs_dash_div'>
                        <a href='#' className='dash_tab'>WINNINGS</a>
                    </div>
                    <div className='tabs_dash_div'>
                        <a href='#' className='dash_tab'>PROFILE</a>
                    </div>
                    <div className='tabs_dash_div'>
                        <a href='#' className='dash_tab'>BUY COINS</a>
                    </div>
                </div>
                <div className='tournament_list text-lg-center'>kjndje loremddijfhewbeui</div>
                <div className='ads_tabs'>
                    <div className='mt-5 text-center' >
                        <p className='ad_text'>NEWS & ADs</p>
                    </div>
                  
                </div>
            </section>
        </>
    );
}