import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartIsShow: false};

const cartShow = createSlice({
    name: 'Cart',
    initialState: initialState,
    reducers: {
        show(state) {
            state.cartIsShow = true;
        },
        close(state) {
            state.cartIsShow = false;
        }
    }
})

export const cartActions = cartShow.actions;
export default cartShow.reducer;