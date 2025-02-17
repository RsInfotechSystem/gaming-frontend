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
    const [roles, setRoles] = useState([]);
    const [loader, setLoader] = useState(false);
    const [searchString, setSearchString] = useState("");
    const [modalStates, setModalStates] = useState({ type: "", modal: false, userId: "" })
    const [paginationData, setPaginationData] = useState({
        currentPage: 1,
        isPageUpdated: false,
        totalPages: 1,
        page: 1
    });
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const router = useRouter();

    async function getRoleList(page = 1, searchString = "") {
        try {
            setLoader(true);
            const serverResponse = await adminCommunication.getRoleList(page, searchString);
            if (serverResponse.data.status === "SUCCESS") {
                setRoles(serverResponse?.data?.roles);
                setPaginationData(pre => ({
                    ...pre, totalPages: serverResponse?.data?.totalPages,
                    page: page,
                    currentPage: page,
                }))
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/login");
            } else {
                setRoles([]);
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

    const handleSelectAllChange = (e) => {
        setSelectAllChecked(e.target.checked);
        // Check if there are any roles available
        if (selectedCheckboxes.length <= 0) {
            setSelectedCheckboxes([]);
        } else {
            // Update the array of selected checkboxes based on the "Select All" checkbox
            setSelectedCheckboxes((prevSelected) =>
                e.target.checked ? roles.map((brandDetails) => brandDetails._id) : []
            );
        }
    };

    const handleCheckboxChange = (e) => {
        const checkboxId = e.target.id;
        setSelectAllChecked((!selectedCheckboxes.includes(checkboxId) && (selectedCheckboxes.length + 1 === roles?.length)))
        setSelectedCheckboxes((prevSelected) => {
            if (prevSelected.includes(checkboxId)) {
                // If the checkbox is already in the array, remove it
                return prevSelected.filter((id) => id !== checkboxId);
            } else {
                // If the checkbox is not in the array, add it
                return [...prevSelected, checkboxId];
            }
        });
    };

    useEffect(() => {
        getRoleList(paginationData.currentPage, searchString);
    }, [paginationData.isPageUpdated]);

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
                        <CustomSearchBox searchString={searchString} setSearchString={setSearchString} apiCall={getRoleList} />
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
                                        <div className="col_5p">
                                            <div className="check_box">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="selectAllCheckbox"
                                                    onChange={(e) => handleSelectAllChange(e)}
                                                    checked={selectAllChecked}
                                                />
                                                <label className="form-check-label"></label>
                                            </div>
                                        </div>
                                        <div className="col_10p"><h5>Sr. No</h5></div>
                                        <div className="col_15p"><h5>Role Type</h5></div>
                                        <div className="col_35p"><h5>Tab Access</h5></div>
                                        <div className="col_10p"><h5>Action</h5></div>
                                    </div>
                                    {roles?.length > 0 ? (
                                        <>
                                            {roles.map((roleDetails, index) => (
                                                <div className="table_data fontfam_play" key={index}>
                                                    <div className="col_5p">
                                                        <div className="check_box">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id={roleDetails?._id}
                                                                onChange={(e) => handleCheckboxChange(e)}
                                                                checked={selectedCheckboxes.includes(roleDetails?._id)}
                                                            />
                                                            <label className="form-check-label"></label>
                                                        </div>
                                                    </div>
                                                    <div className="col_10p"><h6>{((Number(pageLimit) * (paginationData.page - 1))) + (index + 1)}</h6></div>
                                                    <div className="col_15p"><h6>{roleDetails?.name}</h6></div>
                                                    <div className="col_35p"><h6> {roleDetails?.tab?.join(', ')}</h6></div>
                                                    <div className="col_10p">
                                                        <div className="action">
                                                            <FontAwesomeIcon icon={faPenToSquare} className="edit_icon" />
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


                </div>
            }
            {modalStates?.modal && <CreateRole setModalStates={setModalStates} type={modalStates?.type} userId={modalStates?.userId ?? ""} />}
        </>
    )
}

export default RoleList
