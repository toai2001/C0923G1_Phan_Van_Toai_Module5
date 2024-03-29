import axios from "axios";

export const getAllBook = async (sort) => {
    try {
        let res = await axios.get("http://localhost:8080/books")
        return res.data;
    } catch (e) {
        return throw e.data;
    }
}
export const searchBooks = async (values) => {
    try {
        let res = await axios.get(`http://localhost:8080/books?tenSach_like=${values.tenSach}&theLoai_like=${values.theLoai}`)
        return res.data;
    } catch (e) {
        return undefined;
    }

}
export const crateBook = async (book) => {
    try {
        await axios.post("http://localhost:8080/books", book);
        return true;
    } catch (e) {
        return false;
    }
}
// export const deleteBook = async (book) => {
//     try {
//         await axios.delete(`http://localhost:8080/books/${book.id}`);
//         return true;
//
//     } catch (e) {
//         return false;
//     }
//
// }
// export const editBook = async (book) => {
//     try {
//         await axios.put(`http://localhost:8080/books/${book.id}`, book);
//         return true;
//     } catch (e) {
//         return false;
//     }
// }
// export const getBook = async (bookId) => {
//     try {
//         let data = await axios.get(`http://localhost:8080/books/${bookId}`);
//         return data.data;
//     } catch (e) {
//         return undefined;
//     }
// }


