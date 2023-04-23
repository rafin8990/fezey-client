import React from 'react';
import Slide from 'react-reveal/Slide';
import packagePic from '../../../Assets/package.jpg';

const HomeSection = () => {
    return (
        <div className='my-20'>
            <div className='lg:flex justify-around items-center'>
                <Slide left>
                    <div className='ml-5'>
                        <h1 className='text-5xl font-semibold'>The Fresh
                            <br />
                            Outfit For Summer
                        </h1>
                        <p className=' italic mt-4'>Just pic What you want </p>
                        <button className=' btn-success mt-5 px-16 py-2'>Show More</button>
                    </div>
                </Slide>
                <Slide right>
                    <div>
                        <img src={packagePic} alt="" />
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default HomeSection;