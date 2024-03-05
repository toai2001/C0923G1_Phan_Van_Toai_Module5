import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";
import ListBook from "./component/book/ListBook";
import CreateBook from "./component/book/CreateBook";
import EditBook from "./component/book/EditBook";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListBook/>}/>
          <Route path="/create" element={<CreateBook/>}/>
          <Route path="/edit/:bookId" element={<EditBook/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
