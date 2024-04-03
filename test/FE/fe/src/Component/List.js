import React, {useEffect, useState} from "react";
import {deleteBook, getAllBook} from "../Service/BookService";
import {fillAllCategory} from "../Service/CategoryService";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";



function ListBook() {
    const [bookList, setBookList] = useState([])
    const [categories, setCategories] = useState();
    const [bookDelete, setBookDelete] = useState({});
    const alertSucess = () => toast.success("Xóa Thành Công");
    console.log(bookList)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }
    const findAllBooks = async () => {
        getAllBook().then((res) => setBookList(res));
    };

    useEffect(() => {
        findAllBooks();
    }, []);

    useEffect(() => {
        fillAllCategory().then((res) => setCategories(res));
    }, []);
    useEffect(() => {
        getAllBook()
    }, [bookDelete]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleDeleteBook = async () => {
        let isDelete = await deleteBook(bookDelete);
        console.log(isDelete)
        if (isDelete) {
            setBookDelete({});
            alertSucess();
            findAllBooks();
        }
        handleClose();
    }
    const handleShow = (item) => {
        setShow(true);
        setBookDelete(item)
    }

    return (
        <div className="container my-3">
            <Link className="btn btn-primary" to={"/create"}>Thêm mới</Link>

            <table className="table">

                <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã sách</th>
                    <th>Tên sách</th>
                    <th>Thể loại</th>
                    <th>Ngày nhập</th>
                    <th>Số lượng</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {bookList?.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.code}</td>
                        <td>{item.name}</td>
                        <td>{item.bookCategory.name}</td>
                        <td>{item.date}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <Link className="btn btn-warning" to={`/editBook/${item.id}`}>Chỉnh sửa</Link>
                        </td>
                        <td>
                            <Button className="btn btn - danger" variant="primary"
                                    onClick={() => handleShow(item)}> Xóa </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bạn có chắc chắn muốn xóa không </Modal.Title>
                </Modal.Header>
                <Modal.Body>{bookDelete.name},{bookDelete.date}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteBook}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
        ;
}


export default ListBook
