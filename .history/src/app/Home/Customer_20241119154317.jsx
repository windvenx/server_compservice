'use client'
import React from 'react';
import styles from '../styles/Home/Customer.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import Product from '../../../components/Products/Page'

import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 

const Customer = ({padding}) => {
    return (
        <section className={styles.customer}>
            <div className='container'>
                <h2>СОВРЕМЕННЫЙ КЛИЕНТСКИЙ СЕРВИС</h2>
                <Swiper
                spaceBetween={0}
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
                    <div className={styles.card__customer}>
                        
                    </div>
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
            </div>
        </section>
    );
};

export default Customer;