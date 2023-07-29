import { ADD_COUPON, DELETE_COUPON, GET_ALL_COUPON } from "../type";

const initail = {
    addCoupon: [],
    deleteCoupons: [],
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
        case DELETE_COUPON: 
            return {
                ...state,
                deleteCoupons: action.payload,
            }
        default: 
            return state;
    }
}

export default CouponReducer
