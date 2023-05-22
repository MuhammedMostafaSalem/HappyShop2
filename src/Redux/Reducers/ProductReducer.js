import {CREATE_PRODUCT, GET_ERROR} from '../type';

const initail = {
    product: [],
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
