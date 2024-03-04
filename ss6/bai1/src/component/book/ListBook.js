import {useEffect, useState} from "react";
// import {getAllBook} from "../../service/BookService";
import * as bookService from "../../service/BookService";
import {toast} from "react-toastify";
import Modal from 'react-modal';
import {Link} from "react-router-dom";

function ListBook() {
    const [books, setBooks] = useState([])
    const [bookDelete, setBookDelete] = useState({});
    const alertSucess = () => toast.success("Delete Sucess!!!");

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    useEffect(() => {
        getAllBook();
    }, []);
    const getAllBook = async () => {
        let data = await bookService.getAllBook();
        setBooks(data);
    }
    const handleDeleteBook = async () => {
        let isDelete = await bookService.deleteBook(bookDelete);
        if (isDelete) {
            setBookDelete({})
            setModalIsOpen(false);
            alertSucess()
            getAllBook();
        }
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = (item) => {
        setModalIsOpen(true);
        setBookDelete(item);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="container my-3">
            <div className="d-flex justify-content-between">
                <h3>Thư viện sách</h3>
                <Link className="btn btn-primary" to={"/create"}>Thêm mới</Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sách</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {books.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <Link className="btn btn-warning" to={`/edit/${item.id}`}>Chỉnh sửa</Link>
                        </td>
                        <td>
                            <button  className="btn btn-danger" onClick={() => openModal(item)}>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Delete">
                <h2>Bạn có chắc chắn muốn xóa không ???</h2>
                <button onClick={closeModal}>Close</button>
                <button onClick={handleDeleteBook}>Delete</button>
            </Modal>
        </div>
    );
}


export default ListBook;