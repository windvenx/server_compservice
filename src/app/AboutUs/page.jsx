import React from 'react'
import SwiperCustomer from '../Home/Customer'
import styles from '../styles/AboutUs.module.scss'
import AboutAdvatages from './Advatages'

const page = () => {
  return (
    <>
        <div className="container">
            <div className={styles.about__title}>
                <h1>ООО «Комп Сервис»</h1>
                <span>
                    Профессиональный поставщик
                    USED & Refurbished IT оборудования
                </span>
            </div>
            <AboutAdvatages/>
            <SwiperCustomer/>
        </div>
    </>
  )
}

export default  page;