import axios from "axios";

export const getAllBook = async () => {
    try {
        let res = await axios.get(`http://localhost:8080/books`)
        return res.data;
    } catch (e) {
         throw e.data;

    }
}
export const searchBook = async (values) => {
    try {
        let res = await axios.get(`http://localhost:8080/books?titlelike=${values.code}&category.name_like=${values.category}`)
    } catch (e) {
         throw  e.data;

    }
}

export const deleteBook = async (book) => {
    try {
        await axios.delete(`http://localhost:8080/books/${book.id}`);
        return true;

    } catch (e) {
        return false;
    }

}
export const editBook = async (book) => {
    try {
        await axios.put(`http://localhost:8080/books/${book.id}`, book);
        return true;
    } catch (e) {
        return false;
    }
}
export const getBook = async (bookId) => {
    try {
        let data = await axios.get(`http://localhost:8080/books/${bookId}`);
        return data.data;
    } catch (e) {
        return undefined;
    }
}
