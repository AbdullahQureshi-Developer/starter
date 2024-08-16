// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from 'redux';
import cartReducer from './features/cart/cartSlice';
// import './features/cart/cartSlice';
export const store = createStore(cartReducer);

// export const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//         // modal:"",
//     },
// }); 
// export default store;