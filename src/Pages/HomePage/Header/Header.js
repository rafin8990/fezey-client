import React from 'react';
import banner1 from '../../../Assets/Banner_1.webp'
import banner2 from '../../../Assets/banner-2.webp'
import banner3 from '../../../Assets/slider4.webp'
import Slide from 'react-reveal/Slide';

const Header = () => {
    return (
        <div>
            <Slide bottom>
                <div className="carousel lg:h-[700px] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner1} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner2} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={banner3} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Header;