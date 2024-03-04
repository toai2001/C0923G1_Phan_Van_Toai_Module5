import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as bookService from "../../service/BookService";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

function CreateBook() {
    const navigate = useNavigate();
    const initValue = {
        title: "",
        quantity: 0
    }

    const handleAddBook = async (values) => {
        let isSuccess = await bookService.createBook(values);
        if(isSuccess) {
            toast.success("Thêm mới thành công")
            navigate("/")
        } else {
            toast.error("Lỗi")
        }
    }
    return (
        <div className="container mt-4">
            <h1>Add a new Book</h1>
            <Formik
                initialValues={initValue}
                onSubmit={(values) => {
                    handleAddBook(values)
                }}>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <Field type="text" className="form-control" id="title" name="title" placeholder="Nhập title"/>
                        <ErrorMessage name="title"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <Field type="number" className="form-control" id="quantity" name="quantity" placeholder="Nhập số lượng"/>
                        <ErrorMessage name="quantity"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreateBook;