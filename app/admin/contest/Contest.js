"use client"
import Loader from '@/app/common-component/Loader';
import React, { useEffect, useState } from 'react';
import network from '../../../public/dashboard/network.png';
import bgmi_game from '../../../public/dashboard/bgmi_game.jpeg';
import Image from 'next/image';
import CreateContest from './CreateContest';
import { adminCommunication } from '@/services/admin-communication';
import { formatDate } from '@/helper/formatDate';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import AddContestDetails from './AddContestDetails';
import { convertTo12HourFormat } from '@/helper/convert-time-in-12-hours';
import CustomSearchBox from '@/app/common-component/CustomSearchBox';

const Contest = () => {
    const [loader, setLoader] = useState(false);
    const [contestList, setContestList] = useState([]);
    const [modalStates, setModalStates] = useState({ type: "", modal: false });
    const [contestModal, setContestModal] = useState({ modal: false, contestId: "" })
    const router = useRouter();
    const [searchString, setSearchString] = useState("");
    const [paginationData, setPaginationData] = useState({
        currentPage: 1,
        isPageUpdated: false,
        totalPages: 1,
        page: 1
    });

    async function getContestList(page = 1, searchString = "") {
        try {
            setLoader(true);
            const serverResponse = await adminCommunication.getAdminContestList(page, searchString);
            if (serverResponse.data.status === "SUCCESS") {
                setContestList(serverResponse?.data?.contestList);
                setPaginationData(pre => ({
                    ...pre, totalPages: serverResponse?.data?.totalPages,
                    page: page,
                    currentPage: page,
                }))
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                setContestList([])
            }
            setLoader(false)
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
            setLoader(false)
        }
    }

    useEffect(() => {
        getContestList(paginationData.currentPage, searchString);
    }, [paginationData.isPageUpdated]);
    return (
        <>
            {loader === true ?
                <Loader />
                :
                <div style={{ width: "90%", margin: "0px auto" }}>
                    <div className="mt-1">
                        <p className="tournament_text">
                            All Contest{" "}
                            <Image className="me-2" width={25} height={20} src={network} alt="network" />
                        </p>
                    </div>
                    <div className='nav_search'>
                        <CustomSearchBox searchString={searchString} setSearchString={setSearchString} apiCall={getContestList} />
                        <div className="add_btn_main">
                            <button className='add_btn' onClick={() => setModalStates({ modal: true, type: "create", gameId: "" })}>Add</button>
                        </div>
                    </div>


                    <div className='mt-4'>
                        <div className="container tab-pane active">
                            <div className="row gy-4">
                                {contestList?.map((details, index) => (
                                    <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                                        <div className="card custom-card-contest">
                                            <div className="card-header-contest d-flex justify-content-between align-items-center">
                                                <h5 className="m-0">{details?.name}</h5>
                                                {details?.game?.name && <span className="badge custom-badge-contest">Game: {details?.game?.name}</span>}
                                            </div>

                                            <div className="card-body">
                                                <div className="row text-center">
                                                    <div className="col-6">
                                                        <p className="label-contest">Date</p>
                                                        <p className="value-contest">{formatDate(details?.contestDate)}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="label-contest">Time</p>
                                                        <p className="value-contest">{convertTo12HourFormat(details?.contestTime)}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="label-contest">Map</p>
                                                        <p className="value-contest" style={{ textTransform: "uppercase" }}>{details?.gameType}</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p className="label-contest">Perspective</p>
                                                        <p className="value-contest">TPP</p>
                                                    </div>
                                                </div>

                                                <div className="row text-center mt-3">
                                                    <div className="col-4">
                                                        <p className="label-contest">Prize Pool</p>
                                                        <p className="value-contest">💎 {details?.winningPrice}</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <p className="label-contest">Winners</p>
                                                        <p className="value-contest">{details?.noOfWinners ?? 0}</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <p className="label-contest">Join Using</p>
                                                        <p className="value-contest text-success">{details?.reqCoinsToJoin <= 0 ? "FREE" : `${details?.reqCoinsToJoin} Coins`}</p>
                                                    </div>
                                                </div>

                                                <div className="progress-container-contest mt-3">
                                                    <div className="d-flex justify-content-between small">
                                                        <span>{details?.playersLimit} Total players</span>
                                                        <span>{`${details?.joinedCount ?? 0}/${details?.playersLimit}`} players joined</span>
                                                    </div>
                                                </div>
                                                {details?.roomId && <div className="bg-warning-contest w-100 mt-3 fw-bold d-flex justify-content-between align-items-center">
                                                    {details?.roomId && <span className="badge custom-badge-contest">ID: {details?.roomId}</span>}
                                                    {details?.passwordToJoin && <span className="badge custom-badge-contest">Pass: {details?.passwordToJoin}</span>}
                                                    {/* <span style={{cursor:"pointer"}} className="badge custom-badge-contest">Declare winner</span> */}
                                                    <button style={{ border: "none", outline: "none", background: "none" }} className='' onClick={() => router.push(`/admin/contest/winner-declare?contestId=${details?.id}`)}> <span className="badge custom-badge-contest">Declare winner</span></button>
                                                </div>
                                                }
                                                {!details?.roomId && <button className="btn btn-warning-contest w-100 mt-3 fw-bold" onClick={() => setContestModal({ modal: true, contestId: details?.id })}>Add Room Id</button>}
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {modalStates?.modal && <CreateContest setModalStates={setModalStates} type={modalStates?.type} gameId={modalStates?.gameId ?? ""} />}
            {contestModal?.modal && <AddContestDetails contestId={contestModal.contestId} setContestModal={setContestModal} getContestList={getContestList} />}
        </>
    )
}

export default Contest
