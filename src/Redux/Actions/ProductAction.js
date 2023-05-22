import { useInsertDataWithImg } from "../../Hooks/useInsertData";
import { CREATE_PRODUCT, GET_ERROR } from "../type";

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