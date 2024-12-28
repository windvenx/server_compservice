import React from 'react';
import Products from '../../../components/Products/Page'
import SwiperComponent from '../../../components/SwiperComponent';
import Restored from './Restored';
import Blog from './Blog';
import Swiper from 'swiper';

const page = () => {
    return (
        <>
            <Restored/> 
            <Blog/>
        </>
    );
};

export default page;