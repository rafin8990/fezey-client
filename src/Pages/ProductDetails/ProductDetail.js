import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaLocationArrow } from "react-icons/fa";
import { CounterContext } from '../Context/CountProvider';
import Cheakout from '../../Cheakout/Cheakout';
import { AuthContext } from '../Context/AuthProvider';

const ProductDetail = () => {
    const { count, setCount } = useContext(CounterContext);
    const { user } = useContext(AuthContext)
    const product = useLoaderData()
    console.log(product)
    const { name, picture, price, _id, } = product;


    const handleAddToCart = () => {
        setCount(count + 1)

        const data = {
            name,
            picture,
            price,
            email: user?.email,
            _id: _id,
            count
        }

        // here url means server side rendering url 
        fetch('url', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Card Added Successfully')
                    // setCount(count + 1)
                    // comment line is the right way to add product to the card 
                }
              
            })


    };
    return (
        <div className='lg:max-w-[1440px] mx-auto my-20'>
            <h1 className='text-4xl text-center font-semibold text-emerald-900 my-10'>Product Details</h1>
            <div className="card md:card-side bg-base-100  shadow-xl">
                <figure><img className='w-2/3' src={picture} alt="Movie" /></figure>
                <div className="">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl'>Price:${price}</p>

                    <div className='flex items-center'>
                        <p className='text-xl'>Ratings:</p>
                        <p className='flex text-yellow-400'> <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                    </div>

                    <p className='text-xl'>Shipping:$10</p>
                    <p className='text-xl'>Brand: Top MEN</p>
                    <p className='text-lg flex items-center'> Address: <FaLocationArrow></FaLocationArrow> Dhaka, Dhaka North, Banani Road No. 12-19</p>
                    <div className="card-actions mt-5 ">
                        <button onClick={handleAddToCart} className="btn btn-success btn-sm">Add to cart</button>
                    </div>
                </div>
            </div>
            <Cheakout></Cheakout>
        </div>
    );
};

export default ProductDetail;