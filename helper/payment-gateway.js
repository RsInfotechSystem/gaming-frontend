
import { getUserDetails } from "@/utilities/get-user-details-from-cokies";
import Swal from "sweetalert2";

const razorPayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
export const payPayment = async (Razorpay, amount = 1, afterPayment, coinId, coins) => {
    try {
        const userDetails = getUserDetails([]);
        const convertedAmount = Number(amount) === 0 ? 1 * 100 : Number(amount) * 100;
        const options = {
            key: razorPayKey,
            amount: convertedAmount,
            currency: 'INR',
            name: 'PlayZone',
            description: `Transaction for Purchase the Game Coins`,
            // image: "images/logo/logo.png",
            prefill: {
                email: userDetails?.email ?? "",
                contact: userDetails?.mobile || "",
                name: userDetails?.name || "",
                service: `coin purchase` ?? ""
            },
            theme: { color: '#2962FF' },
            handler: async function (data) {
                try {
                    if (data.razorpay_payment_id) {
                        afterPayment(data.razorpay_payment_id, amount, coins, coinId)
                    }
                } catch (error) {
                    Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
                }
            },
        };
        const razorpay = new Razorpay(options);
        const response = await razorpay.open();

    } catch (error) {
        Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning" });
    }
};
