import React from 'react';
import Swiper from '../../../components/'

const SwiperProducts = () => {
    return (
        <div>
            <SwiperSlide>
          <Product size={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Product size={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Product size={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Product size={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Product size={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <Product size={{ width: '100%' }} />
        </SwiperSlide>
        </div>
    );
};

export default SwiperProducts;