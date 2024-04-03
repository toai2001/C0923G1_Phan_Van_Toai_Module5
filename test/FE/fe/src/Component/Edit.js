import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as bookService from "../Service/BookService";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {fillAllCategory} from "../Service/CategoryService";


function EditBook() {
    const {bookId} = useParams();
    const [bookEdited, setBookEdited] = useState();
    const navigation = useNavigate();
    const [categories, setCategories] = useState();


    const alertSuccess = () => toast.success("Chỉnh Sửa Thành Công!!!")
    const getDataEdit = async () => {
        const data = await bookService.getBook(bookId);
        setBookEdited(data);
    }
    const validation = Yup.object({
        tenSach: Yup.string()
            .required("Tên sách không được để trống !")
            .max(100, "Tên sách không dđược dài quá 100 kí tự !!!"),
        maSach: Yup.string()
            .required("Mã sách không được để trống !"),
        theLoai: Yup.string()
            .required("Thể loại không được để trống !"),
        ngayNhapSach: Yup.string()
            .required("Ngày nhập sách không được để trống !"),
        soLuong: Yup.string()
            .required("Số lượng  không được để trống !")
    })
    const handleSubmit =  (values) => {
        // const obj = {...values, bookCategory: JSON.parse(values.bookCategory)}
        // console.log(obj)
        bookService.editBook(values).then((res) => {
            navigation("/");
        })
        alertSuccess();
    }
    useEffect(() => {
        getDataEdit();
    }, [])
    useEffect(() => {
        fillAllCategory().then((res) => setCategories(res));
    }, []);
    if (!bookEdited) {
        return null;
    }
    return (
        <div className="container mt-4">
            <h1>Chỉnh Sửa sách: {bookEdited.name}</h1>
            <Formik
                initialValues={bookEdited}
                // validationSchema={validation}
                onSubmit={(values) => {
                    console.log(values)
                    handleSubmit(values)
                }}>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">Mã Sách</label>
                        <Field type="text" className="form-control" id="code" name="code" placeholder="Nhập mã sách"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tenSach" name="form-label">Tên Sách</label>
                        <Field type="text" className="form-control" id="name" name="name"
                               placeholder="Nhập tên sách"/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Ngày Nhập Sách</label>
                        <Field type="text" className="form-control" id="date" name="date"
                               placeholder="Nhập ngày nhập sách"/>
                    </div>
                    <div className="mb-3">
                        <label>Thể loại</label>{" "}
                        <Field name="bookCategory" as="select" className="form-control">
                            <option value="" disabled>
                                Chọn thể loại
                            </option>
                            {categories?.map((cate) => (
                                <option value={JSON.stringify(cate)} key={cate.id}>
                                    {cate.name}
                                </option>
                            ))}
                        </Field>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Số Lượng Sách Nhập Vòa</label>
                        <Field type="text" className="form-control" id="quantity" name="quantity"
                               placeholder="Nhập số lượng sách"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Sửa</button>
                </Form>
            </Formik>
        </div>
    )
}

export default EditBook;