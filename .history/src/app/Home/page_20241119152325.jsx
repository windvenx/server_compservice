import React from 'react';
import Products from '../../../components/Products/Page'
import SwiperComponent from '../../../components/SwiperComponent';
import Restored from './Restored';
import Blog from './Blog';
import Swiper from '../../../components/SwiperComponent';
import Swiper from './SwiperProducts';

const page = () => {
    return (
        <>
            <SwiperProducts padding={{padding:'40px 0'}}/>
            <Restored/> 
            <Blog/>
        </>
    );
};

export default page;