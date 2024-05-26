import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home';
import Menu from './pages/Menu/Menu';
import Basket from './pages/Basket/Basket'
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';


function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/menu" element={<Menu/>}></Route>
    <Route path='/basket' element={<Basket/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='./signup' element={<SignUp/>}></Route>
   </Routes>
   </>
  );
}

export default App;
