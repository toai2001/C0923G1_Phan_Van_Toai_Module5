import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as productService from "../Service/ProductService";


function EditProduct() {
    const {productId} = useParams();
    const [productEdited, setProductEdited] = useState();

    const navigation = useNavigate();

    const alertSuccess = () => toast.success("Chỉnh Sửa Thành Công!!!")
    const getDataEdit = async () => {
        const data = await productService.getProduct(productId);
        setProductEdited(data);
    }

    const handleSubmit = async (values) => {
        const response = await productService.editProduct(values);
        navigation("/");
        alertSuccess();
    }

    useEffect(() => {
        getDataEdit();
    }, [])
    if (!productEdited) {
        return null;
    }
    return (
        <div className="container mt-4">
            <h1>Chỉnh Sửa sách: {productEdited.title}</h1>
            <Formik
                // validationSchema={validations}
                initialValues={productEdited}
                onSubmit={(values) =>
                    handleSubmit(values)}
            >

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
                    <button type="submit" className="btn btn-primary">Sửa</button>
                </Form>
            </Formik>
            <br></br>
            <br></br>
            <Link className="btn btn-primary" to={"/"}>Trở Lại</Link>
        </div>
    )
}

export default EditProduct;