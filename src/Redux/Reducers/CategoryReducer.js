import {GET_ALL_CATEGORY, GET_ERROR} from '../type';

const initail = {
    category: [],
    loading: true,
}

const CategoryReducer = (state=initail, action) => {
    switch(action.type) {
        case GET_ALL_CATEGORY: 
            return {
                ...state,
                category: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                category: action.payload,
                loading: true,
            }
        default: 
            return state;
    }
}

export default CategoryReducer
