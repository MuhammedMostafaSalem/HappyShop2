import useDeleteData from "../../Hooks/useDeleteData"
import { useEditData } from "../../Hooks/useEditData"
import { useGetDataToken } from "../../Hooks/useGetData"
import { useInsertData } from "../../Hooks/useInsertData"
import { ALL_RATE_PRODUCT, CREATE_RATE, DELETE_RATE, EDIT_RATE } from "../type"

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

// get all review to one product 
export const deleteRate = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/reviews/${id}`)

        dispatch({
            type: DELETE_RATE,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: DELETE_RATE,
            payload: err.response,
        })
    }
}

export const editRate = (id, body) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/reviews/${id}`, body)

        dispatch({
            type: EDIT_RATE,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: EDIT_RATE,
            payload: err.response,
        })
    }
}