import { ADD_USER_ADDRESS } from "../type";

const initail = {
    addUserAddress: [],
}

const UserAddressReducer = (state=initail, action) => {
    switch(action.type) {
        case ADD_USER_ADDRESS: 
            return {
                ...state,
                addUserAddress: action.payload,
            }
        default: 
            return state;
    }
}

export default UserAddressReducer