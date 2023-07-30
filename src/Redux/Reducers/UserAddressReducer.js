import { ADD_USER_ADDRESS, All_USER_ADDRESSES } from "../type";

const initail = {
    addUserAddress: [],
    allUserAddresses: [],
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
        default: 
            return state;
    }
}

export default UserAddressReducer