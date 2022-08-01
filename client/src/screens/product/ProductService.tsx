import axiosInstance from '../../utils/axios'
import contants from '../../utils/contants';
export const getproductsss = async () => {
    const res = await axiosInstance.get(contants.API_PRODUCTS);
    return res;
}

// export const getProductDetail = async (id) => {
//     const res = await axiosInstance.get(`${contants.API_PRODUCTS_BY_ID}:${id}/detail`)
//     return res;
// }

export const Productadd = async (data) => {
    console.log('data: ' + data);
    const res = await axiosInstance.post(contants.API_ADD_PRODUCT, data);
    console.log('res: ' + res);
    return res;
}

export const GetMyGiftById = async (id) => {
    const res = await axiosInstance.post(contants.API_GET_MYGIFT_BY_ID, { id_user: id });
    return res;
}

export const UpdateCoin = async (id, coin) => {
    const res = await axiosInstance.post(contants.API_UPDATE_COIN, { id: id, coin: coin });
    return res;
}
export const UpdatePlay = async (id, numberexchange) => {
    const res = await axiosInstance.post(contants.API_UPDATE_NUMBER, { id: id, numberexchange: numberexchange });
    return res;
}
export const UpdatePlayFree = async (id, numberfree) => {
    const res = await axiosInstance.post(contants.API_UPDATE_FREE_NUMBER, { id: id, numberfree: numberfree });
    return res;
}
