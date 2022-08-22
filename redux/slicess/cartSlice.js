import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemsCounter: 0,
  total: 0,
  discount: 0,
  checkout: false,
};

//find index of item to increase and decrease the item's quantity
const findIndexOfItem = (state, action) => state.cartItems.findIndex((item) => item.id === action.payload?.id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.itemsCounter += 1;
      state.total += action.payload.price.selling_price;
    },
    removeItem: (state, action) => {
      const newItems = state.cartItems.filter(
        (item) => item.id !== action.payload?.id
      );
      state.cartItems = [...newItems];
      state.itemsCounter -= 1;
      state.total -= action.payload.price.selling_price;
    },
    increase: (state, action) => {
      const indexItem = findIndexOfItem(state, action);
      state.cartItems = state.cartItems.map((item, index) =>
        index === indexItem ? { ...item, quantity: item.quantity + 1 } : item
      );
      state.itemsCounter += 1;
      state.total += action.payload.price.selling_price;
    },
    decrease: (state, action) => {
      const indexItem = findIndexOfItem(state, action);
      state.cartItems = state.cartItems.map((item, index) =>
        index === indexItem ? { ...item, quantity: item.quantity - 1 } : item
      );
      state.itemsCounter -= 1;
      state.total -= action.payload.price.selling_price;
    },
    clearCart: (state) => {
      return {
        cartItems: [],
        itemsCounter: 0,
        total: 0,
        discount: 0,
        checkout: false,
      };
    },
    setCheckout: (state) => {
      state.checkout = true;
    },
    setDiscount: (state, action) => {
      state.discount = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  increase,
  decrease,
  clearCart,
  setCheckout,
  setDiscount,
} = cartSlice.actions;
