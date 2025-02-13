import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    coins: 0,
};

const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setCoins: (state, action) => {
            state.coins = action.payload;
        },
        addCoins: (state, action) => {
            state.coins += action.payload;
        },
        subtractCoins: (state, action) => {
            state.coins = Math.max(0, state.coins - action.payload);
        },
        resetCoins: (state) => {
            state.coins = 0;
        },
    },
});

// Export the actions
export const { setCoins, addCoins, subtractCoins, resetCoins } = coinSlice.actions;

// Export the reducer
export default coinSlice.reducer;

