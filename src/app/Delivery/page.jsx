import React from 'react'
import styles from '../styles/Delivery.module.scss'
import DeliveryItems from './DeliveryItems'
import DeliveryUps from './DeliveryUps'

const  page = () => {
  return (
    <section className={styles.delivery}> 
          <div className="container">
            <div className={styles.guarantee__title}>
              <h1>Доставка</h1>
              <p>Мы заботимся о наших клиентах и предлагаем им только лучшие условия доставки по всей России и странам ЕАЭС!</p>
            </div>
            <div className={styles.delivery__block}>
                <DeliveryItems/>
                <DeliveryUps/>
            </div>
          </div>
    </section>
  )
}

export default page;