import { SET_PRODUCT } from "../Constants";

const setProduct = (product = null, action) => {
    if (action.type === SET_PRODUCT) {
        return action.payload;
    }
    return product;
}

export default setProduct;