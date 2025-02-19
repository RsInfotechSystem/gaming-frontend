"use client"
import React, { useEffect, useState } from 'react';
import network from '../../../public/dashboard/network.png';
import bgmi_game from '../../../public/dashboard/bgmi_game.jpeg';
import cod_game from '../../../public/dashboard/cod_game.jpeg';
import freefire_game from '../../../public/dashboard/freefire_game_rd.png';
import Image from 'next/image';
import coin_img from '../../../public/dashboard/coin_img.png';
import coins from '../../../public/dashboard/coin_new.png';
import CreateCoins from './CreateCoins';
import { useRouter } from 'next/navigation';
import { adminCommunication } from '@/services/admin-communication';
import Loader from '@/app/common-component/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import CustomSearchBox from '@/app/common-component/CustomSearchBox';


const BuyCoinsAdmin = () => {
  const [coinsArray, setCoinsArray] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [paginationData, setPaginationData] = useState({
      currentPage: 1,
      isPageUpdated: false,
      totalPages: 1,
      page: 1
  });
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

    async function deleteCoin(coinIds) {
          try {
  
              Swal.fire({
                  text: "Are you sure ,you want to Delete the Game?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonText: "Yes",
                  cancelButtonText: "No",
              }).then(async function (result) {
                  if (result.isConfirmed) {
                      try {
                          setLoader(true);
                          const serverResponse = await adminCommunication.deleteCoin([coinIds]);
                          if (serverResponse.data.status === "SUCCESS") {
                              Swal.fire({ text: serverResponse?.data?.message, icon: "success" });
                              getCoinsList(1, "")
                          } else if (serverResponse?.data?.status === "JWT_INVALID") {
                              Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                              router.push("/login");
                          } else {
                              Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                          }
                          setLoader(false)
                      } catch (error) {
                          Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
                          setLoader(false)
                      }
  
                  } else {
                      return;
                  }
              });
  
              setLoader(false)
          } catch (error) {
              Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
              setLoader(false)
          }
      }

  useEffect(() => {
    getCoinsList(paginationData.currentPage, searchString);
  }, [paginationData.isPageUpdated]);

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
            <CustomSearchBox searchString={searchString} setSearchString={setSearchString} apiCall={getCoinsList} />
            <div className="add_btn_main">
              <button className='add_btn' onClick={() => setModalStates({ coinId: "", type: "create", modal: true })}>Add</button>
            </div>
          </div>


          <div className='container mt-4'>
            <div className='row mb-3'>
              {coinsArray?.map((ele, index) => {
                return (
                  <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4' key={index}>
                  <div className='coin_div'>
                       {/* <FontAwesomeIcon icon={faEdit} className="edit_icon delete_btn me-4" /> */}
                       <FontAwesomeIcon icon={faPenToSquare} title='update user' onClick={() => setModalStates({ type: "update", modal: true, coinId: ele?.id })} className="edit_icon delete_btn me-4" />
                       <FontAwesomeIcon icon={faTrashCan} className="edit_icon delete_btn" onClick={() => deleteCoin(ele.id)}/>
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
