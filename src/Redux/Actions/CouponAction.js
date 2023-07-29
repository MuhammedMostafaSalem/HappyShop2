import useDeleteData from "../../Hooks/useDeleteData";
import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_COUPON, DELETE_COUPON, GET_ALL_COUPON } from "../type";

// create coupon
export const createCoupon = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/coupons`, body);
        dispatch({
            type: ADD_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_COUPON,
            payload: e.response,
        })
    }
}

// get all coupon
export const getAllCoupon = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/coupons`);
        dispatch({
            type: GET_ALL_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_COUPON,
            payload: e.response,
        })
    }
}

// delet coupon
export const deleteCoupon = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/coupons/${id}`);
        dispatch({
            type: DELETE_COUPON,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: DELETE_COUPON,
            payload: e.response,
        })
    }
}