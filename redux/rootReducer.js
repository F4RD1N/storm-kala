import { combineReducers } from "redux";

//reducers
import productReducer from './product/productReducer'
import homeReducer from './home/homeReducer'

const rootReducer = combineReducers({
    productState: productReducer,
    homeState: homeReducer
})

export default rootReducer