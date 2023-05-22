import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../type";

const inital = {
    subcategory: [],
    loading: true,
}

const SubCategoryReducer = (state = inital, action) => {
    switch(action.type) {
        case CREATE_SUB_CATEGORY:
            return {
                ...state,
                subcategory: action.payload,
                loading: false,
            }
        case GET_SUB_CATEGORY:
            return {
                subcategory: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                subcategory: action.payload,
                loading: true,
            }
        default:
            return state;
    }
}

export default SubCategoryReducer