import React from 'react';
import Swiper from '../../../components/SwiperComponent'

const SwiperProducts = () => {
    return (
        <Swiper>
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
        </Swiper>
    );
};

export default SwiperProducts;