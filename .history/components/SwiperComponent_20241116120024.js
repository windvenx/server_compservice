// components/SwiperComponent.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Product from '../components/Products/Page';

const SwiperComponent = () => {
  return (
      <Swiper
        spaceBetween={50} // пространство между слайдами
        slidesPerView={1}  // отображение одного слайда за раз
        navigation={true}  // включение стрелок навигации
        pagination={{ clickable: true }}  // включение пагинации
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
  );
};

export default SwiperComponent;
