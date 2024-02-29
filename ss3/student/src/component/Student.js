import {Component} from "react";

const listStudent = [
    {
        id: 1,
        name: "Phan Văn Toại",
        age: 22,
        address: "Nghệ An"
    },
    {
        id: 2,
        name: "Trần Linh Giang",
        age: 21,
        address: "Quảng Binh"
    },
    {
        id: 3,
        name: "Tiểu Vi",
        age: 20,
        address: "Đà Nẵng"
    }
];
export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listStudent: listStudent
        }
    }

    render() {
        return <>
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Địa chỉ</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.listStudent.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    }
}
