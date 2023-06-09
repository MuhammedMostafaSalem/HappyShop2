import {CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE} from '../type';

const initail = {
    product: [],
    allProduct: [],
    oneProduct: [],
    productLike: [],
    loading: true,
}

const ProductReducer = (state=initail, action) => {
    switch(action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCT:
            return {
                ...state,
                allProduct: action.payload,
                loading: false,
            }
        case GET_PRODUCT_DETAILS:
            return {
                oneProduct: action.payload,
                loading: false,
            }
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                product: action.payload,
                loading: true,
            }
        default: 
            return state;
    }
}

export default ProductReducer
