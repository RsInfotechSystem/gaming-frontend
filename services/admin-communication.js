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
}