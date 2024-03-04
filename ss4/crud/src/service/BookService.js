import axios from "axios";

export const getAllBook = async ()=>{
    try {
                const res = await  axios.get("http://localhost:3001/books")
        return res.data;
    }catch (e) {
        return "Không có danh sách  "
    }
}
export const createBook=async () =>{
    try {
        await axios.post()
    }
}