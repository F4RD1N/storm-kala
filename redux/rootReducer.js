import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web

//reducers
import homeSlice from "./Slices/homeSlice";
import productSlice from "./Slices/productSlice";
import categorySlice from "./Slices/categorySlice";
import searchSlice from "./Slices/searchSlice";
import cartSlice from "./Slices/cartSlice";
import mainSlice from "./Slices/mainSlice";

//Persist Config
const persistConfig = {
  timeout: 2000,
  key: "cart",
  storage,
};
const persistedCart = persistReducer(persistConfig, cartSlice);

const rootReducer = combineReducers({
  productState: productSlice,
  homeState: homeSlice,
  searchState: searchSlice,
  cartState: persistedCart,
  categoryState: categorySlice,
  mainState: mainSlice,
});

export default rootReducer;
