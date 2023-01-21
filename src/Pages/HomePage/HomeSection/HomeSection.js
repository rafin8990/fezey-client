import React from 'react';
import side from '../../../Assets/Sideimage.webp'
import Slide from 'react-reveal/Slide';

const HomeSection = () => {
    return (
        <div className='my-20'>

            <Slide bottom>
                <div>
                    <img src={side} alt="" />
                </div>
            </Slide>
        </div>
    );
};

export default HomeSection;