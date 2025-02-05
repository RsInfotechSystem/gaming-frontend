"use client";
import React, { useState } from 'react'

const RoleList = () => {
    const [roles, setRoles] = useState([
        {
            _id: "1",
            role: "Admin",
            tab: ["Dashboard", "User Management", "Role Management"],
        },
        {
            _id: "1",
            role: "Admin",
            tab: ["Dashboard", "User Management", "Role Management"],
        },
        {
            _id: "1",
            role: "Admin",
            tab: ["Dashboard", "User Management", "Role Management"],
        },
    ])
    const [page, setPage] = useState(1);
    const pageLimit = 20;
    return (
        <>
            <div className="top_header">
                <div className="tab_title">Role Management</div>
                {/* <Pagination
                    isPageUpdated={isPageUpdated}
                    setIsPageUpdated={setIsPageUpdated}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageCount={pageCount}
                /> */}
            </div>
            <div className="search_btn_wrapper">
                {/* <Search value={searchString} onChange={handleSearch} placeholder={"Search"} /> */}
                {
                    // <div className="buttons_wrapper">
                    //     <CustomBtn
                    //         name={"Create"}
                    //         onClick={() => {
                    //             setModalStates((prev) => ({ ...prev, modal: true, type: "create" }));
                    //         }}
                    //         svg={
                    //             <svg
                    //                 width="24"
                    //                 height="24"
                    //                 viewBox="0 0 24 24"
                    //                 fill="none"
                    //                 xmlns="http://www.w3.org/2000/svg"
                    //             >
                    //                 <path
                    //                     d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9V11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                    //                     fill="#F3F8FF"
                    //                 />
                    //                 <path
                    //                     fill-rule="evenodd"
                    //                     clip-rule="evenodd"
                    //                     d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                    //                     fill="#F3F8FF"
                    //                 />
                    //             </svg>
                    //         }
                    //     />
                    //     <CustomBtn
                    //         name={"Delete"}
                    //         // onClick={() => {
                    //         //   setModalStates((prev) => ({ ...prev, modal: true, type: "create" }));
                    //         // }}
                    //         svg={<FontAwesomeIcon icon={faTrash} />}
                    //         onClick={deleteRole}
                    //     />
                    //     {showModal.modal && (
                    //         <CustomResponseHandlerModal
                    //             status="warning"
                    //             // show={showModal}
                    //             message="Are you sure you want to delete this role?"
                    //             successHandler={successHandler}
                    //             cancelHandler={cancelHandler}
                    //         />
                    //     )}
                    // </div>
                }
            </div>
            {/* table  */}
            <div className="table_wrapper">
                <div className="table_main">
                    <div className="table_section">
                        {/* Table Header */}
                        <div className="table_header">
                            <div className="col_10p">
                                <h5>SR No</h5>
                            </div>
                            <div className="col_20p">
                                <h5>Role</h5>
                            </div>
                            <div className="col_60p">
                                <h5>Tab Access</h5>
                            </div>
                            <div className="col_10p">
                                <h5>Action</h5>
                            </div>
                        </div>

                        {/* Table Data */}
                        {roles.length > 0 ? (
                            <>
                                {roles.map((roleDetails, index) => (
                                    <div className="table_data" key={index}>
                                        <div className="col_10p">
                                            <h6>{index + 1}</h6>
                                        </div>
                                        <div className="col_20p">
                                            <h6>{roleDetails?.role}</h6>
                                        </div>
                                        <div className="col_60p">
                                            <h6>{roleDetails?.tab?.join(', ')}</h6>
                                        </div>
                                        <div className="col_10p">
                                            <h6>{roleDetails?.level}</h6>
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
        </>
    )
}

export default RoleList
