import { ADD_COUPON, DELETE_COUPON, EDIT_COUPON, GET_ALL_COUPON, GET_ONE_COUPON } from "../type";

const initail = {
    addCoupon: [],
    allCoupons: [],
    deleteCoupons: [],
    editCoupons: [],
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
        case GET_ONE_COUPON: 
            return {
                ...state,
                getOneCoupons: action.payload,
            }
        case EDIT_COUPON: 
            return {
                ...state,
                editCoupons: action.payload,
            }
        default: 
            return state;
    }
}

export default CouponReducer
