import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web

//Slice Reducers
import {
  homeSlice,
  productSlice,
  categorySlice,
  searchSlice,
  cartSlice,
  mainSlice
} from './Slices'

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
