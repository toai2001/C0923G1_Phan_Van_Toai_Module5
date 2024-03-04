import axios from "axios";

export const getAllBook = async ()=>{
    try {
                const res = await  axios.get("http://localhost:3001/books")
        return res.data;
    }catch (e) {
        return "Khong co danh sach"
    }
}