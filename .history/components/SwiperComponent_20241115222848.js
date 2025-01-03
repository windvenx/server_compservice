// components/SwiperComponent.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Product from '../components/Products/Page'

const SwiperComponent = () => {
  return (
      <Swiper
        spaceBetween={50} 
        slidesPerView={3}  
        navigation  
        pagination={{ clickable: true }} 
        loop={true}
      >
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
        <Product/>
          
        </SwiperSlide>
        <SwiperSlide>
        <Product/>

        </SwiperSlide>
      </Swiper>
  );
};

export default SwiperComponent;
