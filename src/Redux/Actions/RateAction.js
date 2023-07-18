import { useGetDataToken } from "../../Hooks/useGetData"
import { useInsertData } from "../../Hooks/useInsertData"
import { ALL_RATE_PRODUCT, CREATE_RATE } from "../type"

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

// get all review to one product 
export const getAllRate = (prodID, page, limit) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`)

        dispatch({
            type: ALL_RATE_PRODUCT,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: ALL_RATE_PRODUCT,
            payload: err.response,
        })
    }
}