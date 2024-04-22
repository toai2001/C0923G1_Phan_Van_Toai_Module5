import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import List from "./Component/List";
import Create from "./Component/Create";
import EditProduct from "./Component/Edit";
import Detail from "./Component/Detail";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<List/>}></Route>
            <Route path={"/create"} element={<Create/>}></Route>
            <Route path={"/editProduct/:productId"} element={<EditProduct/>}></Route>
            <Route path={"/detailProduct/:productId"} element={<Detail/>}></Route>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
  );
}


export default App;
