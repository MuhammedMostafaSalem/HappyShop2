import { ADD_USER_ADDRESS, All_USER_ADDRESSES, DELET_USER_ADDRESS, EDIT_USER_ADDRESS, GET_ONE_ADDRESS } from "../type";

const initail = {
    addUserAddress: [],
    allUserAddresses: [],
    deleteUserAddress: [],
    getOneAddress: [],
    editAddress: [],
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
        case GET_ONE_ADDRESS: 
            return {
                ...state,
                getOneAddress: action.payload,
            }
        case EDIT_USER_ADDRESS: 
            return {
                ...state,
                editAddress: action.payload,
            }
        default: 
            return state;
    }
}

export default UserAddressReducer