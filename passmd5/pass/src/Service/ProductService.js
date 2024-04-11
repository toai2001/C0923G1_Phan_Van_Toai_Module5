import axios from "axios";

export const getAllProduct = async () => {
    try {
        let res = await axios.get(`http://localhost:3000/products`)
        return res.data;
    } catch (e) {
        throw e.data;

    }
}
export const createProduct = async (product) => {
    try {
        await axios.post(`http://localhost:3000/products`, product);
        return true;
    } catch (e) {
        return false;
    }

}
export const deleteProduct = async (product) => {
    try {
        await axios.delete(`http://localhost:3000/products/${product.id}`);
        return true;
    } catch (e) {
        return false;
    }

}
export const getProduct = async (productId) => {
    try {
        let data = await axios.get(`http://localhost:3000/products/${productId}`);
        return data.data;
    } catch (e) {
        return undefined;
    }
}
export const editProduct = async (product) => {
    try {
        await axios.put(`http://localhost:3000/products/${product.id}`, product);
        return true;
    } catch (e) {
        return false;
    }
}





