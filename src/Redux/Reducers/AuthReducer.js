import { CREATE_NEW_USER, FORGET_PASSWORD, GET_CURERNT_USER, LOGIN_USER, VERIFY_PASSWORD } from "../type";

const initail = {
    createUser: [],
    loginUser: [],
    currentUser: [],
    forgetPassword: [],
    verifyPassword: [],
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
        case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }
        case VERIFY_PASSWORD:
            return {
                ...state,
                verifyPassword: action.payload,
            }
        default:
            return state;
    }
}

export default AuthReducer