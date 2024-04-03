import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as bookService from "../Service/BookService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fillAllCategory} from "../Service/CategoryService";



function CreateBook() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const initialValues  = {
        code: "",
        name: "",
        quantity: 0,
        date: "",
        bookCategory: "",
    }


    useEffect(() => {
        fillAllCategory().then((res) => setCategories(res));
    }, []);

const handleAddBook = async (values) => {
    const obj = {...values, bookCategory: JSON.parse(values.bookCategory)}
    console.log(values)
    let isSuccess = await bookService.crateBook(obj);
    if (isSuccess) {
        toast.success("Thêm mới thành công")
        navigate("/")
    } else {
        toast.error("Lỗi")
    }
}

return (
    <div className="container mt-4">
        <h1>Thêm mới sách</h1>
        <Formik

            initialValues={initialValues }
            onSubmit={values => handleAddBook(values)
            }>
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
                <button type="submit" className="btn btn-primary">Thêm</button>
            </Form>
        </Formik>
        <br></br>
        <br></br>

        <Link className="btn btn-primary" to={"/"}>Trở Lại</Link>

    </div>
);
}

export default CreateBook;