import { ADD_USER_ADDRESS, All_USER_ADDRESSES, DELET_USER_ADDRESS } from "../type";

const initail = {
    addUserAddress: [],
    allUserAddresses: [],
    deleteUserAddress: [],
}

const UserAddressReducer = (state=initail, action) => {
    switch(action.type) {
        case ADD_USER_ADDRESS: 
            return {
                ...state,
                addUserAddress: action.payload,
            }
        case All_USER_ADDRESSES: 
            return {
                ...state,
                allUserAddresses: action.payload,
            }
        case DELET_USER_ADDRESS: 
            return {
                ...state,
                deleteUserAddress: action.payload,
            }
        default: 
            return state;
    }
}

export default UserAddressReducer