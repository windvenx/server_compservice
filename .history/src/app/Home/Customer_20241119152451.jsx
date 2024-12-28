import React from 'react';
import styles from '../styles/Home/Customer.module.scss'

const Customer = () => {
    return (
        <>
            <h2>СОВРЕМЕННЫЙ КЛИЕНТСКИЙ СЕРВИС</h2>
            




    <div className='container'>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      scrollbar={{draggable:true}}
      modules={[Pagination,Navigation,Autoplay]}
      style={padding}
      autoplay={{
        delay: 3000,            
        disableOnInteraction: false
      }}
    >
      <SwiperSlide>
        <Product size={{ width: '100%'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%' }}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%' }}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%' }}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%' }}/>
      </SwiperSlide>
      <SwiperSlide>
        <Product size={{ width: '100%' }}/>
      </SwiperSlide>  
    </Swiper>
    

        </>
    );
};

export default Customer;