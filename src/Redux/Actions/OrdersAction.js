import { useGetDataToken } from "../../Hooks/useGetData";
import { GET_ALL_ORDER } from "../type";

export const getAllOrders = (page, limit) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_ORDER,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ALL_ORDER,
            payload: e.response,
        })
    }
}