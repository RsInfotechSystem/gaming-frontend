"use client"
import Image from 'next/image';
import React from 'react';
import user_img from '../../public/dashboard/usericon.png';
import gameslist from '../../public/dashboard/gameslist.png';
import coins from '../../public/dashboard/coins.png';
import mygames from '../../public/dashboard/mygames.png';
import winnings from '../../public/dashboard/winnings.png';
import tournament_bgmi from '../../public/dashboard/tournament_bgmi.png';

export default function Dashboard() {

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
                        <a href='#' className='dash_tab'><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={gameslist} alt="user"></Image> GAMES LIST</a>
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
                        <a href='#' className='dash_tab'><Image style={{ backgroundColor: "transparent" }} width={25} height={25} src={coins} alt="user"></Image> BUY COINS</a>
                    </div>
                </div>
                <div className='tournament_list'>
                    <div className='mt-5'>
                        <p className='tournament_text ps-2'>TOURNAMENTS LIVE </p>
                        <div className='d-flex justify-content-around mb-3'>
                          
                            <div className="card" style={{ width: '23rem', position: "relative", zIndex: "0", border: "2px solid red",backgroundColor: "#2b2b2b" }}>
                                <img
                                    src="/dashboard/tournament_bgmi.png"
                                    alt="Battle Ground Mobile India"
                                    className="card-img-top"
                                    style={{ height: '14rem', objectFit: "fill", position: "relative", zIndex: "1" }}
                                />
                                <div className="card-body" style={{display:"flex",gap:"20px" }}>
                                    <div>
                                        <h5 className="card-title" style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>BGMI - SOLO</h5>
                                        <p className="card-text" style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>Game is not a game its emotion</p>
                                    </div>
                                    <div className="align-content-center" style={{ backgroundColor: "#2b2b2b"}}>
                                        <span style={{ color: "red", fontWeight: "bold", backgroundColor: "#2b2b2b", color: "#fff" }}>2000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ width: '23rem', position: "relative", zIndex: "0", border: "2px solid red",backgroundColor: "#2b2b2b" }}>
                                <img
                                    src="/dashboard/tournament_bgmi.png"
                                    alt="Battle Ground Mobile India"
                                    className="card-img-top"
                                    style={{ height: '14rem', objectFit: "fill", position: "relative", zIndex: "1" }}
                                />
                                <div className="card-body" style={{display:"flex",gap:"20px" }}>
                                    <div>
                                        <h5 className="card-title" style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>BGMI - SOLO</h5>
                                        <p className="card-text" style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>Game is not a game its emotion</p>
                                    </div>
                                    <div className="align-content-center" style={{ backgroundColor: "#2b2b2b"}}>
                                        <span style={{ color: "red", fontWeight: "bold", backgroundColor: "#2b2b2b", color: "#fff" }}>2000</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='d-flex justify-content-around'>
                          
                            <div className="card" style={{ width: '23rem', position: "relative", zIndex: "0", border: "2px solid red",backgroundColor: "#2b2b2b" }}>
                                <img
                                    src="/dashboard/tournament_bgmi.png"
                                    alt="Battle Ground Mobile India"
                                    className="card-img-top"
                                    style={{ height: '14rem', objectFit: "fill", position: "relative", zIndex: "1" }}
                                />
                                <div className="card-body" style={{display:"flex",gap:"20px" }}>
                                    <div>
                                        <h5 className="card-title" style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>BGMI - SOLO</h5>
                                        <p className="card-text" style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>Game is not a game its emotion</p>
                                    </div>
                                    <div className="align-content-center" style={{ backgroundColor: "#2b2b2b"}}>
                                        <span style={{ color: "red", fontWeight: "bold", backgroundColor: "#2b2b2b", color: "#fff" }}>2000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ width: '23rem', position: "relative", zIndex: "0", border: "2px solid red",backgroundColor: "#2b2b2b" }}>
                                <img
                                    src="/dashboard/tournament_bgmi.png"
                                    alt="Battle Ground Mobile India"
                                    className="card-img-top"
                                    style={{ height: '14rem', objectFit: "fill", position: "relative", zIndex: "1" }}
                                />
                                <div className="card-body" style={{display:"flex",gap:"20px" }}>
                                    <div>
                                        <h5 className="card-title" style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>BGMI - SOLO</h5>
                                        <p className="card-text" style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>Game is not a game its emotion</p>
                                    </div>
                                    <div className="align-content-center" style={{ backgroundColor: "#2b2b2b"}}>
                                        <span style={{ color: "red", fontWeight: "bold", backgroundColor: "#2b2b2b", color: "#fff" }}>2000</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='ads_tabs'>
                    <div className='mt-5'>
                        <p className='ad_text ps-2'>NEWS & ADs</p>
                        <div className='dash_ads_div'>
                            <div className='dash_ads'></div>
                            <div className='dash_ads'></div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}