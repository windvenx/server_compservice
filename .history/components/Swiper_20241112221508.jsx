'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Pro

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
          <img src="/images/slide1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide4.jpg" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
