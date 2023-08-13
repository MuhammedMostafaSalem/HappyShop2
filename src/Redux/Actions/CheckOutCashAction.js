import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_ORDER_CASH } from "../type";

// create chash ourder
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