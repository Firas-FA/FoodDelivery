import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './pages/HomePage/Home';
import Menu from './pages/Menu/Menu.jsx'
import Login from './pages/Login/Login.jsx'
import Basket from './pages/Basket/Basket.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
  />
);


