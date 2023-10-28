import { configureStore } from "@reduxjs/toolkit";
import cartShowReducer from './Slices/cartShow';
import cartProducts from './Slices/cartSlice';
import fetchReducer from "./Slices/fetchApi";
import checkOutReducer from './Slices/checkOutShow';

export const store = configureStore({
   reducer: {
     showCart: cartShowReducer,
     productsCart: cartProducts,
     fetchApi: fetchReducer,
     showCheckOut: checkOutReducer,
   }
   
})