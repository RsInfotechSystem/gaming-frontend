import axios from "axios";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

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
            return axios.post(`${getServerUrl()}/user/login`, dataToSend, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            toast.error(error.message);
        }
    },

}