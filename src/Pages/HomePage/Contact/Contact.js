import React from 'react';
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Slide from 'react-reveal/Slide';

const Contact = () => {
    return (
        <div>
                <div className='md:mx-40 mb-20 bg-black p-20 rounded-md'>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <Slide left>
                            <div className='flex items-center'>
                                <FaCalendarAlt className='text-white'></FaCalendarAlt>
                                <div className='ml-5'>
                                    <p className='text-white'>We are open Monday-Friday</p>
                                    <h5 className='text-white text-2xl font-semibold'>7:00 AM - 9:00 PM</h5>
                                </div>
                            </div>
                        </Slide>
                        <Slide top>
                            <div className='flex items-center'>
                                <FaPhoneAlt className='text-white'></FaPhoneAlt>
                                <div className='ml-5'>
                                    <p className='text-white'>Have A Question? </p>
                                    <h5 className='text-white text-2xl font-semibold'>+2546 251 2658</h5>
                                </div>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className='flex items-center'>
                                <HiOutlineLocationMarker className='text-white'></HiOutlineLocationMarker>
                                <div className='ml-5'>
                                    <p className='text-white'>Need products? Our Address</p>
                                    <h5 className='text-white text-2xl font-semibold'>Liza Street, New York</h5>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
        </div>
    );
};

export default Contact;