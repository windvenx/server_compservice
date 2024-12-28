'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Product from './Products/Page'

import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 

const SwiperComponent = () => {
  const swiperRef = useRef(null); // Ref for controlling the swiper externally

  return (
    <div className="swiper-container">
      {/* External Navigation (Outside of Swiper) */}
      <div className="external-navigation">
        <button onClick={() => swiperRef.current.swiper.slidePrev()}>Prev</button>
        <button onClick={() => swiperRef.current.swiper.slideNext()}>Next</button>
      </div>

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={3}
        navigation={false}  // Disable the default navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-[80%]"
        modules={[Pagination, Navigation]}
        style={{
          '--swiper-navigation-color': '#f4f4f4',
        }}
      >
        {/* Product Slides */}
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="product-slide">
              <Product />
              
              {/* Internal Navigation (Inside the Slide) */}
              <div className="internal-navigation">
                <button onClick={() => swiperRef.current.swiper.slidePrev()}>Prev</button>
                <button onClick={() => swiperRef.current.swiper.slideNext()}>Next</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
