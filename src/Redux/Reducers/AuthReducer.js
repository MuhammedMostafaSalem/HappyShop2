import { CREATE_NEW_USER } from "../type";

const initail = {
    createUser: [],
    loading: true,
}

const AuthReducer = (state = initail, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
            }
        default:
            return state;
    }
}

export default AuthReducer