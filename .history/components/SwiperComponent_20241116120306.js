'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation '
import Product from '../components/Products/Page';
import {Pagination,Navigation} from 'swiper/modules'

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
        loop={true} // включение зацикливания
      >
        <SwiperSlide>
          <div className='flex'>
            <Product/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex'>
            <Product/>
          </div>
        </SwiperSlide>
        {/* Добавьте больше слайдов по необходимости */}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
