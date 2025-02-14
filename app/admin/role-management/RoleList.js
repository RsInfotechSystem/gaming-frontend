"use client"
import { adminCommunication } from '@/services/admin-communication';
import React, { useEffect, useState } from 'react'
import network from '../../../public/dashboard/network.png';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Loader from '@/app/common-component/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import CustomSearchBox from '@/app/common-component/CustomSearchBox';
import CreateRole from './CreateRole';
const pageLimit = process.env.NEXT_PUBLIC_LIMIT ?? 20;


const RoleList = () => {
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [searchString, setSearchString] = useState("");
    const [modalStates, setModalStates] = useState({ type: "", modal: false, userId: "" })
    //   const [paginationData, setPaginationData] = useState({
    //     currentPage: 1,
    //     isPageUpdated: false,
    //     totalPages: 1,
    //     page: 1
    //   });
    //   const router = useRouter();
    //   async function getUserList(page = 1, searchString = "") {
    //     try {
    //       setLoader(true);
    //       const serverResponse = await adminCommunication.getUserList(page, searchString);
    //       if (serverResponse.data.status === "SUCCESS") {
    //         setUsers(serverResponse?.data?.users);
    //         setPaginationData(pre => ({
    //           ...pre, totalPages: serverResponse?.data?.totalPages,
    //           page: page,
    //           currentPage: page,
    //         }))
    //       } else if (serverResponse?.data?.status === "JWT_INVALID") {
    //         Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
    //         router.push("/login");
    //       } else {
    //         setUsers([]);
    //         setPaginationData(pre => ({
    //           ...pre, totalPages: 0,
    //         }))
    //       }
    //       setLoader(false)
    //     } catch (error) {
    //       Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
    //       setLoader(false)
    //     }
    //   }

    //   useEffect(() => {
    //     getUserList(paginationData.currentPage, searchString);
    //   }, [paginationData.isPageUpdated]);

    return (
        <>
            {loader === true ?
                <Loader />
                :
                <div style={{ width: "90%", margin: "0px auto" }}>

                    <div className="mt-1">
                        <p className="tournament_text">
                            Role Management{" "}
                            <Image className="me-2" width={25} height={20} src={network} alt="network" />
                        </p>
                    </div>
                    <div className='nav_search'>
                        <CustomSearchBox />
                        <div className="add_btn_main">
                            <button className='add_btn' onClick={() => setModalStates({ userId: "", type: "create", modal: true })}>Add</button>
                        </div>
                    </div>


                    {/* table  */}
                    <div className="table_wrapper">
                        <div className="table_main">
                            {/* Scrollable container */}
                            <div className="table_scroll">
                                <div className="table_section">
                                    <div className="table_header fontfam_play">
                                        <div className="col_10p"><h5>SR No</h5></div>
                                        <div className="col_15p"><h5>Name</h5></div>
                                        <div className="col_25p"><h5>Email</h5></div>
                                        <div className="col_10p"><h5>Mobile</h5></div>
                                        <div className="col_15p"><h5>Role</h5></div>
                                        <div className="col_15p"><h5>Action</h5></div>
                                    </div>

                                    <div className="table_data fontfam_play">
                                        <div className="col_10p"><h6>1</h6></div>
                                        <div className="col_15p"><h6>name</h6></div>
                                        <div className="col_25p"><h6>email</h6></div>
                                        <div className="col_10p"><h6>mobile</h6></div>
                                        <div className="col_15p"><h6>rolename</h6></div>
                                        <div className="col_15p">
                                            <div className="action">
                                                <FontAwesomeIcon icon={faPenToSquare} className="edit_icon" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            }
            {modalStates?.modal && <CreateRole setModalStates={setModalStates} type={modalStates?.type} userId={modalStates?.userId ?? ""} />}
        </>
    )
}

export default RoleList
