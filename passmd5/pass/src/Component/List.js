import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {toast} from "react-toastify";
import {deleteProduct, getAllProduct} from "../Service/ProductService";
import * as productService from "../Service/ProductService";


function ProductList() {
    const [productList, setProductList] = useState([]);
    const [productDelete, setProductDelete] = useState({});
    const alertSucess = () => toast.success("Xóa Thành Công");
    const [show, setShow] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            let res = await getAllProduct();
            setProductList(res);
        }
        fetchData();
    }, []);
    const getProductList = async () => {
        let data = await productService.getAllProduct();
        setProductList(data);
    }

    const handleClose = () => setShow(false);
    const handleDeleteProduct = async () => {
        let isDelete = await deleteProduct(productDelete);
        console.log(isDelete)
        if (isDelete) {
            setProductDelete({});
            alertSucess();
            getProductList();
        }
        handleClose();
    }
    const handleShow = (item) => {
        setShow(true);
        setProductDelete(item)
    }
    return (
        <div className="container my-3">
            <div className="d-flex justify-content-between">
                <h3>Danh sách sản phẩm </h3>
                <Link className="btn btn-primary" to={"/create"}>Thêm mới</Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên Sản Phẩm</th>
                    <th scope="col">Mô Tả</th>
                    <th scope="col">Giá(VNĐ)</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {productList?.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>
                            <Link className="btn btn-warning" to={`/editProduct/${item.id}`}>Chỉnh sửa</Link>
                        </td>
                        <td>
                            <Link className="btn btn-warning" to={`/detailProduct/${item.id}`}>CHi TIết Sản Phẩm</Link>
                        </td>
                        <td>
                            <Button className="btn btn - bg-danger-m" variant="primary"
                                    onClick={() => handleShow(item)}> Xóa </Button>
                        </td>
                    </tr>
                ))}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bạn có chắc chắn muốn xóa không </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{productDelete.title},{productDelete.price}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleDeleteProduct}>
                            Xác nhận
                        </Button>
                    </Modal.Footer>
                </Modal>
                </tbody>
            </table>
        </div>
    );
}
export default ProductList













