import axios from "axios";
import {array} from "yup";
export const getAllStudent = async ()=>{
    try {
        let res = await axios.get("http://localhost:8080/student")
        return res.data
    }catch (e) {
        return undefined;
    }
}
export const getStudent = async (studentId) => {
    try {
        let data = await axios.get(`http://localhost:3001/student/${studentId}`);
        return data.data;
    } catch (e) {
        return undefined;
    }
}
export const deleteStudent = async (student) => {
    console.log(student)
    try {
        await axios.delete(`http://localhost:8080 /student/${student.id}`);
        return true;
    } catch (e) {
        return false;
    }
}
export const createStudent = async (student) => {
    try {
        await axios.post("http://localhost:3001/student",student);
        return true;
    } catch (e) {
        return false;
    }
}
export const editStudent = async (student) => {
    try {
        await axios.put(`http://localhost:3001/student/${student.id}`,student);
        return true;
    } catch (e) {
        return false;
    }
}