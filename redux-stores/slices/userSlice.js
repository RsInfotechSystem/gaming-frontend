import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "cookies-next";

const initialState = {
    user: null,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
        },
    },
});

export const { setUser, setError, logout } = userSlice.actions;
export default userSlice.reducer;
