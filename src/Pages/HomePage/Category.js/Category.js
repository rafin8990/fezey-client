import React, { useEffect, useState } from 'react';
import CategoryDetails from './CategoryDetails';

const Category = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='xl:mx-72'>
            <div className='md:mt-20'>
                <p className=' text-emerald-900 font-semibold text-xl text-center'>Category</p>
                <h1 className=' text-emerald-900 font-semibold text-4xl text-center mt-2'>Select a category to buy product</h1>
                <p className=' text-emerald-900 font-semibold text-xl text-center mt-2'>It's all your choice</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20'>
                {
                    categories.map(categori=><CategoryDetails
                    key={categori?._id}
                    categori={categori}
                    ></CategoryDetails>)
                }
            </div>

        </div>
    );
};

export default Category;