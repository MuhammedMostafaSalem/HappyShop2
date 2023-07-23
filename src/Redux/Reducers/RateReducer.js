import { ALL_RATE_PRODUCT, CREATE_RATE, DELETE_RATE } from "../type";

const initail = {
    createRate: [],
    allRateProduct: [],
    deleteRate: [],
    loading: true,
}

const RateReducer=(state = initail, action)=> {
    switch(action.type) {
        case CREATE_RATE : 
            return {
                ...state,
                createRate: action.payload,
                loading: false,
            }
        case ALL_RATE_PRODUCT : 
            return {
                ...state,
                allRateProduct: action.payload,
                loading: false,
            }
        case DELETE_RATE :
            return {
                ...state,
                deleteRate: action.payload,
            }
        default: 
            return state;
    }
}

export default RateReducer