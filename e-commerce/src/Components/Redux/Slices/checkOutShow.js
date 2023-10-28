import { createSlice } from "@reduxjs/toolkit";

const initialState = {checkOutIsShow: false} 

const checkOutShow = createSlice({
    name: 'CheckOut',
    initialState: initialState,
    
    reducer: {
        checkOutShow(state) {
            state.checkoutIsShow = true;
        },
        checkOutClose(state) {
            state.checkoutIsShow = false;
        }
    }
});

export const checkOutActions = checkOutShow.actions;
export default checkOutShow.reducer;