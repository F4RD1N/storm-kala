import { combineReducers } from "redux";

//reducers
import productReducer from './product/productReducer'
import homeReducer from './home/homeReducer'
import searchReducer from "./search/searchReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    productState: productReducer,
    homeState: homeReducer,
    searchState: searchReducer,
    cartState: cartReducer
})

export default rootReducer