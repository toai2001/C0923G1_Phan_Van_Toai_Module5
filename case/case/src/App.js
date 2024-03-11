import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListCustomer from "./components/Customer/ListCustomer";
import CreateCustomer from "./components/Customer/CreateCustomer";
import EditCustomer from "./components/Customer/EditCustomer";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path={"/customerList"} element={<ListCustomer/>}></Route>
                <Route path={"/create"} element={<CreateCustomer/>}></Route>
                <Route path={"/editCustomer/:customerId"} element={<EditCustomer/>}></Route>

            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;