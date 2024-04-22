import './App.css';
import List from "./Component/List";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./Component/Create";
import 'react-toastify/dist/ReactToastify.css';
import EditBook from "./Component/Edit";

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
