import axios from "axios";

export const getAllToDo = async () => {
    try {
        let res = await axios.get("http://localhost:8080/task");
        return res.data;
    } catch (e) {
        return undefined;
    }
}
export const addToDo = async (task) => {
    try {
        await axios.post("http://localhost:8080/task", task)
        return true;
    } catch (e) {
        return false;
    }
}