"use client";

import { useState, useEffect } from "react";
import Select from "react-select";
import { adminCommunication } from '@/services/admin-communication';
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import Loader from "@/app/common-component/Loader";

export default function PlayerSearch() {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [winner, setWinner] = useState(null);
    const [players, setPlayers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [isMounted, setIsMounted] = useState(false);  // NEW state to track mounting
    const searchParams = useSearchParams();

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

    useEffect(() => {
        setIsMounted(true);  // Set the component as mounted
        getContestWisePlayerList();
    }, []);

    return (
        <>
            {loader === true ? (
                <Loader />
            ) : (
                <div className="p-6 max-w-lg mx-auto bg-gray-100 rounded-xl shadow-md space-y-4">
                    <h1 className="text-2xl font-bold text-center">Declare Winner</h1>

                    {/* Render Select only after mounting to prevent hydration mismatch */}
                    {isMounted && (
                        <Select
                            options={players}
                            isMulti
                            value={selectedPlayers}
                            onChange={setSelectedPlayers}
                            placeholder="Search & Select Players"
                            styles={{
                                multiValue: (styles) => ({
                                    ...styles,
                                    backgroundColor: "#184965",
                                    color: "#fff",
                                    borderRadius: "4px",
                                    padding: "4px 8px",
                                }),
                                control: (styles) => ({
                                    ...styles,
                                    padding: "8px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                }),
                            }}
                        />
                    )}

                    <button
                        onClick={() => setWinner(selectedPlayers?.map(player => player.label).join(", "))}
                        disabled={selectedPlayers.length === 0}
                        className="w-full bg-green-500 text-white py-2 rounded-lg disabled:bg-gray-400"
                    >
                        Declare Winner
                    </button>

                    {winner && (
                        <div className="text-center text-lg font-semibold text-green-700">
                            Winner: {winner}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
