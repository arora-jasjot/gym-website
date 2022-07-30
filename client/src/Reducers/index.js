import { combineReducers } from "redux";
import setProduct from "./setProduct";

const rootReducer = combineReducers({
    product: setProduct
});

export default rootReducer;