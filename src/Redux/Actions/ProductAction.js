import useDeleteData from "../../Hooks/useDeleteData";
import { useEditDataWithImg } from "../../Hooks/useEditData";
import useGetData from "../../Hooks/useGetData";
import { useInsertDataWithImg } from "../../Hooks/useInsertData";
import { CREATE_PRODUCT, DELETE_PRODUCTS, EDIT_PRODUCTS, GET_ALL_PRODUCT, GET_ERROR, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE } from "../type";

//create products with pagination
export const createProduct = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImg(`/api/v1/products` , formData);
        dispatch({
            type: CREATE_PRODUCT,
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


//get all products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCT,
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


//get all products with pagination with pages number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCT,
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


//get all products with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?${queryString}`);
        dispatch({
            type: GET_ALL_PRODUCT,
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


//get one product with id
export const getOneProduct = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products/${id}`);
        dispatch({
            type: GET_PRODUCT_DETAILS,
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


//get one product with id
export const getProductLike = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products?category=${id}`);
        dispatch({
            type: GET_PRODUCT_LIKE,
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

//delete product with id
export const deleteProducts = (id) => async (dispatch) => {
    try {
        const res = await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
            type: DELETE_PRODUCTS,
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

//edit product with id
export const editProducts = (id, data) => async (dispatch) => {
    try {
        const res = await useEditDataWithImg(`/api/v1/products/${id}`, data);
        dispatch({
            type: EDIT_PRODUCTS,
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