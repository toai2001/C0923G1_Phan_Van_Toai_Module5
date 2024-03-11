import {useEffect, useState} from "react";
import * as customerService from "../../service/CustomerService"
import {deleteCustomer,getAllCustomer} from "../../service/CustomerService";
import {toast} from "react-toastify";
import {Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";

function ListCustomer(){
    const [customerList,setCustomer] = useState([]);
    const [customerDelete, setCustomerDelete] = useState({});
    const alertSucess = () => toast.success("Delete Sucess")


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
    useEffect(() =>{
        getAllCustomer()
    },[customerDelete]);
    const getAllCustomer = async  () =>{
        let data =await customerService.getAllCustomer();
        setCustomer(data);
    }
    const [show, setShow] = useState(false);



    const handleClose = () => setShow(false);
    const handleDeleteCustomer = async () => {
        let isDelete = await deleteCustomer(customerDelete);
        console.log(isDelete)
        if (isDelete) {
            setCustomerDelete({});
            alertSucess();
            getAllCustomer();
        }
        handleClose(); // Đóng modal sau khi xóa
    }
    const handleShow = (item) => {
        setShow(true);
        setCustomerDelete(item)
    }
    return (
        <div className="container my-3">
            <div className="d-flex justify-content-between">
                <h3>Danh sách khacsh h </h3>
                <Link className="btn btn-primary" to={"/create"}>Thêm mới</Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên Khách Hàng</th>
                    <th scope="col">Ngày Tháng Nắm Sinh</th>
                    <th scope="col">Giới Tính</th>
                    <th scope="col">Căn Cước Công Dân</th>
                    <th scope="col">Số Điện Thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Loại Khách Hàng</th>
                    <th scope="col">Địa Chỉ</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {customerList.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.dateOfBirth}</td>
                        <td>{item.gender}</td>
                        <td>{item.idCard}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.email}</td>
                        <td>{item.categoryCustomer}</td>
                        <td>{item.address}</td>
                        <td>
                            <Link className="btn btn-warning" to={`/editCustomer/${item.id}`}>Chỉnh sửa</Link>
                        </td>
                        <td>
                            {/*<button  className="btn btn-danger" onClick={() => openModal(item)}>Xóa</button>*/}
                            <Button className="btn btn - danger" variant="primary" onClick={()=>handleShow(item)}> Xóa </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bạn có chắc chắn muốn xóa không    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{customerDelete.name},{customerDelete.address}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteCustomer}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default ListCustomer
