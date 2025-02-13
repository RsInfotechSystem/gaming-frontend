"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import coin_img from '../../../public/dashboard/coin_img.png';
import coins from '../../../public/dashboard/coins.png';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { communication } from '@/services/communication';
import { payPayment } from '@/helper/payment-gateway';
import { useRazorpay } from "react-razorpay";
import { useDispatch } from 'react-redux';
import { setCoins } from '@/redux-stores/slices/coinSlice';
import Loader from '@/app/common-component/Loader';

export default function GameCoins() {
  const [coinList, setCoinList] = useState([]);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const { Razorpay } = useRazorpay();
  const dispatch = useDispatch();


  //get Contest on initial load
  const getCoinList = async () => {
    try {
      setLoader(true);
      const serverResponse = await communication.getCoinList();
      if (serverResponse?.data?.status === "SUCCESS") {
        setCoinList(serverResponse?.data?.coinList);
        setLoader(false);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "error" });
        router.push("/");
        setLoader(false);
      } else {
        Swal.fire({ text: serverResponse?.data?.message, icon: "error" });
      }
      setLoader(false);
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  //purchase Coins
  //get Contest on initial load
  const purchaseCoins = async (transactionId, amount, coins, coinId) => {
    try {
      setLoader(true);
      const serverResponse = await communication.purchaseCoins({ transactionId, amount, coins, coinId });
      if (serverResponse?.data?.status === "SUCCESS") {
        dispatch(setCoins(serverResponse?.data?.availableCoins));
        Swal.fire({ text: serverResponse?.data?.message, icon: "success", });
        setLoader(false);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/");
        setLoader(false);
      } else {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
      }
      setLoader(false);
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
      setLoader(false);
    }
  };

  useEffect(() => {
    getCoinList()
  }, []);

  return (
    <>
      {loader ?
        <Loader />
        :
        <div className='tournament_list'>
          <div className='mt-1 coin_pack'>
            <p className='tournament_text'>COINS PACK </p>
            <div className='d-flex justify-content-between mb-3'>
              {coinList?.length > 0 ? (
                <>
                  {coinList.map((coin, index) => (
                    <div className='coin_div' key={index}>
                      <div className="text-center">
                        <Image src={coins} width={60} height={60} alt="coins"></Image>
                      </div>
                      <div className="text-center py-3">
                        <Image src={coin_img} width={30} height={30} alt="coins"></Image><span className='coins_amount'>{coin?.coinsCount}</span>
                      </div>
                      <div className="text-center">
                        <button className='get_coin_btn' onClick={() => payPayment(Razorpay, coin?.rupeesAmt, purchaseCoins, coin.id, coin?.coinsCount)}>&#8377; {coin?.rupeesAmt}</button>
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
      }


    </>
  );
}