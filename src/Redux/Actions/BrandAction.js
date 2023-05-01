import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR } from "../type"
import useGetData from "../../Hooks/useGetData"
import { useInsertDataWithImg } from "../../Hooks/useInsertData"

// get all brand
export const getAllBrand = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=${limit}`)

        dispatch({
            type: GET_ALL_BRAND,
            payload: res,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        })
    }
}
// get all brand with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=5&page=${page}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: res,
        })
    }catch(err) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + err,
        })
    }
}

// create brand
export const createBrand = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImg(`/api/v1/brands` , formData);
        dispatch({
            type: CREATE_BRAND,
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