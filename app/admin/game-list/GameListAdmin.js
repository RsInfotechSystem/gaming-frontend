"use client"
import Image from 'next/image';
import React from 'react';
import network from '../../../public/dashboard/network.png';
import bgmi_game from '../../../public/dashboard/bgmi_game.jpeg';
import cod_game from '../../../public/dashboard/cod_game.jpeg';
import freefire_game from '../../../public/dashboard/freefire_game_rd.png';


const GameListAdmin = () => {


    return (
        // <div  style={{minHeight:"100vh"}}>
        <div style={{ width: "90%", margin: "0px auto"}}>
            <div className="mt-1">
                <p className="tournament_text">
                    All GAMES{" "}
                    <Image className="me-2" width={25} height={20} src={network} alt="network" />
                </p>
            </div>
            <div className='nav_search'>
                <div className="search_box">
                    <input type="search" placeholder="Search" className="search_input" />
                    <i className="fas fa-search search_icon"></i>
                </div>
                <div className="add_btn_main">
                    <button className='add_btn'>Add</button>
                </div>
            </div>


            <div className='mt-4'>

                <div className='d-flex justify-content-around mb-3'>
                    <div className="games_bg">
                        <div className="games_bg_inner">
                            <div>
                                <Image
                                    className="me-2"
                                    style={{ borderRadius: "15px" }}
                                    width={76}
                                    height={76}
                                    src={bgmi_game}
                                    alt="user"
                                />
                            </div>
                            <div>
                                <p className="game_name">BGMI</p>
                                <p className="game_info">5.3 Millions played</p>
                            </div>
                        </div>
                    </div>

                    <div className='games_bg'>
                        <div className="games_bg_inner">

                            <div>
                                <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={freefire_game} alt="user"></Image>
                            </div>
                            <div>
                                <p className='game_name'>FREE FIRE</p>
                                <p className='game_info'>5.3 Millions played</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around mb-3'>
                    <div className='games_bg'>
                        <div className="games_bg_inner">
                            <div>
                                <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={cod_game} alt="user"></Image>
                            </div>
                            <div>
                                <p className='game_name'>COD</p>
                                <p className='game_info'>5.3 Millions played</p>
                            </div>
                        </div>
                    </div>
                    <div className='games_bg'>
                        <div className="games_bg_inner">
                            <div>
                                <Image className='me-2' style={{ borderRadius: "15px" }} width={76} height={76} src={freefire_game} alt="user"></Image>
                            </div>
                            <div>
                                <p className='game_name'>FREE FIRE</p>
                                <p className='game_info'>5.3 Millions played</p>
                            </div>
                        </div>
                    </div>
                </div>
             
                
            </div>
        </div>
        // </div>
    )
}

export default GameListAdmin;
