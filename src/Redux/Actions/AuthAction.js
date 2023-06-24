import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_NEW_USER } from "../type";

// create new user
export const createNewUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/signup`, data);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}