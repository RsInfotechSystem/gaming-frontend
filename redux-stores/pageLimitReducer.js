import { createSlice } from "@reduxjs/toolkit";

const limitReducer = createSlice({
    name: "pageLimitSlice",
    initialState: {
        limit: 20
    },
})

export default limitReducer.reducer;