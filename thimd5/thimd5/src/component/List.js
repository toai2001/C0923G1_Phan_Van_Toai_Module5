import React, {useEffect, useState} from "react";
// import {toast} from "react-toastify";
import * as bookService from "../service/BookService"
// import {Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import {  searchBooks} from "../service/BookService";

function ListBook() {
    const [bookList, setBook] = useState([]);
    // const [bookDelete, setBookDelete] = useState({});
    // const alertSucess = () => toast.success("Xóa Thành Công");
    const [search, setSearch] = useState({
        tenSach : "",
        theLoai: ""
    });



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
    useEffect(() => {
        const fetchData = async () => {
            let res = await getAllBook();
            setBook(res);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const filter = async () => {
            let res = await searchBooks(search);
            console.log(res);
            setBook(res);
        }
        console.log(search)
        filter();
    }, [search]);

        // useEffect(() => {
    //     getAllBook()
    // }, [bookDelete]);
    const getAllBook = async () => {
        let data = await bookService.getAllBook();
        setBook(data);
    }
    const [show, setShow] = useState(false);


    // const handleClose = () => setShow(false);
    // const handleDeleteBook = async () => {
    //     let isDelete = await deleteBook(bookDelete);
    //     console.log(isDelete)
    //     if (isDelete) {
    //         setBookDelete({});
    //         alertSucess();
    //         getAllBook();
    //     }
    //     handleClose();
    // }
    // const handleShow = (item) => {
    //     setShow(true);
    //     setBookDelete(item)
    // }
    return (
        <div className="container my-3">
            <div className="d-flex justify-content-between">
                <h3>Danh sách quyển sách </h3>
                <span className="input-search">
                <input
                    type="text"
                    placeholder="Tìm kiếm theo tên sách"
                    onChange={(e) => setSearch({
                        ...search,
                        tenSach: e.target.value
                    })}
                />
            </span>
                <span className="input-search">
                <input
                    type="text"
                    placeholder="Tìm Kiếm theo thể loại"
                    onChange={(e) => setSearch({
                        ...search,
                        theLoai: e.target.value
                    })}
                />
            </span>
                <Link className="btn btn-primary" to={"/create"}>Thêm mới</Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã Sách</th>
                    <th scope="col">Tên Sách </th>
                    <th scope="col">Thể Loại</th>
                    <th scope="col">Ngày Nhập Sách</th>
                    <th scope="col">Số Lượng</th>
                    {/*<th scope="col" colSpan="2">Thao tác</th>*/}
                </tr>
                </thead>
                <tbody>
                {bookList?.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.maSach}</td>
                        <td>{item.tenSach}</td>
                        <td>{item.theLoai}</td>
                        <td>{item.ngayNhapSach}</td>
                        <td>{item.soLuong}</td>
                        {/*<td>*/}
                        {/*    <Link className="btn btn-warning" to={`/editBook/${item.id}`}>Chỉnh sửa</Link>*/}
                        {/*</td>*/}
                        {/*<td>*/}
                        {/*    <Button className="btn btn - danger" variant="primary"*/}
                        {/*            onClick={() => handleShow(item)}> Xóa </Button>*/}
                        {/*</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
            {/*<Modal show={show} onHide={handleClose}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Bạn có chắc chắn muốn xóa không </Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>{bookDelete.tenSach},{bookDelete.ngayNhapSach}</Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={handleClose}>*/}
            {/*            Close*/}
            {/*        </Button>*/}
            {/*        <Button variant="primary" onClick={handleDeleteBook}>*/}
            {/*            Xác nhận*/}
            {/*        </Button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}
        </div>
    );
}


export default ListBook
