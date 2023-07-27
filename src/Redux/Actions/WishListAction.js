import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData"
import { ADD_WISHLIST, GET_USER_WISHLIST, REMOVE_WISHLIST } from "../type"
import useDeleteData from './../../Hooks/useDeleteData';

// add wish-list user
export const addProductToWishList = (body) => async (dispatch) => {
    try {
        const res = await useInsertData(`/api/v1/wishlist`, body)

        dispatch({
            type: ADD_WISHLIST,
            payload: res,
        })
    }catch(err) {
        dispatch({
            type: ADD_WISHLIST,
            payload: err.res,
        })
    }
}

// add wish-list user
export const removeProductToWishList = (prodID) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/wishlist/${prodID}`)

        dispatch({
            type: REMOVE_WISHLIST,
            payload: res,
        })
    }catch(err) {
        dispatch({
            type: REMOVE_WISHLIST,
            payload: err.res,
        })
    }
}

// get wish-list user
export const getProductToWishList = () => async (dispatch) => {
    try {
        const res = await useGetDataToken(`/api/v1/wishlist`)

        dispatch({
            type: GET_USER_WISHLIST,
            payload: res,
        })
    }catch(err) {
        dispatch({
            type: GET_USER_WISHLIST,
            payload: err.res,
        })
    }
}