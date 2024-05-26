import 'bootstrap/dist/css/bootstrap.css';
import RootLayout from "./RootLayout";

function App() {
  return (
   <>
   {/* <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/menu" element={<Menu/>}></Route>
    <Route path='/basket' element={<Basket/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='./signup' element={<SignUp/>}></Route>
   </Routes> */}
   <RootLayout/>
   </>
  );
}

export default App;
