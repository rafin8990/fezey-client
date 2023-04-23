import React from 'react';
import Details from './Details';
import Slide from 'react-reveal/Slide';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Booking from './Booking/Booking';

const Products = () => {
    const products = useLoaderData();
    const [booking, setBooking] = useState(null);

    return (
        <div>
            <Slide bottom>
                <p className='text-center text-emerald-900 my-10'>NEWSLETTER</p>
                <h1 className='text-4xl text-center text-emerald-900 my-10 '>Sign up and get up to 20% off your <br /> first purchase</h1>
                <div className='mt-5 flex justify-center'>
                    <button className='btn btn-ghost'> New</button>
                    <button className='btn btn-ghost'> Feature</button>
                    <button className='btn btn-ghost'> Best sell </button>
                </div>
            </Slide>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:ml-10 lg:m-20'>

                {
                    products?.map(product => <Details
                        key={product?._id}
                        product={product}
                        setBooking={setBooking}

                    ></Details>)
                }
            </div>
            {
                booking && <Booking
                    booking={booking}
                    setBooking={setBooking}
                ></Booking>
            }

        </div>
    );
};

export default Products;