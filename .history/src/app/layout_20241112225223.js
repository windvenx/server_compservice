'use client'; // Указывает, что этот компонент должен рендериться только на клиенте

ч
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
