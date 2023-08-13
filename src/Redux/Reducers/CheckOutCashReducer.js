import { CREATE_ORDER_CASH } from "../type";

const initail = {
    createOrderCash: [],
}
const CheckOutCashReducer = (state=initail, action) => {
    switch(action.type) {
        case CREATE_ORDER_CASH: 
            return {
                ...state,
                createOrderCash: action.payload,
            }
        default: 
            return state;
    }
}

export default CheckOutCashReducer