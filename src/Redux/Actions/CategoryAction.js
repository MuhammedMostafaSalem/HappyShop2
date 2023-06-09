import { CREATE_CATEGORY, GET_ALL_CATEGORY,  GET_ERROR, GET_ONE_CATEGORY } from "../type";
import useGetData from "../../Hooks/useGetData";
import { useInsertDataWithImg } from "../../Hooks/useInsertData";

// get all category
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

// get one category
export const getOneCategory = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories/${id}`);
        dispatch({
            type: GET_ONE_CATEGORY,
            payload: res,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        })
    }
}

// get all category with pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=5&page=${page}`);
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

// create category
export const createCategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImg(`/api/v1/categories` , formData);
        dispatch({
            type: CREATE_CATEGORY,
            payload: res,
            loading: true,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        })
    }
}