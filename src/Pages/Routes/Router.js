import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Products from "../Products/Products";
import Login from "../Register/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories/:category',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories?category=${params.category}`)

            },
            {
                path: '/products',
                element: <Products></Products>
            }
        ])
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: ([
            {

            }
        ])
    }
])