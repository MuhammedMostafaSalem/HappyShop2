import { CREATE_RATE } from "../type";

const initail = {
    createRate: [],
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
        default: 
            return state;
    }
}

export default RateReducer