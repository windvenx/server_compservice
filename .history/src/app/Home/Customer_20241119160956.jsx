'use client'
import React from 'react';
import styles from '../styles/Home/Customer.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import Product from '../../../components/Products/Page'
import Image from 'next/image';

import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 


import warehouse from '../../../public/warehouse.svg'

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
                    <div className={styles.card__customer} >
                        <div className={styles.card__customer__top}>
                            <h4>Склад <span>в Бишкеке</span></h4>
                            <Image src={warehouse} alt='warehouse' width={50} height={60}/>
                        </div>
                        <p>Собственные складские остатки позволяют производить отгрузки на следующий рабочий день.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.card__customer} >
                        <div className={styles.card__customer__top}>
                            <h4>Склад <span>в Бишкеке</span></h4>
                            <Image src={warehouse} alt='warehouse' width={50} height={60}/>
                        </div>
                        <p>Собственные складские остатки позволяют производить отгрузки на следующий рабочий день.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={styles.card__customer} >
                        <div className={styles.card__customer__top}>
                            <h4>Склад <span>в Бишкеке</span></h4>
                            <Image src={warehouse} alt='warehouse' width={50} height={60}/>
                        </div>
                        <p>Собственные складские остатки позволяют производить отгрузки на следующий рабочий день.</p>
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
                </Swiper>
            </div>
        </section>
    );
};

export default Customer;