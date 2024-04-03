import axios  from "axios";

export const fillAllCategory = async () =>{
    try{
        let res = await axios.get(" http://localhost:8080/category")
        return res.data;
    }catch (e) {
         throw e.response;
    }
}