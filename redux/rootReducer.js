import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web

//Slice Reducers
import {
  homeReducer,
  productReducer,
  categoryReducer,
  searchReducer,
  cartReducer,
  mainReducer
} from './slices'

//Persist Config
const persistConfig = {
  timeout: 2000,
  key: "cart",
  storage,
};
const persistedCart = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  productState: productReducer,
  homeState: homeReducer,
  searchState: searchReducer,
  cartState: persistedCart,
  categoryState: categoryReducer,
  mainState: mainReducer,
});

export default rootReducer;
