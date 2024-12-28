// components/SwiperComponent.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Product from '../components/Products/Page'

const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50}  // пространство между слайдами
        slidesPerView={1}  // количество слайдов, отображаемых одновременно
        navigation  // включает кнопки навигации
        pagination={{ clickable: true }}  // пагинация
        loop={true}  // бесконечный цикл
      >
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
        <Product/>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
