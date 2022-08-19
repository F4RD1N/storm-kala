import { combineReducers } from "redux";
import { persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web

//reducers
import homeSlice from "./Slices/homeSlice";
import productSlice from "./Slices/productSlice";
import categorySlice from "./Slices/categorySlice";

import searchReducer from "./search/searchReducer";
import cartReducer from "./cart/cartReducer";
import configReducer from "./config/configReducer";
const persistConfig = {
  timeout: 2000,
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  productState: productSlice,
  homeState: homeSlice,
  searchState: searchReducer,
  cartState: persistedReducer,
  categoryState: categorySlice,
  configState: configReducer,
});

export default rootReducer;
