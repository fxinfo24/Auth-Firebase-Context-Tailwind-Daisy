import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './Layout/Admin.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoute from './Routes/PrivateRoute';
import Orders from './Components/Orders/Orders';

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <Admin></Admin>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={routerApp} />
    </AuthProviders>
  </React.StrictMode>,
)
