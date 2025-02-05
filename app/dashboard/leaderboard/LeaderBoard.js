// LeaderBoard.js
"use client"
import React, { useState } from 'react';
import network from '../../../public/dashboard/network.png';
import Image from 'next/image';

export default function LeaderBoard() {

    const [roles, setRoles] = useState([
        {
            _id: "1",
            role: "Admin",
            tab: 40,
            level: 5,
        },
        {
            _id: "1",
            role: "Admin",
            tab: 30,
            level: 5,

        },
        {
            _id: "1",
            role: "Admin",
            tab: 34,
            level: 3,

        },
    ])
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


                    {/* table  */}
                    <div className="table_wrapper">
                        <div className="table_main">
                            <div className="table_section">
                                {/* Table Header */}
                                <div className="table_header">
                                    <div className="col_10p">
                                        <h5>Rank</h5>
                                    </div>
                                    <div className="col_20p">
                                        <h5>Team Name</h5>
                                    </div>
                                    <div className="col_60p">
                                        <h5>Points</h5>
                                    </div>
                                   
                                    <div className="col_10p">
                                        <h5>Level</h5>
                                    </div>
                                </div>

                                {/* Table Data */}
                                {roles.length > 0 ? (
                                    <>
                                        {roles.map((roleDetails, index) => (
                                            <div className="table_data" key={index}>
                                                <div className="col_10p">
                                                    <h6>{index + 1}</h6>
                                                </div>
                                                <div className="col_20p">
                                                    <h6>{roleDetails?.role}</h6>
                                                </div>
                                                <div className="col_60p">
                                                    <h6>{roleDetails?.tab}</h6>
                                                </div>
                                                <div className="col_10p">
                                                    <h6>{roleDetails?.level}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <p className="no_data">Data Not Available</p>
                                )}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}