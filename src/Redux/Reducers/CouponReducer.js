import { ADD_COUPON } from "../type";

const initail = {
    addCoupon: [],
}

const CouponReducer = (state=initail, action) => {
    switch(action.type) {
        case ADD_COUPON: 
            return {
                ...state,
                addCoupon: action.payload,
            }
        default: 
            return state;
    }
}

export default CouponReducer
