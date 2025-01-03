'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Products from '../components/Products/Page'

const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10} // Расстояние между слайдами
        slidesPerView={1} // Количество видимых слайдов
        navigation // Включаем кнопки навигации
        pagination={{ clickable: true }} // Пагинация
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Автопрокрутка
      >
        <SwiperSlide>
          <Products/>
        </SwiperSlide>
        <SwiperSlide>
        <Products/>
        </SwiperSlide>
        <SwiperSlide> 
                   <Products/>

        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide4.jpg" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
