// import { createSlice } from '@reduxjs/toolkit'
// Action Types
const START = 'stopwatch/start';
const STOP = 'stopwatch/stop';
const RESET = 'stopwatch/reset';
const TICK = 'stopwatch/tick';

// Action Creators
export const start = () => ({ type: START });
export const stop = () => ({ type: STOP });
export const reset = () => ({ type: RESET });
export const tick = () => ({ type: TICK });

// Initial State
const initialState = {
  running: false,
  time: 0,
};

// Reducer
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return { ...state, running: true };
    case STOP:
      return { ...state, running: false };
    case RESET:
      return { ...state, time: 0 };
    case TICK:
      return state.running ? { ...state, time: state.time + 1 } : state;
    default:
      return state;
  }
}

// const initialState = {
//   cartItems: [],
//   amount: 10,
//   total: 0,
//   isLoading: true,
// }

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     setTotal: (state, action) => {
//       state.total = action.payload
//     },
//   },
// })
// console.log(cartSlice);

// export const { setTotal } = cartSlice.actions
// export default cartSlice.reducer
