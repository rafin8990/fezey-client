import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import Main from "../Layouts/Main";
import ProductDetail from "../ProductDetails/ProductDetail";
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
                loader:({params})=>fetch(`url/product/${params.id}`)
            }
        ])
    }
])