import React, {useEffect, useState} from 'react';
import * as toDoService from "../service/ToDoService";
import {Field, Form, Formik,ErrorMessage} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";

function ToDo() {
    const [toDo, setToDo] = useState([])
    useEffect(() => {
        getAllToDo()
    }, [])
    const getAllToDo = async () => {
        let data = await toDoService.getAllToDo();
        toast.success("Thêm mới thành công")
        setToDo(data);
    }
    const initValue = {
        title: ""

    }
    const createTask =  async (values) => {
        let isSuccess = await toDoService.addToDo(values);
        if (isSuccess) {
            toast.success("Thêm mới thành công")
            await getAllToDo();
        } else {
            toast.error("Lỗi")
        }

    }
    const validateObject = {
        title: Yup.string().required("Trường này bắt buộc nhập !")
    };
    return (
        <>
            <div className="container">
                <Formik
                    initialValues={initValue}
                    onSubmit={values => createTask(values)}
                    validationSchema={Yup.object(validateObject)}
                >
                    <Form className="row g-3 my-3">
                        <div className="col-auto">
                            <Field type="text" name="title" className="form-control" id="taskAdd" placeholder="Thêm task"/>
                            <ErrorMessage name="title" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Thêm</button>
                        </div>
                    </Form>
                </Formik>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên công việc</th>
                        <th scope="col">Hoàn Thành</th>
                    </tr>
                    </thead>
                    <tbody>
                    {toDo.map((item, index) =>
                        <tr key={item.id}>
                            <th scope="row">{index}</th>
                            <td>{item.title}</td>
                            <td>{item.completed ? 'Đã hoàn thành':'Chưa hoàn thành'}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ToDo;