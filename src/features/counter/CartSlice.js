import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
                
            const cocktailIndex = state.cartItems.findIndex( cocktail => cocktail.idDrink === action.payload.id)

            if(cocktailIndex >= 0){
                state.cartItems[cocktailIndex].cartQuantity += 1
            } else{
            const tempCocktail = { ...action.payload, cartQuantity: 1};
            state.cartItems.push(tempCocktail);
        }},
    },

});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;