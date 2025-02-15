"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import network from '../../../public/dashboard/network.png';
import bgmi_game from '../../../public/dashboard/bgmi_game.jpeg';
import cod_game from '../../../public/dashboard/cod_game.jpeg';
import freefire_game from '../../../public/dashboard/freefire_game_rd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Loader from '@/app/common-component/Loader';
import CreateGame from './CreateGame';
import { useRouter } from 'next/navigation';
import { adminCommunication, getServerUrl } from '@/services/admin-communication';
import Swal from 'sweetalert2';
import CustomSearchBox from '@/app/common-component/CustomSearchBox';



const GameListAdmin = () => {
   
    const [loader, setLoader] = useState(false);
    const [searchString, setSearchString] = useState("");
    const [games, setGames] = useState([]);
    const [paginationData, setPaginationData] = useState({
        currentPage: 1,
        isPageUpdated: false,
        totalPages: 1,
        page: 1
    });
    const [modalStates, setModalStates] = useState({ type: "", modal: false, gameId: "" })
    const router = useRouter();

    async function getGameList(page = 1, searchString = "") {
        try {
            setLoader(true);
            const serverResponse = await adminCommunication.getGameList(page, searchString);
            if (serverResponse.data.status === "SUCCESS") {
                setGames(serverResponse?.data?.gameList);
                setPaginationData(pre => ({
                    ...pre, totalPages: serverResponse?.data?.totalPages,
                    page: page,
                    currentPage: page,
                }))
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                setGames([]);
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

    async function deleteGame(gameId) {
        try {

            Swal.fire({
                text: "Are you sure ,you want to Delete the Game?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "No",
            }).then(async function (result) {
                if (result.isConfirmed) {
                    try {
                        setLoader(true);
                        const serverResponse = await adminCommunication.deleteGame([gameId]);
                        if (serverResponse.data.status === "SUCCESS") {
                            Swal.fire({ text: serverResponse?.data?.message, icon: "success" });
                            getGameList(1, "")
                        } else if (serverResponse?.data?.status === "JWT_INVALID") {
                            Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                            router.push("/login");
                        } else {
                            Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                        }
                        setLoader(false)
                    } catch (error) {
                        Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
                        setLoader(false)
                    }

                } else {
                    return;
                }
            });

            setLoader(false)
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
            setLoader(false)
        }
    }

    useEffect(() => {
        getGameList(paginationData.currentPage, searchString);
    }, [paginationData.isPageUpdated]);

    return (
        <>
            {loader === true ?
                <Loader />
                :
                <div style={{ width: "90%", margin: "0px auto" }}>
                    <div className="mt-1">
                        <p className="tournament_text">
                            All GAMES{" "}
                            <Image className="me-2" width={25} height={20} src={network} alt="network" />
                        </p>
                    </div>
                    <div className='nav_search'>
                    <CustomSearchBox searchString={searchString} setSearchString={setSearchString} apiCall={getGameList} />
                        <div className="add_btn_main">
                            <button className='add_btn' onClick={() => setModalStates({ modal: true, type: "create", gameId: "" })}>Add</button>
                        </div>
                    </div>


                    <div className='mt-4'>

                        <div className='d-flex justify-content-around mb-3'>
                            {games?.map((gameDetails, index) => {
                                return (
                                    <div className="games_bg" key={index + 1}>
                                        <div className="games_bg_inner">
                                            

                                            <FontAwesomeIcon icon={faEdit} title='update game' onClick={() => setModalStates({ type: "update", modal: true, gameId: gameDetails?.id })}className="edit_icon delete_btn me-5"/>

                                            <FontAwesomeIcon icon={faTrashCan} className="edit_icon delete_btn" onClick={() => deleteGame(gameDetails.id)} />
                                           
                                            <div>
                                                <Image
                                                    className="me-2"
                                                    style={{ borderRadius: "15px" }}
                                                    width={76}
                                                    height={76}
                                                    src={`${getServerUrl()}/getFiles/${gameDetails?.gamefiles[0].fileUrl}`}
                                                    alt="game_image"
                                                />
                                            </div>
                                            <div>
                                                <p className="game_name">{gameDetails?.name}</p>
                                                <p className="game_info">{gameDetails?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </div>
            }
            {modalStates?.modal && <CreateGame setModalStates={setModalStates} type={modalStates?.type} gameId={modalStates?.gameId ?? ""} getGameList={getGameList} />}
        </>

    )
}

export default GameListAdmin;
