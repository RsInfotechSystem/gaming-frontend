"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import Loader from '../common-component/Loader';
import { useRouter } from 'next/navigation';

export default function TopHeader() {
    const [loader, setLoader] = useState(false);
    const [user, setUser] = useState({});

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
                                <button className='coin_btn profile_btn d-flex'>  <span className=''> {user?.name ?? "Admin User"} </span></button>

                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
}









