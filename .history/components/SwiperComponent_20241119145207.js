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
    <div className='container'>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      scrollbar={{draggable:true}}
      className='w'
      modules={[Pagination,Navigation]}
      style={{
        '--swiper-navigation-color' : 'f4f4f4',
        '--swiper-padding' : '100px'
      }}
    >
      <SwiperSlide>
        <div style={{ width: '100%'}}> {/* Меняем размер компонента через inline-стили */}
            <Product />
          </div>

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
