'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import Product from './Products/Page'

import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 


const SwiperComponent = ({padding}) => {
  return (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation ,Autoplay]}
        style={padding}
        autoplay={{
          delay: 3000,  
          disableOnInteraction: false
        }}
      >
        
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
