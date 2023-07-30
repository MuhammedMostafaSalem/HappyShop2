import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_USER_ADDRESS, All_USER_ADDRESSES, DELET_USER_ADDRESS } from "../type";
import useDeleteData from './../../Hooks/useDeleteData';

// create user Address
export const createUserAddress = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/addresses`, body);
        dispatch({
            type: ADD_USER_ADDRESS,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: ADD_USER_ADDRESS,
            payload: e.response,
        })
    }
}

// get all user Address
export const getAllUserAddresses = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/addresses`);
        dispatch({
            type: All_USER_ADDRESSES,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: All_USER_ADDRESSES,
            payload: e.response,
        })
    }
}

// delete user Address
export const deleteUserAddress = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/addresses/${id}`);
        dispatch({
            type: DELET_USER_ADDRESS,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: DELET_USER_ADDRESS,
            payload: e.response,
        })
    }
}