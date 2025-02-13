"use client"
import Loader from '@/app/common-component/Loader';
import React, { useState } from 'react';
import network from '../../../public/dashboard/network.png';
import bgmi_game from '../../../public/dashboard/bgmi_game.jpeg';
import Image from 'next/image';
import CreateContest from './CreateContest';

const Contest = () => {
    const [loader, setLoader] = useState(false);
    const [contestList, setContestList] = useState([]);
    const [modalStates, setModalStates] = useState({ type: "", modal: false })
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
                        <div className="search_box">
                            <input type="search" placeholder="Search" className="search_input" />
                            <i className="fas fa-search search_icon"></i>
                        </div>
                        <div className="add_btn_main">
                            <button className='add_btn' onClick={() => setModalStates({ modal: true, type: "create", gameId: "" })}>Add</button>
                        </div>
                    </div>


                    <div className='mt-4'>

                    </div>
                </div>
            }
            {modalStates?.modal && <CreateContest setModalStates={setModalStates} type={modalStates?.type} gameId={modalStates?.gameId ?? ""} />}

        </>
    )
}

export default Contest
