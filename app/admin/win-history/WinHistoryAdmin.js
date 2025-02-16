ro"use client"
import { adminCommunication } from '@/services/admin-communication';
import React, { useEffect, useState } from 'react'
import network from '../../../public/dashboard/network.png';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Loader from '@/app/common-component/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import CustomSearchBox from '@/app/common-component/CustomSearchBox';
const pageLimit = process.env.NEXT_PUBLIC_LIMIT ?? 20;

const WinHistoryAdmin = () => {
    const [searchString, setSearchString] = useState("");


    return (
        <>
            {/* {loader === true ?
                <Loader />
                : */}
            <div style={{ width: "90%", margin: "0px auto" }}>

                <div className="mt-1">
                    <p className="tournament_text">
                        Win History{" "}
                        <Image className="me-2" width={25} height={20} src={network} alt="network" />
                    </p>
                </div>
                <div className='nav_search'>
                    <CustomSearchBox searchString={searchString} setSearchString={setSearchString} />
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
                                    <div className="col_10p"><h5>SR No</h5></div>
                                    <div className="col_15p"><h5>Name</h5></div>
                                    {/* <div className="col_10p"><h5>Mobile</h5></div> */}
                                    <div className="col_15p"><h5>User Name</h5></div>
                                    <div className="col_15p"><h5>Available Coins</h5></div>
                                    <div className="col_15p"><h5>Action</h5></div>
                                </div>
                                {/* {player?.length > 0 ? ( */}
                                <>
                                    {/* {player.map((userDetails, index) => ( */}
                                    <div className="table_data fontfam_play" >
                                        <div className="col_10p"><h6>{1}</h6></div>
                                        <div className="col_15p"><h6>userDetails</h6></div>

                                        {/* <div className="col_10p"><h6>userDetails</h6></div> */}
                                        <div className="col_15p"><h6>userDetails</h6></div>
                                        <div className="col_15p"><h6>400</h6></div>
                                        <div className="col_15p">
                                            <div className="action">
                                                <FontAwesomeIcon icon={faPenToSquare} className="edit_icon" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* ))} */}
                                </>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* } */}
        </>
    )
}

export default WinHistoryAdmin;
