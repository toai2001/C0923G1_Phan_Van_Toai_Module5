import axios from "axios";

export const getAllCustomer = async () => {
    try {
        let res = await axios.get("  http://localhost:8080/customerList")
        return res.data;
    } catch (e) {
        return undefined;
    }

}
export const deleteCustomer = async (customer) => {
    try {
        await axios.delete(`http://localhost:8080/customerList/${customer.id}`);
        return true;

    } catch (e) {
        return false;
    }

}
export const createCustomer = async (cutomer) => {
    try {
        await axios.post("http://localhost:8080/customerList", cutomer);
        return true;
    } catch (e) {
        return false;
    }
}
export const editCustomer = async (customer) => {
    try {
        await axios.put(`http://localhost:8080/customerList/${customer.id}`,customer);
        return true;
    } catch (e) {
        return false;
    }
}
export const getCustomer = async (customerId) => {
    try {
        let data = await axios.get(`http://localhost:8080/customerList/${customerId}`);
        return data.data;
    } catch (e) {
        return undefined;
    }
}