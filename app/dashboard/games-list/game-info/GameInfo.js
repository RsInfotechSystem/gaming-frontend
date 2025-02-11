"use client"
import React from 'react';
import Image from 'next/image';
import coin_img from '../../../../public/dashboard/coin_img.png';
import coins from '../../../../public/dashboard/coins.png';
import network from '../../../../public/dashboard/network.png';



export default function GameInfo() {

    return (
        <>
            {/* <section className='tournament_main'> */}

            <div className='tournament_list'>
                <div className='mt-1 coin_pack'>
                    <div className="mt-1">
                        <p className="tournament_text">
                            CONTEST{" "}
                            <Image className="me-2" width={25} height={20} src={network} alt="network" />
                        </p>
                    </div>
                    <div>
                      <p>developing</p>
                    </div>
                 

                </div>
            </div>



        </>
    );
}