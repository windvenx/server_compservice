'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 


import Product from '../components/Products/Page';


const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50} // пространство между слайдами
        slidesPerView={3}  // отображение одного слайда за раз
        navigation={true}  // включение стрелок навигации
        pagination={{ clickable: true }}  // включение пагинации
        scrollbar = {{draggable : true}}
        className='w-[80%'
        modules={[Pagination,Navigation]}
        loop={true} // включение зацикливания
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
    </div>
  );
};

export default SwiperComponent;
