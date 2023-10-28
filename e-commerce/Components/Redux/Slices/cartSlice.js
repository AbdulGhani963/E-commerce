import { createSlice } from "@reduxjs/toolkit";

const initialState = {totalAmount: 0, items: []}

const products = createSlice({
    name: 'cartProducts',
    initialState: initialState,
    reducers: {
        // menItem(state, actions) {
        //    state.menPrice = state.menPrice + actions.payload.price
        // },
        // womenItem(state,actions) {
        //    state.womenPrice = state.womenPrice + actions.payload.price
        // },
        // jeweleryItem(state,actions) {
        //     state.jeweleryPrice = state.jeweleryPrice + actions.payload.price
        //  },

        // addItem(state, actions) {
        //     if(actions.payload.category === state.category[0]) {
        //         state.menPrice = state.menPrice + actions.payload.price
        //     } else if(actions.payload.category === state.category[1]) {
        //         state.womenPrice = state.womenPrice + actions.payload.price
        //     } else if(actions.payload.category === state.category[2]) {
        //         state.jeweleryPrice = state.jeweleryPrice + actions.payload.price
        //     }
        // },
        // totalItem(state, actions) {
        //     state.cartProducts = state.cartProducts + actions.payload.price
        // }
        addItem: (state,action)=> {
            const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
            const existingCartItems = state.items.find(item => item.id === action.payload.id)

            if(existingCartItems) {
               existingCartItems.amount += action.payload.amount;
            } else {
                state.items.push(action.payload);
            }
            state.totalAmount = updatedTotalAmount;
        },
        removeItem: (state,action) => {
          const existingCartItems = state.items.find(item => item.id === action.payload)
          if(!existingCartItems) {
            return;
          }

          if(existingCartItems.amount === 1) {
            state.items = state.items.filter(item => item.id !== action.payload)
          } else {
            existingCartItems.amount --;
          }
            state.totalAmount -= existingCartItems.price;
        }
    }
})
export const cartProductsActions = products.actions; 
export default products.reducer;