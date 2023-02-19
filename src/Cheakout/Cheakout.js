import React, { useContext, useEffect, useState } from 'react';

import image from '../Assets/clothing-4267339_960_720.jpg'
import { CounterContext } from '../Pages/Context/CountProvider';

const Cheakout = () => {

    const [orders, setOrders] = useState([]);
    const {count}=useContext(CounterContext)

    useEffect(() => {
        fetch('url')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex justify-between mt-5'>
                        <img className='w-72' src={image} alt="" />
                        <div>
                            <p className='text-xl'>Name: Lether Belt</p>
                            <p className='text-xl'>Quantity: + {count} -</p>
                            <p className='text-xl'>Price: $300</p>
                            
                            <p className='text-xl'>Shipping:$30</p>


                            <button className='btn btn-sm btn-success mt-5'>Buy Now</button>
                            <button className='btn btn-sm btn-error mt-5'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

{/* this is the right way to get order  */}
            {/* <div>

            {
                orders.map(order=><cheakout
                    key={order?._id}
                    order={order}
                    ><cheakout/>)
            }
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Cheakout;