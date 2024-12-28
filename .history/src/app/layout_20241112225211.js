'use client'; // Указывает, что этот компонент должен рендериться только на клиенте

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Импортируем стили
import { Navigation, Pagination, Autoplay } from 'swiper';

// Динамически загружаем компонент Products, чтобы избежать проблем с SSR
import dynamic from 'next/dynamic';

const Products = dynamic(() => import('../...'), {
  ssr: false, // Отключаем серверный рендеринг для этого компонента
});

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
        <SwiperSlide>
          {/* Динамически загруженный компонент Products */}
          <Products />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
