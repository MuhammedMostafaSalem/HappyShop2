import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_COUPON } from "../type";

// create new user
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