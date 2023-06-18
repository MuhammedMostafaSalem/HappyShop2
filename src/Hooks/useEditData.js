import baseURL from "../Api/baseURL";

const useEditDataWithImg = async (url, params) => {
    const config = {
        headers: {"Content-Type" : "multipart/form-data"}
    }
    const res = await baseURL.put(url, params, config);
    return res;
}
const useEditData = async (url, params) => {
    const res = await baseURL.put(url, params);
    return res;
}

export {useEditDataWithImg, useEditData}