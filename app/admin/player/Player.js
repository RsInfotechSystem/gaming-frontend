"use client"
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

const Player = () => {
    const [player, setPlayers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [searchString, setSearchString] = useState("");
    const [paginationData, setPaginationData] = useState({
        currentPage: 1,
        isPageUpdated: false,
        totalPages: 1,
        page: 1
    });
    const router = useRouter();
    async function getPlayerList(page = 1, searchString = "") {
        try {
            setLoader(true);
            const serverResponse = await adminCommunication.getPlayerList(page, searchString);
            if (serverResponse.data.status === "SUCCESS") {
                setPlayers(serverResponse?.data?.players);
                setPaginationData(pre => ({
                    ...pre, totalPages: serverResponse?.data?.totalPages,
                    page: page,
                    currentPage: page,
                }))
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                setPlayers([]);
                setPaginationData(pre => ({
                    ...pre, totalPages: 0,
                }))
            }
            setLoader(false)
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
            setLoader(false)
        }
    }

    useEffect(() => {
        getPlayerList(paginationData.currentPage, searchString);
    }, [paginationData.isPageUpdated]);

    return (
        <>
            {loader === true ?
                <Loader />
                :
                <div style={{ width: "90%", margin: "0px auto" }}>

                    <div className="mt-1">
                        <p className="tournament_text">
                            Player Management{" "}
                            <Image className="me-2" width={25} height={20} src={network} alt="network" />
                        </p>
                    </div>
                    <div className='nav_search'>
                        <CustomSearchBox searchString={searchString} setSearchString={setSearchString} apiCall={getPlayerList} />
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
                                        <div className="col_25p"><h5>Email</h5></div>
                                        <div className="col_10p"><h5>Mobile</h5></div>
                                        <div className="col_15p"><h5>User Name</h5></div>
                                        <div className="col_15p"><h5>Available Coins</h5></div>
                                        <div className="col_15p"><h5>Action</h5></div>
                                    </div>
                                    {player?.length > 0 ? (
                                        <>
                                            {player.map((userDetails, index) => (
                                                <div className="table_data fontfam_play" key={index}>
                                                    <div className="col_10p"><h6>{((Number(pageLimit) * (paginationData.page - 1))) + (index + 1)}</h6></div>
                                                    <div className="col_15p"><h6>{userDetails?.name}</h6></div>
                                                    <div className="col_25p"><h6>{userDetails?.email}</h6></div>
                                                    <div className="col_10p"><h6>{userDetails?.mobile}</h6></div>
                                                    <div className="col_15p"><h6>{userDetails?.userName}</h6></div>
                                                    <div className="col_15p"><h6>{userDetails?.availableCoins}</h6></div>
                                                    <div className="col_15p">
                                                        <div className="action">
                                                            <FontAwesomeIcon icon={faPenToSquare} onClick={() => router.push(`/dashboard/user-management/add-user?type=update&userId=${userDetails._id}`)} className="edit_icon" />
                                                        </div>
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
            }
        </>
    )
}

export default Player
