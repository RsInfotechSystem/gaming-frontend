"use client"
import React from 'react';
import Image from 'next/image';
import coin_img from '../../../public/dashboard/coin_img.png';
import coins from '../../../public/dashboard/coins.png';
import UserRightSidebar from '../UserRightSidebar';
import UserLeftSidebar from '../UserLeftSidebar';
import UserNavbar from '../UserNavbar';

export default function GameCoins() {

  return (
    <>
      {/* <section className='tournament_main'> */}

        <div className='tournament_list'>
          <div className='mt-1 coin_pack'>
            <p className='tournament_text'>COINS PACK </p>
            <div className='d-flex justify-content-between mb-3'>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>300</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 10</button>
                </div>

              </div>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>500</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 30</button>
                </div>

              </div>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>1000</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 100</button>
                </div>

              </div>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>5000</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 300</button>
                </div>

              </div>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>300</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 10</button>
                </div>

              </div>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>300</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 10</button>
                </div>

              </div>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>300</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 10</button>
                </div>

              </div>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>300</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 10</button>
                </div>

              </div>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>300</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 10</button>
                </div>

              </div>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>300</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 10</button>
                </div>

              </div>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>300</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 10</button>
                </div>

              </div>
              <div className='coin_div'>
                <div className="text-center">
                  <Image src={coins} width={60} height={60} alt="coins"></Image>
                </div>
                <div className="text-center py-3">
                  <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>300</span>
                </div>
                <div className="text-center">
                  <button className='get_coin_btn'>&#8377; 10</button>
                </div>

              </div>
            </div>
            
          </div>
        </div>


      {/* </section> */}

    </>
  );
}