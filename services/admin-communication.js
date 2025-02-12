import axios from "axios";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";

const nodeEnvironment = process.env.NEXT_PUBLIC_NODE_ENV;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


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

export const adminCommunication = {
    login: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/user/login`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    //?----------------- User management--------------------
    createUser: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/user/create-user`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    updateUser: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/user/update-user`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    getUserList: async function (page = 1, searchString) {
        try {
            return axios.post(`${getServerUrl()}/user/get-user-list`, { page, searchString, }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    getUserById: async function (userId) {
        try {
            return axios.post(`${getServerUrl()}/user/get-user-by-id`, { userId }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    //----------------Role Manegement------------------------------
    getActiveRoles: async function () {
        try {
            return axios.get(`${getServerUrl()}/role/get-active-role`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },

    //----------------------------Player Manegement------------------------
    getPlayerList: async function (page = 1, searchString) {
        try {
            return axios.post(`${getServerUrl()}/player/get-player-list`, { page, searchString, }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },

    //--------------------------Coins Management---------------------------
    createCoins: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/coin/create-coin`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    updateCoins: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/coin/update-coin`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    getCoinById: async function (coinId) {
        try {
            return axios.post(`${getServerUrl()}/coin/get-coin-by-id`, { coinId }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    getCoinsList: async function () {
        try {
            return axios.post(`${getServerUrl()}/coin/get-coin-list`, {}, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    //?----------------Game Tab APIs-----------------------------------------------------------------------------------------------------
    createGame: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/game/create-game`, dataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    updateGame: async function (dataToSend) {
        try {
            return axios.post(`${getServerUrl()}/game/update-game`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    getGameById: async function (gameId) {
        try {
            return axios.post(`${getServerUrl()}/game/get-game-by-id`, { gameId }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    getGameList: async function (page = 1, searchString) {
        try {
            return axios.post(`${getServerUrl()}/game/get-game-list`, { page, searchString, }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },
    deleteGame: async function (gameIds) {
        try {
            return axios.post(`${getServerUrl()}/game/delete-game`, { gameIds }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${getCookie("rsisGamingAdmin")}`
                },
            });
        } catch (error) {
            Swal.fire({ text: error.message, icon: "warning" });
        }
    },

}