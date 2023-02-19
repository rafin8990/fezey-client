import React from 'react';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';

const CategoryDetails = ({categori}) => {
    const {category, picture}=categori;
    return (
        <div>
            <Slide bottom>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className=' h-80 w-full' src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{category}</h2>
                        <Link to={`/categories/${category}`}><button className="btn btn-sm btn-success w-full mt-5">View Details</button></Link>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default CategoryDetails;