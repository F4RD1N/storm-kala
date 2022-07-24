import { combineReducers } from "redux";

//reducers
import productReducer from './product/productReducer'
const rootReducer = combineReducers({
    productState: productReducer
})

export default rootReducer