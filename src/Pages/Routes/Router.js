import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import ProductDetail from "../ProductDetails/ProductDetail";
import Products from "../Products/Products";
import Login from "../Register/Login";
import Register from "../Register/Register";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path: '/',
                element:<Home></Home>
            }, 
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/product/:id',
                element:<ProductDetail></ProductDetail>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path:'/products',
                element:<Products></Products>
            }
        ])
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:([
            {
                
            }
        ])
    }
])