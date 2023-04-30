import baseURL from "../Api/baseURL"

const useInsertDataWithImg = async (url, params) => {
    const config = {
        headers: {"Content-Type" : "multipart/form-data"}
    }
    const res = await baseURL.post(url, params, config);
    return res;
}
const useInsertData = async (url, params) => {
    const res = await baseURL.post(url, params);
    return res;
}

export {useInsertData, useInsertDataWithImg}