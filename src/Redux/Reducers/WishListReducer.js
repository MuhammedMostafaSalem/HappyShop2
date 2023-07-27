import { ADD_WISHLIST, GET_USER_WISHLIST, REMOVE_WISHLIST } from '../type';

const initail = {
    addWishList: [],
    removeWishList: [],
    getUserWishList: [],
}

const WishListReducer=(state = initail, action)=> {
    switch(action.type) {
        case ADD_WISHLIST : 
            return {
                ...state,
                addWishList: action.payload,
            }
        case REMOVE_WISHLIST : 
            return {
                ...state,
                removeWishList: action.payload,
            }
        case GET_USER_WISHLIST : 
            return {
                ...state,
                getUserWishList: action.payload,
            }
        default: 
            return state;
    }
}

export default WishListReducer