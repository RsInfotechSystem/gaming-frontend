"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import coin_img from '../../../public/dashboard/coin_img.png';
import coins from '../../../public/dashboard/coins.png';
import UserRightSidebar from '../UserRightSidebar';
import UserLeftSidebar from '../UserLeftSidebar';
import UserNavbar from '../UserNavbar';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { communication } from '@/services/communication';
import Loader from '@/app/common-component/Loader';

export default function GameCoins() {
  const [coinList, setCoinList] = useState([]);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  //get Contest on initial load
  const getCoinList = async () => {
    try {
      setLoader(true);
      const serverResponse = await communication.getCoinList();
      if (serverResponse?.data?.status === "SUCCESS") {
        setCoinList(serverResponse?.data?.coinList);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/");
      } else {
        setCoinList([])
      }
      setLoader(false);
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });

      setLoader(false);
    }
  };

  useEffect(() => {
    getCoinList()
  }, []);

  return (
    <>
      {loader === true ?
        <Loader />
        :
        <div className='tournament_list'>
          <div className='mt-1 coin_pack'>
            <p className='tournament_text'>COINS PACK </p>
            <div className="container mt-4">
              <div className="row">
                {coinList?.length > 0 ? (
                  <>
                    {coinList?.map((coin, index) => (
                      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={index}>
                        <div className="card custom-card p-3 text-center coin_div">
                          <div className="text-center">
                            <Image src={coins} width={60} height={60} alt="coins"></Image>
                          </div>
                          <div className="py-3">
                            <Image src={coin_img} width={30} height={30} alt="coins" />
                            <span className="coins_amount ms-2">{coin?.coinsCount}</span>
                          </div>
                          <div className="text-center">
                            <button className='get_coin_btn'>&#8377; {coin?.rupeesAmt}</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="no_data">Data Not Available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}