import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import * as bookService from "../../service/BookService";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function EditBook() {
    const {bookId} = useParams();
    const [bookEdited, setBookEdited] = useState();
    const navigation = useNavigate();

    const alertSuccess = () => toast.success("Thành công!!!")
    const getDataEdit = async () => {
        console.log(bookId)
        const data = await bookService.getBook(bookId);
        setBookEdited(data);
        console.log(data);
    }
    const validation = Yup.object({
        title: Yup.string().required("Tiêu đề: Vui lòng nhập trường này"),
        quantity: Yup.number().required("Số lượng: Vui lòng nhập trường này")
            .min(1, "Số lượng phải lớn hơn 0 !")
    })
    const handleSubmit = async (value) => {
        const response = await bookService.editBook(value);
        navigation("/");
        alertSuccess();
    }
    useEffect(() => {
        getDataEdit()
    }, [])
    if (!bookEdited) {
        return null;
    } else {
        return (
            <div className="container mt-4">
                <h1>Sửa Book</h1>
                <Formik
                    initialValues={bookEdited}
                    onSubmit={handleSubmit}
                    validationSchema={validation}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <Field type="text" className="form-control" id="title" name="title"
                                   placeholder="Nhập title"/>
                            <ErrorMessage name="title"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Quantity</label>
                            <Field type="number" className="form-control" id="quantity" name="quantity"
                                   placeholder="Nhập số lượng"/>
                            <ErrorMessage name="quantity"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Sửa</button>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default EditBook;
