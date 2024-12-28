import React from 'react';
import Swiper from 'swiper';
import Products from '../../../components/Products/Page'

const page = () => {
    return (
        <>
            <Swiper>
                <Products/>
                <Products/>
                <Products/>
            </Swiper>
        </>
    );
};

export default page;