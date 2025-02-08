"use client"
import React, { useEffect, useState } from 'react';
import network from '../../../public/dashboard/network.png';
import bgmi_game from '../../../public/dashboard/bgmi_game.jpeg';
import cod_game from '../../../public/dashboard/cod_game.jpeg';
import freefire_game from '../../../public/dashboard/freefire_game_rd.png';
import Image from 'next/image';
import coin_img from '../../../public/dashboard/coin_img.png';
import coins from '../../../public/dashboard/coins.png';
import CreateCoins from './CreateCoins';
import { useRouter } from 'next/navigation';
import { adminCommunication } from '@/services/admin-communication';
import Loader from '@/app/common-component/Loader';


const BuyCoinsAdmin = () => {
  const [coinsArray, setCoinsArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const [modalStates, setModalStates] = useState({ type: "", modal: false, coinId: "" })
  const router = useRouter();

  async function getCoinsList(page = 1, searchString = "") {
    try {
      setLoader(true);
      const serverResponse = await adminCommunication.getCoinsList(page, searchString);
      if (serverResponse.data.status === "SUCCESS") {
        setCoinsArray(serverResponse?.data?.coinList);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/login");
      } else {
        setCoinsArray([]);
      }
      setLoader(false)
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
      setLoader(false)
    }
  }

  useEffect(() => {
    getCoinsList();
  }, []);

  return (
    <>
      {loader === true ?
        <Loader />
        :
        <div style={{ width: "90%", margin: "0px auto" }}>
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
              <button className='add_btn' onClick={() => setModalStates({ coinId: "", type: "create", modal: true })}>Add</button>
            </div>
          </div>


          <div className='mt-4'>
            <div className='row justify-content-between mb-3'>
              {coinsArray?.map((ele, index) => {
                return (
                  <div className='coin_div' key={index}>
                    <div className="text-center">
                      <Image src={coins} width={60} height={60} alt="coins"></Image>
                    </div>
                    <div className="text-center py-3">
                      <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>{ele?.coinsCount}</span>
                    </div>
                    <div className="text-center">
                      <button className='get_coin_btn'>&#8377; {ele?.rupeesAmt}</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      }
      {modalStates?.modal && <CreateCoins setModalStates={setModalStates} type={modalStates?.type} coinId={modalStates?.coinId ?? ""} getCoinsList={getCoinsList} />}
    </>
  )
}

export default BuyCoinsAdmin;
