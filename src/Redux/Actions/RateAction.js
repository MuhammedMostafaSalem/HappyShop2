import { useInsertData } from "../../Hooks/useInsertData"
import { CREATE_RATE } from "../type"

//create rate
export const createRate = (prodID, body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/products/${prodID}/reviews`, body)

        dispatch({
            type: CREATE_RATE,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: CREATE_RATE,
            payload: err.response,
        })
    }
}