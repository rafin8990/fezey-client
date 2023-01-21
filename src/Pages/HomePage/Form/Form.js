import React from 'react';
import bg from '../../../Assets/bg.png'
import Slide from 'react-reveal/Slide';

const Form = () => {
    return (
        <div className='my-20 border'>
            <Slide bottom>

                <h1 className='text-center font-semibold text-4xl text-emerald-900 my-10'>Keep in touch</h1>
            </Slide>
            <Slide bottom>
                <div className=" mb-28" style={{ backgroundImage: `url(${bg})` }}>
                    <form className=" flex justify-center p-5 ">
                        <div className='lg:w-1/3  mt-5'>
                            <div className="">
                                <input type="text" placeholder="Email Address" className="input input-bordered text-black w-full" />
                            </div>
                            <div className="mt-5">
                                <input type="text" placeholder="Subject" className="input input-bordered text-black w-full" />
                            </div>
                            <div className='mt-5'>
                                <textarea className="textarea w-full text-black" placeholder="Your Message"></textarea>
                            </div>
                            <div className='mt-5 flex justify-center'>
                                <button className='btn btn-primary w-full '>Contact</button>
                            </div>
                        </div>
                    </form>

                </div>
            </Slide>
        </div>
    );
};

export default Form;