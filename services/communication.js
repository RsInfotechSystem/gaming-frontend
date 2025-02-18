import axios from "axios";
import { getCookie, getCookies } from "cookies-next";
import Swal from "sweetalert2";

const nodeEnvironment = process.env.NEXT_PUBLIC_NODE_ENV;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const tokenName = process.env.NEXT_PUBLIC_TOKENNAME;

export function getServerUrl() {
    if (nodeEnvironment === "development") {
        return serverUrl;
    }

    if (nodeEnvironment === "machine_IP") {
        return serverUrl;
    }

    if (nodeEnvironment === "server") {
        return serverUrl;
    }

    return serverUrl;
}

export const communication = {
    login: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/player/login-player`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            Swal.fire({ text: error?.message, icon: "warning" });
        }
    },

    createPlayer: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/player/create-player`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${getCookies("GAMING")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error?.message, icon: "warning" });
        }
    },
    forgetPassword: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/player/forget-password`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${getCookies("GAMING")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error?.message, icon: "warning" });
        }
    },
    resetPassword: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/player/reset-player-password`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${getCookies("GAMING")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error?.message, icon: "warning" });
        }
    },

    //game list tab api`s
    getContestList: async () => {
        try {
            return await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/contest/get-contest-list`, {}, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("GAMING")}`,
                },
            });
        } catch (error) {
            throw error;
        }
    },
    getGameDetails: async function (gameId) {
        try {
            return axios.post(
                `${getServerUrl()}/game/get-game-by-id`,
                { gameId },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getCookie("GAMING")}`,
                    },
                }
            );
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },

    getGamesList: async (page = 1, searchString) => {
        try {
            return await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/game/get-game-list`, { page, searchString }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("GAMING")}`,
                },
            });
        } catch (error) {
            throw error;
        }
    },
    getCoinList: async (page = 1, searchString) => {
        try {
            return await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/coin/get-coin-list-for-user`, { page, searchString }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("GAMING")}`,
                },
            });
        } catch (error) {
            throw error;
        }
    },
    getJoinedContestList: async (page = 1, searchString) => {
        try {
            return await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/contest/get-joined-contest-list`, { page, searchString }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("GAMING")}`,
                },
            });
        } catch (error) {
            throw error;
        }
    },
    getProfileDetails: async function (id) {
        try {
            return axios.post(
                `${getServerUrl()}/player/get-player-by-id`,
                { id },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getCookie("GAMING")}`,
                    },
                }
            );
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },

    getGameWiseContestList: async function (id, page = 1, searchString) {
        try {
            return axios.post(
                `${getServerUrl()}/contest/get-game-wise-contest-list`,
                { gameId: id, page, searchString },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getCookie("GAMING")}`,
                    },
                }
            );
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    purchaseCoins: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/coin/purchase-coins`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getCookie("GAMING")}`,
                },
            }
            );
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    getPlayerDetails: async function () {
        try {
            return axios.get(`${getServerUrl()}/coin/get-player-coins`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getCookie("GAMING")}`,
                },
            }
            );
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    joinContest: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/contest/join-contest`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getCookie("GAMING")}`,
                },
            }
            );
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
}