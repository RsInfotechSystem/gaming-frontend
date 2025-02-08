import axios from "axios";
import { getCookies } from "cookies-next";
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
            console.log("dataToSend : ", dataToSend)
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
}