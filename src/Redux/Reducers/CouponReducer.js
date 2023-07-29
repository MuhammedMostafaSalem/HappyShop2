import { ADD_COUPON, GET_ALL_COUPON } from "../type";

const initail = {
    addCoupon: [],
    allCoupons: [],
}

const CouponReducer = (state=initail, action) => {
    switch(action.type) {
        case ADD_COUPON: 
            return {
                ...state,
                addCoupon: action.payload,
            }
        case GET_ALL_COUPON: 
            return {
                ...state,
                allCoupons: action.payload,
            }
        default: 
            return state;
    }
}

export default CouponReducer
