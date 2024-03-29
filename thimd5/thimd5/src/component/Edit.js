// import {useNavigate, useParams} from "react-router-dom";
// import {useEffect, useState} from "react";
// import * as bookService from "../service/BookService";
// import * as Yup from "yup";
// import {ErrorMessage, Field, Form, Formik} from "formik";
// import {toast} from "react-toastify";
//
//
// function EditBook() {
//     const {bookId} = useParams();
//     const [bookEdited, setBookEdited] = useState();
//     const navigation = useNavigate();
//
//     const alertSuccess = () => toast.success("Chỉnh Sửa Thành Công!!!")
//     const getDataEdit = async () => {
//         const data = await bookService.getBook(bookId);
//         setBookEdited(data);
//     }
//     const validation = Yup.object({
//         tenSach: Yup.string()
//             .required("Tên sách không được để trống !")
//             .max(100, "Tên sách không dđược dài quá 100 kí tự !!!"),
//         maSach: Yup.string()
//             .required("Mã sách không được để trống !"),
//         theLoai: Yup.string()
//             .required("Thể loại không được để trống !"),
//         ngayNhapSach: Yup.string()
//             .required("Ngày nhập sách không được để trống !"),
//         soLuong: Yup.string()
//             .required("Số lượng  không được để trống !")
//     })
//     const handleSubmit = async (values) => {
//         const response = await bookService.editBook(values);
//         navigation("/");
//         alertSuccess();
//     }
//     useEffect(() => {
//         getDataEdit();
//     }, [])
//     if (!bookEdited) {
//         return null;
//     }
//     return (
//         <div className="container mt-4">
//             <h1>Chỉnh Sửa sách: {bookEdited.tenSach}</h1>
//             <Formik
//                 initialValues={bookEdited}
//                 validationSchema={validation}
//                 onSubmit={(values) => {
//                     handleSubmit(values)
//                 }}>
//                 <Form>
//                     <div className="mb-3">
//                         <label htmlFor="maSach" className="form-label">Mã Sách</label>
//                         <Field type="text" className="form-control" id="maSach" name="maSach" placeholder="Nhập mã sách"/>
//                         <ErrorMessage name="maSach"/>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="tenSach" className="form-label">Tên Sách</label>
//                         <Field type="text" className="form-control" id="tenSach" name="tenSach"
//                                placeholder="Nhập tên sách"/>
//                         <ErrorMessage name="tenSach"/>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="ngayNhapSach" className="form-label">Ngày Nhập Sách</label>
//                         <Field type="text" className="form-control" id="ngayNhapSach" name="ngayNhapSach"
//                                placeholder="Nhập ngày nhập sách"/>
//                         <ErrorMessage name="ngayNhapSach"/>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="theLoai" className="form-label">Trường</label>
//                         <Field className={"field"} as="select" name="theLoai">
//                             <option value="">-- Chọn thể loại sách</option>
//                             <option value="Truyện">Truyện </option>
//                             <option value="Tự Sự">Tự Sự</option>
//                             <option value="Giáo Dục"> Giáo Dục</option>
//                         </Field>
//                         <ErrorMessage name="theLoai"/>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="soLuong" className="form-label">Số Lượng Sách Nhập Vòa</label>
//                         <Field type="text" className="form-control" id="soLuong" name="soLuong"
//                                placeholder="Nhập số lượng sách"/>
//                         <ErrorMessage name="soLuong"/>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Sửa</button>
//                 </Form>
//             </Formik>
//         </div>
//     )
// }
//
// export default EditBook;