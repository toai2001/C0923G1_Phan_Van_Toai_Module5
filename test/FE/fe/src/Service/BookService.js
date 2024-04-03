import axios from "axios";
export const getAllBook = async () => {
    try {
        let res = await axios.get("http://localhost:8080/book")
        return res.data;
    } catch (e) {
         throw e.response;
    }

}
export const crateBook = async (book) => {
    try {
        await axios.post(`http://localhost:8080/create`, book);
        return true;
    } catch (e) {
        return false;
    }
}
export const deleteBook = async (book) => {
    try {
        await axios.delete(`http://localhost:8080/${book.id}`);
        return true;

    } catch (e) {
        return false;
    }

}
export const editBook = async (book) => {
    try {
        await axios.patch(`http://localhost:8080/edit/${book.id}`, book);
        return true;
    } catch (e) {
        return false;
    }
}
export const getBook = async (bookId) => {
    try {
        let data = await axios.get(`http://localhost:8080/book/${bookId}`);
        return data.data;
    } catch (e) {
        return undefined;
    }
}

