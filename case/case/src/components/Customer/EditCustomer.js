import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as customerService from "../../service/CustomerService";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";



function EditCustomer() {
    const {customerId} = useParams();
    const [customerEdited, setCustomerEdited] = useState();
    const navigation = useNavigate();

    const alertSuccess = () => toast.success("Thành công!!!")
    const getDataEdit = async () => {
        const data = await customerService.getCustomer(customerId);
        setCustomerEdited(data);
    }
    const validation = Yup.object({
        location: Yup.string()
            .required("Vui lòng chọn vị trí !"),
        level: Yup.string()
            .required("Vui lòng chọn trình độ !"),
        wage: Yup.number()
            .min(0, "Lương không được nhỏ hơn 0")
            .required("Lương không được để trống !"),
        email: Yup.string()
            .required("email không được để trống")
            .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                'Email không hợp lệ'),
        name: Yup.string()
            .required("Họ tên khách hàng không được để trống !")
            .min(3, "Họ tên khách hàng quá ngắn")
            .max(45, "Họ tên khách hàng quá dài"),
        dateOfBirth: Yup.date()
            .required("Ngày sinh không được để trống !")
            .test('is-over-18', 'Khách hàng phải đủ 18 tuổi trở lên', function (value) {
                const currentDate = new Date();
                const birthDate = new Date(value);
                const age = currentDate.getFullYear() - birthDate.getFullYear();
                // Kiểm tra nếu chưa đủ 18 tuổi
                return age >= 18;
            }),
        id_code: Yup.string()
            .required("Số chứng minh nhân dân không được để trống !")
            .matches(/^[0-9]{9,12}$/, 'Số chứng minh nhân dân không hợp lệ, phải đủ 9 hoặc 12 số'),
        numberPhone: Yup.string()
            .required("số điện thoại không được để trống !")
            .matches(/^0|\+81[0-9]{9}$/, 'Số điện thoại không hợp lệ, bắt đầu bằng 0 hoặc +81 và đủ 10 số ')
    })
    const handleSubmit = async (value) => {
        const response = await customerService.editCustomer(value);
        navigation("/customerList");
        alertSuccess();
    }
    useEffect(() => {
        getDataEdit()
    }, [])
    if (!customerEdited) {
        return null;
    } else {
        return (
            <div className="container mt-4">
                <h1>Add a new Book</h1>
                <Formik
                    initialValues={customerEdited}
                    validationSchema={validation}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <Field type="text" className="form-control" id="name" name="name" placeholder="Nhập tên"/>
                            <ErrorMessage name="name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="form-label">Date Of Birth</label>
                            <Field type="text" className="form-control" id="dateOfBirth" name="dateOfBirth"
                                   placeholder="Nhập ngày tháng năm sinh"/>
                            <ErrorMessage name="dateOfBirth"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <Field type="text" className="form-control" id="gender" name="gender"
                                   placeholder="Nhập giới tính"/>
                            <ErrorMessage name="gender"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="idCard" className="form-label">Id Card</label>
                            <Field type="text" className="form-control" id="idCard" name="idCard"
                                   placeholder="Nhập căn cước"/>
                            <ErrorMessage name="idCard"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <Field type="text" className="form-control" id="phoneNumber" name="phoneNumber"
                                   placeholder="Nhập số điện thoại"/>
                            <ErrorMessage name="phoneNumber"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="text" className="form-control" id="email" name="email"
                                   placeholder="Nhập email"/>
                            <ErrorMessage name="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="categoryCustomer" className="form-label">Category Customer</label>
                            <Field type="text" className="form-control" id="categoryCustomer" name="categoryCustomer"
                                   placeholder="Nhập Loại khách"/>
                            <ErrorMessage name="categoryCustomer"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">address</label>
                            <Field type="text" className="form-control" id="address" name="address"
                                   placeholder="Nhập địa chỉ"/>
                            <ErrorMessage name="address"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Sửa</button>
                    </Form>
                </Formik>
            </div>
        )
    }
}

export default EditCustomer;