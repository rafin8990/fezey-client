import React from 'react';
import Slide from 'react-reveal/Slide';



const Details = ({ product, setBooking }) => {
    const { name, picture, price, resalePrice, location, yearOfUse, postedTime, sellerName } = product
    return (
        <div>
            <div>
                <Slide bottom>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img className=' h-80 w-full' src={picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <div className='flex justify-between'>
                                <p>Old Price: ${price}</p>
                                <p>Resale Price: ${resalePrice}</p>
                            </div>
                            <div className='flex justify-between mt-2' >
                                <p>Quality: Excellent</p>
                                <p> Location: {location}</p>
                            </div>
                            <div className='' >
                                <p>Year Of Use: {yearOfUse}</p>
                                <p className='mt-2'> Posted Time: {postedTime}</p>
                                <p className='mt-2'> Seller Name: {sellerName}</p>
                            </div>
                            <label onClick={()=>setBooking(product)} htmlFor="my-modal-3" className="btn btn-sm btn-success w-full mt-5">Book Now</label>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Details;