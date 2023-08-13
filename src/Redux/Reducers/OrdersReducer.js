import { GET_ALL_ORDER } from "../type";

const initail = {
    getAllOrders: [],
}

const OrdersReducer = (state=initail, action) => {
    switch(action.type) {
        case GET_ALL_ORDER: 
            return {
                ...state,
                getAllOrders: action.payload,
            }
        default: 
            return state;
    }
}

export default OrdersReducer