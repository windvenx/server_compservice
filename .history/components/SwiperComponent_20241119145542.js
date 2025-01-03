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
      className='w-[80]'
      modules={[Pagination,Navigation]}
      style={{
        '--swiper-navigation-color' : 'f4f4f4',
      }}
    >
      <SwiperSlide>
        <Product size={{ width: '100%'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%', height: '350px' }}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%', height: '350px' }}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%', height: '350px' }}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%', height: '350px' }}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%', height: '350px' }}/>
      </SwiperSlide>  
    </Swiper>
    </div>  
  );
};

export default SwiperComponent;
