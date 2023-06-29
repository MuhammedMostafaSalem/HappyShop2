import { CREATE_NEW_USER, GET_CURERNT_USER, LOGIN_USER } from "../type";

const initail = {
    createUser: [],
    loginUser: [],
    currentUser: [],
    loading: true,
}

const AuthReducer = (state = initail, action) => {
    switch (action.type) {
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
            }
        case LOGIN_USER:
            return {
                ...state,
                loginUser: action.payload,
            }
        case GET_CURERNT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state;
    }
}

export default AuthReducer