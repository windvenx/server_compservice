'use client'; // Указывает, что этот компонент должен рендериться только на клиенте

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'; // Импортируем стили Swiper
import Products from '../../components/Products/'

const SwiperComponent = ({ slides }) => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
          <SwiperSlide >
            
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
