import {deleteStudent, getAllStudent} from "../service/StudentService";
import * as studentService from "../service/StudentService"
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Button, Modal} from "react-bootstrap";
import data from "bootstrap/js/src/dom/data";


function ListStudent() {
    const [student, setStudent] = useState([]);
    const [studentDelete, setStudentDelete] = useState({});
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
    useEffect(() => {
        getAllStudent()
    }, [studentDelete]);
    const getAllStudent = async () => {
        let data = await studentService.getAllStudent();
        setStudent(data);
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleDeleteStudent = async () => {
        let isDelete = await deleteStudent(studentDelete);
        console.log(isDelete)
        if (isDelete) {
            setStudentDelete({});
            alertSucess();
            getAllStudent();
        }
        handleClose(); // Đóng modal sau khi xóa
    }
    const handleShow = (item) => {
        setShow(true);
        setStudentDelete(item)
    }

    return (
        <div className="container my-3">
            <div className="d-flex justify-content-between">
                <h3>Danh sách học sinh</h3>
                {/*<Link className="btn btn-primary" to={"/create"}>Thêm mới</Link>*/}
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên Học Sinh</th>
                    <th scope="col">Lớp Học</th>
                    <th scope="col">Tuổi</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>
                </thead>
                <tbody>
                {student.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.class}</td>
                        <td>{item.age}</td>
                        {/*<td>*/}
                        {/*    <Link className="btn btn-warning" to={`/edit/${item.id}`}>Chỉnh sửa</Link>*/}
                        {/*</td>*/}
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
                <Modal.Body>{studentDelete.name},{studentDelete.class}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteStudent}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ListStudent