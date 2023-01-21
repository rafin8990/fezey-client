import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetail = () => {
    const product=useLoaderData()
    const { c }=product
    return (
        <div>
            {c}
        </div>
    );
};

export default ProductDetail;