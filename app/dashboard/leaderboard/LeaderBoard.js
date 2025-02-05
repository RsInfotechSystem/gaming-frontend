// LeaderBoard.js
"use client"
import React from 'react';
import network from '../../../public/dashboard/network.png';
import Image from 'next/image';

export default function LeaderBoard() {
    return (
        <>
            <div className="tournament_list">
                <div style={{ width: "90%", margin: "0px auto" }}>
                    <div className="mt-1">
                        <p className="tournament_text">
                            Leader Board{" "}
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
                   


                </div>
            </div>
        </>
    );
}