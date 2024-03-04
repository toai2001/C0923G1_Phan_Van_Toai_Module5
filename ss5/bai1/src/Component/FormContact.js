import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Form, Formik,Field,ErrorMessage} from "formik";


function FormContact() {
    const initValue = {
        name: "",
        phone: "",
        email: "",
        message: ""
    }
    const validateObject = {
        name: Yup.string().required("Tên không được để tống").matches("[a-zA-Z]{1,}", "Tên chỉ được chứa chữ !"),
        phone: Yup.string().required("Số điện thoại không được để trống").matches("(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})","Số điện thoại không đúng địn dạng"),
        email: Yup.string().required("Email không được để trống").matches("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$","Email không đúng định dạng"),
        message: Yup.string().required("Message không được để trống")

    }
    function handleSubmit(){
        toast("Add contact successfully!!!");

        // return (
        //     <div>
        //         <button onClick={notify}>Notify!</button>
        //         <ToastContainer />
        //     </div>
        // );
        // alert("ok")
    }
    return(
        <>
            <h1> Liên Hệ</h1>

            <div className="form-container">
            <Formik initialValues={initValue} onSubmit={handleSubmit} validationSchema={Yup.object(validateObject)}>
                <Form>
                    <label htmlFor="name">Name: </label>
                    <br/>
                    <ErrorMessage name="name" component="p" className="error"/>
                    <Field type="text" name="name" id="name"/>
                    <br/>
                    <label htmlFor="phone">Số điện thoại: </label>
                    <br/>
                    <ErrorMessage name="phone" component="p" className="error"/>
                    <Field type="text" name="phone" id="phone"/>
                    <br/>
                    <label htmlFor="email">Email: </label>
                    <br/>
                    <ErrorMessage name="email" component="p" className="error"/>
                    <Field type="text" name="email" id="email"/>
                    <br/>
                    <label htmlFor="message">Message: </label>
                    <br/>
                    <ErrorMessage name="message" component="p" className="error"/>
                    <Field type="text" component="textarea" name="message" id="message" />
                    <br/>
                    <input type="submit" value="Submit"/>
                </Form>
            </Formik>
            <ToastContainer/>
            </div>
        </>
    )
}
export default FormContact