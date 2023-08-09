import { ADD_CART, APPLAY_COUPON_CART, DELETE_ALL_CART, DELETE_ITEM_CART, EDIT_QUANTITY_CART, GET_ALL_CART } from "../type";

const initail = {
    addToCart: [],
    getAllCart: [],
    deleteAllCart: [],
    deleteItemCart: [],
    editQuantityCart: [],
    applayCouponCart: [],
}

const CartReducer = (state=initail, action) => {
    switch(action.type) {
        case ADD_CART: 
            return {
                ...state,
                addToCart: action.payload,
            }
        case GET_ALL_CART: 
            return {
                ...state,
                getAllCart: action.payload,
            }
        case DELETE_ALL_CART: 
            return {
                ...state,
                deleteAllCart: action.payload,
            }
        case DELETE_ITEM_CART: 
            return {
                ...state,
                deleteItemCart: action.payload,
            }
        case EDIT_QUANTITY_CART: 
            return {
                ...state,
                editQuantityCart: action.payload,
            }
        case APPLAY_COUPON_CART: 
            return {
                ...state,
                applayCouponCart: action.payload,
            }
        default: 
            return state;
    }
}

export default CartReducer