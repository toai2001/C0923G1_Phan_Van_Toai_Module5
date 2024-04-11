import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";
import * as productService from "../Service/ProductService";

function CreateBook() {
    const navigate = useNavigate();
    const initValue = {
        title: "",
        price: "",
        description: "",

    }

    const handleAddProduct = async (values) => {
        let isSuccess = await productService.createProduct(values);
        console.log(isSuccess)
        if (isSuccess) {
            toast.success("Thêm mới thành công")
            navigate("/")
        } else {
            toast.error("Lỗi")
        }
    }

    return (
        <div className="container mt-4">
            <h1>Thêm sản phẩm</h1>
            <Formik
                initialValues={initValue}
                onSubmit={values => handleAddProduct(values)
                }>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Tên Sản Phẩm</label>
                        <Field type="text" className="form-control" id="title" name="title"
                               placeholder="Nhập Tên Sản Phẩm"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Giá Sản Phẩm</label>
                        <Field type="text" className="form-control" id="price" name="price"
                               placeholder="Nhập Giá Sản Phẩm"/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Ngày Mô Tả Sản Phẩm</label>
                        <Field type="text" className="form-control" id="description" name="description"
                               placeholder="Nhập Mô Tả Sản Phẩm"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </Form>
            </Formik>
            <br></br>
            <br></br>
            <Link className="btn btn-primary" to={"/"}>Trở Lại</Link>
        </div>
    )
}

export default CreateBook;
