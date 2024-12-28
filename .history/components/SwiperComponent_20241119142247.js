'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Product from './Products/Page'

import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 




const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      pagination={{clickable:true}}
      scrollbar={{draggable:true}}
      className='w-[80'
      loop={true}
      modules={[Pagination,Navigation]}
    >
      <SwiperSlide>
        <Product width="300"/>
      </SwiperSlide>
      <SwiperSlide>
      <Product/>

      </SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>5</SwiperSlide>
      <SwiperSlide>6</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
