import { combineReducers } from "redux";
import { persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web

//reducers
import productReducer from "./product/productReducer";
import homeReducer from "./home/homeReducer";
import searchReducer from "./search/searchReducer";
import cartReducer from "./cart/cartReducer";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  productState: productReducer,
  homeState: homeReducer,
  searchState: searchReducer,
  cartState: persistedReducer,
});

export default rootReducer;
