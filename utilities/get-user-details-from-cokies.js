const { getCookie, hasCookie } = require("cookies-next");

export function getUserDetails(router = []) {
    try {
        if (hasCookie("gamingUserDetails")) {
            const cookies = getCookie("gamingUserDetails");
            return JSON.parse(cookies);
        } else {
            router.push("/")
            return {}
        }
    } catch (error) {
        throw error;
    }
}
