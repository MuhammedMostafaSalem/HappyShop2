import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_USER_ADDRESS } from "../type";

// create user Address
export const createUserAddress = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/addresses`, body);
        dispatch({
            type: ADD_USER_ADDRESS,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_USER_ADDRESS,
            payload: e.response,
        })
    }
}