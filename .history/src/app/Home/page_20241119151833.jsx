import React from 'react';
import Products from '../../../components/Products/Page'
import SwiperComponent from '../../../components/SwiperComponent';
import Restored from './Restored';
import Blog from './Blog';
import Swiper from '../../../components/SwiperComponent';
import Swip

const page = () => {
    return (
        <>
            <Swiper padding={{padding:'40px 0'}}/>
            <Restored/> 
            <Blog/>
        </>
    );
};

export default page;