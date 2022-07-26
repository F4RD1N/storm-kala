import { combineReducers } from "redux";

//reducers
import productReducer from './product/productReducer'
import homeReducer from './home/homeReducer'
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
    productState: productReducer,
    homeState: homeReducer,
    searchState: searchReducer
})

export default rootReducer