import { useEditData } from "../../Hooks/useEditData";
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_CART, APPLAY_COUPON_CART, DELETE_ALL_CART, DELETE_ITEM_CART, EDIT_QUANTITY_CART, GET_ALL_CART } from "../type";
import useDeleteData from './../../Hooks/useDeleteData';

export const addProductToCart = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/cart` , body);
        dispatch({
            type: ADD_CART,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: ADD_CART,
            payload: err.response,
        })
    }
}

export const getAllCart = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/cart`);
        console.log(response)
        dispatch({
            type: GET_ALL_CART,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: GET_ALL_CART,
            payload: err.response,
        })
    }
}

export const deleteAllCart = () => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart`);
        dispatch({
            type: DELETE_ALL_CART,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: DELETE_ALL_CART,
            payload: err.response,
        })
    }
}

export const deleteItemCart = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/cart/${id}`);
        dispatch({
            type: DELETE_ITEM_CART,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: DELETE_ITEM_CART,
            payload: err.response,
        })
    }
}

export const editQuantityCart = (id, body) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/cart/${id}`, body);
        dispatch({
            type: EDIT_QUANTITY_CART,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: EDIT_QUANTITY_CART,
            payload: err.response,
        })
    }
}

export const applayCouponCart = (body) => async (dispatch) => {
    try {
        const response = await useEditData(`/api/v1/cart/applyCoupon`, body);
        dispatch({
            type: APPLAY_COUPON_CART,
            payload: response,
        })
    }catch(err) {
        dispatch({
            type: APPLAY_COUPON_CART,
            payload: err.response,
        })
    }
}