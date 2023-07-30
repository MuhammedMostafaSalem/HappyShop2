import { useEditData } from "../../Hooks/useEditData";
import { EDIT_PASSWORD, UPDATE_USER_PROFILE } from "../type";

//update  user data 
export const editProfileData = (body) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/users/updateMe`, body);
        
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: e.response,
        })
    }
}

//change  user password 
export const editPassword = (body) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/users/changeMyPassword`, body);
        
        dispatch({
            type: EDIT_PASSWORD,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: EDIT_PASSWORD,
            payload: e.response,
        })
    }
}