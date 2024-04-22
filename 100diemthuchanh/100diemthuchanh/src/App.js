import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import List from "./Component/List";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<List/>}/>
            {/*<Route path='/create' element={<Create/>}/>*/}
            {/*<Route path='/edit/:id' element={<Edit/>}/>*/}
          </Routes>
            <ToastContainer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
