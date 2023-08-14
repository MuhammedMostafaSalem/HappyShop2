import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_ORDER_CARD, CREATE_ORDER_CASH } from "../type";

// create cash order
export const createCashOrder = (id, body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/orders/${id}`, body);
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: e.response,
        })
    }
}

// create card order
export const createCardOrder = (id, body) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/orders/checkout-session/${id}`, body);
        dispatch({
            type: CREATE_ORDER_CARD,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CARD,
            payload: e.response,
        })
    }
}