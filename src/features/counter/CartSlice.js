import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action) {
        const item = action.payload;
        const existingItemIndex = state.cartItems.findIndex(cocktail => cocktail.idDrink === item.idDrink);
        
        if (existingItemIndex >= 0) {
          state.cartItems[existingItemIndex].cartQuantity += 1;
        } else {
          const newItem = {...item, cartQuantity: 1};
          state.cartItems.push(newItem);
        }
      }
    }
  });
  

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;