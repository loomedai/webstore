import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import CartReducer from '../features/counter/CartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: CartReducer
  },
});
