import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

function FormHeath() {
    const initValue = {
        fullName: "",
        idCard: "",
        birthday: "",
        gender: null,
        nationality: "",
        workplace: "",
        workPosition: "",
        insuranceCard: 1,
        province: "",
        district: "",
        wards: "",
        houseNumber: "",
        phoneNumber: "",
        email: ""
    }
    const validateObject = {
        fullName: Yup.string().required("Họ tên không được để trống !")
            .min(5, "Tên không được ít hơn 5 kí tự")
            .max(50, "Tên không quá 50 kí tự"),
        idCard: Yup.string().required("Không được để trống CMND/CCCD")
            .min(9,"CMND/CCCD không được ít hơn 5 kí tự")
            .max(12,"CMND/CCCD không được lớn hơn 12 kí tự"),
        birthday: Yup.date().required("Không được để trống ngày sinh")
            .min(new Date('1900-01-01T00:00:00'),"Năm sinh phải lớn hơn 1900"),
        gender: Yup.date().required("Giới tính không được để trống !"),
        nationality: Yup.string().required("Quốc tịch không được để trống !"),
        province: Yup.string().required("Tỉnh thành không được để trống !"),
        district: Yup.string().required("Quận/Huyện không được để trống !"),
        wards: Yup.string().required("Phường/xã không được để trống !"),
        houseNumber: Yup.string().required("Địa chỉ nhà không được để trống !"),
        phoneNumber: Yup.string().required("Số điện thoại không được để trống !")
            .matches("(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})", "Số điện thoại không đúng định dạng"),
        email: Yup.string().required("Email không được để trống !")
            .email("Định dạng email không hợp lệ !")
            .matches("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
    }
    const onSubmit = () => {
        alert("ok")
    }
    return (
        <>
            <div className="container">
                <h2>Tờ khai y tế</h2>
                <Formik
                    initialValues={initValue}
                    onSubmit={onSubmit}
                    validationSchema={Yup.object(validateObject)}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Họ và tên</label>
                            <Field type="text" className="form-control" name="fullName" id="fullName"/>
                            <ErrorMessage name="fullName"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="idCard" className="form-label">Hộ chiếu/CMND</label>
                            <Field type="text" className="form-control" name="idCard" id="idCard"/>
                            <ErrorMessage name="idCard"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthday" className="form-label">Ngày sinh</label>
                            <Field type="date" className="form-control" name="birthday" id="birthday"/>
                            <ErrorMessage name="birthday"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Giới tính</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender"
                                       id="male" value="1"/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Nam
                                </label>
                            </div>
                            <div className="form-check">
                                <input class="form-check-input" type="radio" name="gender"
                                       id="female" value="0"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Nữ
                                </label>
                            </div>
                            <ErrorMessage name="gender"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nationality" className="form-label">Quốc Tịch</label>
                            <Field type="text" className="form-control" name="nationality" id="nationality"/>
                            <ErrorMessage name="nationality"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="workplace" className="form-label">Công ty làm việc</label>
                            <Field type="text" className="form-control" name="workplace" id="workplace"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="workPosition" className="form-label">Bộ phận làm việc</label>
                            <Field type="text" className="form-control" name="workPosition" id="workPosition"/>
                        </div>
                        <div className="mb-3 form-check">
                            <label className="form-check-label" htmlFor="insuranceCard">
                                Có thẻ bảo hiểm y tế
                            </label>
                            <input className="form-check-input" type="checkbox" value="1" id="insuranceCard"/>
                        </div>
                        <h4>Địa chỉ liên lạc tại Vệt Nam</h4>
                        <div className="mb-3">
                            <label htmlFor="province" className="form-label">Tỉnh, TP</label>
                            <Field type="text" className="form-control" name="province" id="province"/>
                            <ErrorMessage name="province"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="district" className="form-label">Quận/Huyện</label>
                            <Field type="text" className="form-control" name="district" id="district"/>
                            <ErrorMessage name="district"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wards" className="form-label">Phường/Xã</label>
                            <Field type="text" className="form-control" name="wards" id="wards"/>
                            <ErrorMessage name="wards"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="houseNumber" className="form-label">Số nhà</label>
                            <Field type="text" className="form-control" name="houseNumber" id="houseNumber"/>
                            <ErrorMessage name="houseNumber"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Điện thoại</label>
                            <Field type="text" className="form-control" name="phoneNumber" id="phoneNumber"/>
                            <ErrorMessage name="phoneNumber"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="email" className="form-control" name="email" id="email"/>
                            <ErrorMessage name="email"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </Form>
                </Formik>

            </div>
        </>
    )
}

export default FormHeath;
