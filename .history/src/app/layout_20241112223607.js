'use client'; // Указывает, что этот компонент должен рендериться только на клиенте

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Не забудьте импортировать стили
import { Navigation, Pagination, Autoplay } from 'swiper';
import Products from '../../components/Products/Page'

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
            <Products/>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
