import { combineReducers } from "redux";
import { persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web

//reducers
import productReducer from "./product/productReducer";
import homeSlice from "./Slices/homeSlice";

import searchReducer from "./search/searchReducer";
import cartReducer from "./cart/cartReducer";
import categoryReducer from "./category/categoryReducer";
import configReducer from "./config/configReducer";
const persistConfig = {
  timeout: 2000,
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  productState: productReducer,
  homeState: homeSlice,
  searchState: searchReducer,
  cartState: persistedReducer,
  categoryState: categoryReducer,
  configState: configReducer,
});

export default rootReducer;
