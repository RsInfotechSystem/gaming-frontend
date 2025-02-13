"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import coin_img from '../../public/dashboard/coin_img.png';
import down_arrow from '../../public/dashboard/down_arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { communication } from '@/services/communication';
import { setCoins } from '@/redux-stores/slices/coinSlice';
import Swal from 'sweetalert2';
import Loader from '../common-component/Loader';
import { useRouter } from 'next/navigation';

export default function UserNavbar() {
    const dispatch = useDispatch();
    const coins = useSelector(state => state.coins.coins);
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(false);
    const router = useRouter()
    //get User by Id
    async function getUserById() {
        try {
            setLoader(true);
            const serverResponse = await communication.getPlayerDetails();
            if (serverResponse.data.status === "SUCCESS") {
                dispatch(setCoins(serverResponse?.data?.coin));
                setUser(serverResponse?.data?.user)
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/");
            } else {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
            }
            setLoader(false)
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
            setLoader(false)
        }
    }

    useEffect(() => {
        getUserById()
    }, [])

    return (
        <>
            {loader ? <Loader />
                :
                <section>
                    <div className='dashboard_nav' style={{ zIndex: "10" }}>
                        <div className='nav_dash_width'>
                        </div>
                        <div className='main_dash_heading'>
                            <p>DASHBOARD</p>
                        </div>
                        <div className='dash_btn nav_dash_width' >
                            <div>
                                <div className='coin_btn d-flex'>
                                    <Image className='me-2' width={25} height={25} src={coin_img} alt="user" />

                                    <span className=''> {coins} </span> </div>
                            </div>
                            <div>
                                <button className='coin_btn profile_btn d-flex'>  <span className=''> {user?.name ?? ""} </span> <Image className='mx-1 my-auto' width={13} height={13} src={down_arrow} alt="user" /></button>

                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}






