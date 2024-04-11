import axios from "axios";

export const getAllCate = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/category`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};