import { SET_PRODUCT } from "../Constants"

export const setProduct = (product) => {
    return function(dispatch, getState) {
        dispatch({
            type: SET_PRODUCT,
            payload: product
        })
    }
}