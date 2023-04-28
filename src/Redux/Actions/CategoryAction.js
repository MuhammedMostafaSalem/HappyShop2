import { GET_ALL_CATEGORY,  GET_ERROR } from "../type";
import useGetData from "../../Hooks/useGetData";

export const getAllCategory = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=${limit}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        })
    }
}
export const getAllCategoryPage = (page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=4&page=${page}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        })
    }
}