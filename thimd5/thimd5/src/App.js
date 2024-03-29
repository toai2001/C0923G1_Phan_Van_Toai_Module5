import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./component/List";
import Create from "./component/Create";
import EditBook from "./component/Edit";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<List/>}></Route>
                <Route path={"/create"} element={<Create/>}></Route>
                <Route path={"/editBook/:bookId"} element={<EditBook/>}></Route>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
