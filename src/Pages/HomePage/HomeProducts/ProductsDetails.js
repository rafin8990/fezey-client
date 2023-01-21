import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const ProductsDetails = ({ product }) => {
    const { name, picture, price, _id } = product
    return (
        <div>
            <Slide bottom>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div className='flex justify-between'>
                            <p>Price: ${price}</p>
                            <p>Quality: Excellent</p>
                        </div>
                        <Link to={`/product/${_id}`}><button className="btn btn-sm btn-success w-full mt-5">View Details</button></Link>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default ProductsDetails;