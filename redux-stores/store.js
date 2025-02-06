import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // Import your slice
import loader from "./loaderReducer.js";
import limitReducer from "./pageLimitReducer.js";

export const store = configureStore({
    reducer: {
        loader: loader,
        user: userReducer,
        limit: limitReducer,
    },
});