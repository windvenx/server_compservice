import React from 'react';
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