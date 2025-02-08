"use client"
import React from 'react';
import network from '../../../public/dashboard/network.png';
import bgmi_game from '../../../public/dashboard/bgmi_game.jpeg';
import cod_game from '../../../public/dashboard/cod_game.jpeg';
import freefire_game from '../../../public/dashboard/freefire_game_rd.png';
import Image from 'next/image';
import coin_img from '../../../public/dashboard/coin_img.png';
import coins from '../../../public/dashboard/coins.png';


const BuyCoinsAdmin = () => {


    return (
        // <div  style={{minHeight:"100vh"}}>
        <div style={{ width: "90%", margin: "0px auto"}}>
            <div className="mt-1">
                <p className="tournament_text">
                BUY COINS
                {" "}
                    <Image className="me-2" width={25} height={20} src={network} alt="network" />
                </p>
            </div>
            <div className='nav_search'>
                <div className="search_box">
                    <input type="search" placeholder="Search" className="search_input" />
                    <i className="fas fa-search search_icon"></i>
                </div>
                <div className="add_btn_main">
                    <button className='add_btn'>Add</button>
                </div>
            </div>


            <div className='mt-4'>

                
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
        // </div>
    )
}

export default BuyCoinsAdmin;
