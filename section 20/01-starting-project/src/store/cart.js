import { createSlice } from "@reduxjs/toolkit";

const { v4: uuidv4 } = require("uuid");
const initialCartState = { products: [], showCart: false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addProduct(state, action) {
      const { description, price, title } = action.payload;
      state.products.push({
        id: uuidv4(),
        title,
        description,
        price,
      });
    },
    removeProduct(state, action) {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
