"use client"
import { adminCommunication } from '@/services/admin-communication';
import React, { useEffect, useState } from 'react'
import network from '../../../public/dashboard/network.png';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Loader from '@/app/common-component/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import CustomSearchBox from '@/app/common-component/CustomSearchBox';
import CreateUser from './CreateUser';
const pageLimit = process.env.NEXT_PUBLIC_LIMIT ?? 20;


const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [modalStates, setModalStates] = useState({ type: "", modal: false, userId: "" })
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    isPageUpdated: false,
    totalPages: 1,
    page: 1
  });
  const router = useRouter();
  async function getUserList(page = 1, searchString = "") {
    try {
      setLoader(true);
      const serverResponse = await adminCommunication.getUserList(page, searchString);
      if (serverResponse.data.status === "SUCCESS") {
        setUsers(serverResponse?.data?.users);
        setPaginationData(pre => ({
          ...pre, totalPages: serverResponse?.data?.totalPages,
          page: page,
          currentPage: page,
        }))
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
        router.push("/login");
      } else {
        setUsers([]);
        setPaginationData(pre => ({
          ...pre, totalPages: 0,
        }))
      }
      setLoader(false)
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
      setLoader(false)
    }
  }
  async function deleteUser(userId) {
    try {

      Swal.fire({
        text: "Are you sure ,you want to Delete the user?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then(async function (result) {
        if (result.isConfirmed) {
          try {
            setLoader(true);
            const serverResponse = await adminCommunication.deleteUser([userId]);
            if (serverResponse.data.status === "SUCCESS") {
              Swal.fire({ text: serverResponse?.data?.message, icon: "success" });
              getUserList(1, "")
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
  async function chnageUserStatus(userId) {
    try {

      Swal.fire({
        text: "Are you sure ,you want to Change the User Status?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then(async function (result) {
        if (result.isConfirmed) {
          try {
            setLoader(true);
            const serverResponse = await adminCommunication.chnageUserStatus(userId);
            if (serverResponse.data.status === "SUCCESS") {
              Swal.fire({ text: serverResponse?.data?.message, icon: "success" });
              getUserList(1, "")
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
    getUserList(paginationData.currentPage, searchString);
  }, [paginationData.isPageUpdated]);

  return (
    <>
      {loader === true ?
        <Loader />
        :
        <div style={{ width: "90%", margin: "0px auto" }}>

          <div className="mt-1">
            <p className="tournament_text">
              User Management{" "}
              <Image className="me-2" width={25} height={20} src={network} alt="network" />
            </p>
          </div>
          <div className='nav_search'>
            <CustomSearchBox searchString={searchString} setSearchString={setSearchString} apiCall={getUserList} />
            <div className="add_btn_main">
              <button className='add_btn' onClick={() => setModalStates({ userId: "", type: "create", modal: true })}>Add</button>
            </div>
          </div>


          {/* table  */}
          <div className="table_wrapper">
            {/* <div className="table_main"> */}
              {/* Scrollable container */}
              <div className="table_scroll">
                <div className="table_section">
                  <div className="table_header fontfam_play">
                    <div className="col_10p"><h5>SR No</h5></div>
                    <div className="col_20p"><h5>Name</h5></div>
                    <div className="col_30p"><h5>Email</h5></div>
                    
                    <div className="col_10p"><h5>Mobile</h5></div>
                    <div className="col_15p"><h5>Role</h5></div>
              
                    <div className="col_15p"><h5>Action</h5></div>
                  </div>
                  {users?.length > 0 ? (
                    <>
                      {users.map((userDetails, index) => (
                        <div className="table_data fontfam_play" key={index}>
                          <div className="col_10p"><h6>{((Number(pageLimit) * (paginationData.page - 1))) + (index + 1)}</h6></div>
                          <div className="col_20p"><h6 className='text-capitalize'>{userDetails?.name}</h6></div>
                          <div className="col_30p"><h6>{userDetails?.email}</h6></div>
                         
                          <div className="col_10p"><h6>{userDetails?.mobile}</h6></div>
                          <div className="col_15p"><h6 className='text-capitalize'>{userDetails?.role?.name}</h6></div>
                    
                          <div className="col_15p">
                            <div className="action">
                              <FontAwesomeIcon icon={faPenToSquare} title='update user' onClick={() => setModalStates({ type: "update", modal: true, userId: userDetails?.id })} className="edit_icon" />
                              <div className="form-switch">
                                <input
                                  className="form-check-input cursor-pointer"
                                  type="checkbox"
                                  onChange={() => chnageUserStatus(userDetails?.id)}
                                  checked={userDetails?.isActive || false}
                                />
                              </div>
                              <FontAwesomeIcon icon={faTrash} title='delete user' onClick={() => deleteUser(userDetails?.id)} className="edit_icon" />
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
            {/* </div> */}
          </div>


        </div>
      }
      {modalStates?.modal && <CreateUser setModalStates={setModalStates} type={modalStates?.type} userId={modalStates?.userId ?? ""} getUserList={getUserList} />}
    </>
  )
}

export default UserManagement
