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
      modules={[Pagination,Navigation]}
      style={{
        'swiper'
      }}
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
  );
};

export default SwiperComponent;
