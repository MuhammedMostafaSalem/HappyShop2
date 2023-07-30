import { EDIT_PASSWORD, UPDATE_USER_PROFILE } from "../type";

const inital = {
    userProfile: [],
    editPassword: [],
}
const ProfileReducer = (state = inital, action) => {
    switch (action.type) {
        case UPDATE_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            }
        case EDIT_PASSWORD:
            return {
                ...state,
                editPassword: action.payload,
            }
        default:
            return state;
    }
}
export default ProfileReducer