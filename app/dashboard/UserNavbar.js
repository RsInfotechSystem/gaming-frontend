"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import "../style/dashboard.css"; // Import Global CSS

import coin_img from '../../public/dashboard/coin_img.png';
import down_arrow from '../../public/dashboard/down_arrow.png';
import { communication } from '@/services/communication';
import { setCoins } from '@/redux-stores/slices/coinSlice';
import Loader from '../common-component/Loader';

export default function UserNavbar({ openNav }) {
    const dispatch = useDispatch();
    const coins = useSelector(state => state.coins.coins);
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(false);
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);


    async function getUserById() {
        try {
            setLoader(true);
            const serverResponse = await communication.getPlayerDetails();
            if (serverResponse.data.status === "SUCCESS") {
                dispatch(setCoins(serverResponse?.data?.coin));
                setUser(serverResponse?.data?.user);
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/");
            } else {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
            }
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
        } finally {
            setLoader(false);
        }
    }

    useEffect(() => {
        getUserById();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {loader ? <Loader /> :
                <section>
                    <div className='dashboard_nav' style={{ zIndex: "10" }}>
                        <div className='nav_dash_width'>
                            <button className="openbtn" onClick={openNav}>
                                ☰
                            </button>
                        </div>
                        <div className='main_dash_heading'>
                            <p>DASHBOARD</p>
                        </div>
                        <div className='dash_btn'>
                            <div className='coin_btn d-flex'>
                                <Image className='me-2' width={20} height={20} src={coin_img} alt="coins" />
                                <span>{coins}</span>
                            </div>
                            {/* <div>
                                <button className='coin_btn profile_btn d-flex'>
                                    <span>{user?.name ?? ""}</span>
                                    <Image className='mx-1 my-auto' width={10} height={10} src={down_arrow} alt="user" />
                                </button>
                            </div> */}
                            <div>
                                <button className='coin_btn profile_btn d-flex'>
                                    <span className='text-capitalize'>{isMobile ? user?.name?.charAt(0) : user?.name}</span>
                                    <Image className='mx-1 my-auto' width={10} height={10} src={down_arrow} alt="user" />
                                </button>
                            </div>

                        </div>
                    </div>
                </section>
            }
        </>
    );
}
