"use client";
import React, { useState } from 'react';
import network from '../../../public/dashboard/network.png';
import Image from 'next/image';

const RoleList = () => {
    const [roles, setRoles] = useState([
        {
            _id: "1",
            role: "Admin",
            tab: "Role Management",
        },
        {
            _id: "1",
            role: "Admin",
            tab: "Role Management"
        },
        {
            _id: "1",
            role: "Admin",
            tab: "User Management",
        },
        {
            _id: "1",
            role: "Admin",
            tab: "User Management",
        },
        {
            _id: "1",
            role: "Admin",
            tab: "User Management",
        },
        {
            _id: "1",
            role: "Admin",
            tab: "User Management",
        },
        {
            _id: "1",
            role: "Admin",
            tab: "User Management",
        },
        {
            _id: "1",
            role: "Admin",
            tab: "User Management",
        },
        {
            _id: "1",
            role: "Admin",
            tab: "User Management",
        },
        {
            _id: "1",
            role: "Admin",
            tab: "User Management",
        },
    ])
    const [page, setPage] = useState(1);
    const pageLimit = 20;
    return (
        <>
                <div style={{ width: "90%", margin: "0px auto" }}>

            <div className="mt-1">
                                    <p className="tournament_text">
                                        WINNINGS{" "}
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
                            {/* Scrollable container */}
                            <div className="table_scroll">
                                <div className="table_section">
                                    <div className="table_header fontfam_play">
                                        <div className="col_20p"><h5>Rank</h5></div>
                                        <div className="col_100p"><h5>Team Name</h5></div>
                                        <div className="col_100p"><h5>Points</h5></div>
                                        <div className="col_100p"><h5>Points</h5></div>
                                        <div className="col_100p"><h5>Points</h5></div>
                                        <div className="col_100p"><h5>Points</h5></div>
                                        <div className="col_100p"><h5>Points</h5></div>
                                        <div className="col_100p"><h5>Points</h5></div>
                                        <div className="col_100p"><h5>Points</h5></div>
                                        <div className="col_100p"><h5>Points</h5></div>
                                        
                                    </div>
                                    {roles.length > 0 ? (
                                        <>
                                            {roles.map((roleDetails, index) => (
                                                <div className="table_data fontfam_play" key={index}>
                                                    <div className="col_20p"><h6>{index + 1}</h6></div>
                                                    <div className="col_100p"><h6>{roleDetails?.role}</h6></div>
                                                    <div className="col_100p"><h6>{roleDetails?.tab}</h6></div>
                                                    <div className="col_100p"><h6>{roleDetails?.tab}</h6></div>
                                                    <div className="col_100p"><h6>{roleDetails?.tab}</h6></div>
                                                    <div className="col_100p"><h6>{roleDetails?.tab}</h6></div>
                                                    <div className="col_100p"><h6>{roleDetails?.tab}</h6></div>
                                                    <div className="col_100p"><h6>{roleDetails?.tab}</h6></div>
                                                    <div className="col_100p"><h6>{roleDetails?.tab}</h6></div>
                                                    <div className="col_100p"><h6>{roleDetails?.tab}</h6></div>
                                                   
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
    )
}

export default RoleList
