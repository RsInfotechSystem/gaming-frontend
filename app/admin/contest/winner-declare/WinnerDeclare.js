"use client";

import { useState, useEffect } from "react";
import Select from 'react-select';
import { adminCommunication } from '@/services/admin-communication';
import { useRouter, useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import Loader from "@/app/common-component/Loader";

export default function PlayerSearch() {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [winners, setWinners] = useState([]);
    const [players, setPlayers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [contest, setContest] = useState(null);
    const [isMounted, setIsMounted] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    async function getContestWisePlayerList() {
        try {
            setLoader(true);
            const serverResponse = await adminCommunication.getContestWisePlayerList(searchParams.get("contestId"));
            if (serverResponse.data.status === "SUCCESS") {
                setPlayers(serverResponse?.data?.data.map(player => ({ value: player.name, label: player.name })));
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
            } else {
                setPlayers([]);
            }
            setLoader(false);
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
            setLoader(false);
        }
    }

    async function getContestDetails() {
        try {
            setLoader(true);
            const serverResponse = await adminCommunication.getContestDetails(searchParams.get("contestId"));
            if (serverResponse.data.status === "SUCCESS") {
                setContest(serverResponse?.data?.contest);
            } else if (serverResponse?.data?.status === "JWT_INVALID") {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                router.push("/");
            } else {
                Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
            }
        } catch (error) {
            Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
        } finally {
            setLoader(false);
        }
    }
    useEffect(() => {
        setIsMounted(true);
        getContestDetails()
        getContestWisePlayerList();
    }, []);

    // Function to declare the winners
    const handleDeclareWinner = async () => {
        if (selectedPlayers.length > 0) {
            try {
                setLoader(true);
                const payload = {
                    contestId: searchParams.get("contestId"), // Pass contestId in the payload
                    playerId: "ee1ff423-c6b4-4649-b9f1-4ebfb467cf9f"
                    // playerIds: selectedPlayers.map(player => player.label)
                };

                const serverResponse = await adminCommunication.declareWinner(payload);
                if (serverResponse?.data?.status === "SUCCESS") {
                    // setGameWiseContestsList(serverResponse?.data?.contestList);
                    setWinners(selectedPlayers.map(player => player.label)); // Officially set the winners
                } else if (serverResponse?.data?.status === "JWT_INVALID") {
                    Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                    router.push("/");
                } else {
                    Swal.fire({ text: serverResponse?.data?.message, icon: "warning" });
                }
            } catch (error) {
                Swal.fire({ text: error?.response?.data?.message || error?.message, icon: "warning" });
            } finally {
                setLoader(false);
            }
        } else {
            Swal.fire({ text: "Please select at least one winner first!", icon: "warning" });
        }
    };

    return (
        <>
            {loader ?
                <Loader />
                :
                <div style={{ width: "90%", margin: "0px auto" }}>
                    <div className="mt-1 header-container">
                        <p className="tournament_text">{contest?.name ? `${contest?.name}` : `DECLARE WINNERS`}</p>
                        <button type="button" className="btn btn-outline-light back_btn" onClick={() => router.back()}> Back </button>
                    </div>

                    {/* Winner Selection Dropdown & Declare Winner Button (Side by Side) */}
                    <div
                        className="d-flex align-items-center"
                        style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}
                    >
                        {/* Select Box */}
                        {isMounted && (
                            <div className="search-input-container" style={{ width: "80%" }}>
                                <Select
                                    options={players}
                                    isMulti
                                    value={selectedPlayers}
                                    onChange={setSelectedPlayers}
                                    placeholder="Search and Select Winners"
                                    styles={{
                                        multiValue: (styles) => ({
                                            ...styles,
                                            backgroundColor: "#ff3737",
                                            color: "white",
                                            borderRadius: "4px",
                                            padding: "4px 8px",
                                        }),
                                        control: (styles) => ({
                                            ...styles,
                                            padding: "8px",
                                            borderRadius: "4px",
                                            border: "1px solid #ccc",
                                            backgroundColor: "Charcoal",
                                            color: "#FFFFFF",
                                        }),
                                        placeholder: (styles) => ({
                                            ...styles,
                                            color: "#FFFFFF",
                                            fontFamily: "play"
                                        }),
                                    }}
                                />
                            </div>
                        )}
                        {/* Declare Winner Button with Gradient */}
                        <div style={{ width: "20%", textAlign: "right" }}>
                            <button
                                className="add_btn"
                                style={{
                                    width: "100%", minWidth: "120px",
                                    padding: "10px",
                                    background: "linear-gradient(45deg,  #ff1717, #9d04f6)",
                                    color: "#fff",
                                    borderRadius: "5px",
                                    border: "none",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    transition: "all 0.3s ease",
                                }}
                                onClick={() => handleDeclareWinner()}
                            >
                                Declare Winners
                            </button>
                        </div>
                    </div>

                    {/* Show Declared Winners */}
                    {winners.length > 0 && (
                        <div className="winner_declared text-center text-lg font-semibold text-green-700 mt-3">
                            Winners: <span style={{ color: "red" }}>{winners.join(", ")}</span>
                        </div>
                    )}
                </div>
            }
        </>
    );
}
