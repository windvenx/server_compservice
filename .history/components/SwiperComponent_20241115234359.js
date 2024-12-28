// components/SwiperComponent.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Product from '../components/Products/Page'

const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50} 
        slidesPerView={1}  
        navigation  
        pagination={{ clickable: true }} 
        loop={true}
      >
        <SwiperSlide>
          <Product/>
          <Product/>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          de
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
