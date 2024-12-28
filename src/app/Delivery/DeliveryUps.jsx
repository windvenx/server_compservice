import React from 'react'
import styles from '../styles/Delivery.module.scss'


const DeliveryUps = () => {
  return (
    <div className={styles.delivery__ups}>
        <div className={styles.delivery__ups__top}>
            <h3>Доставка по России</h3>
            <div className={styles.delivery__ups__top__text}>
                <div className={styles.delivery__ups__top__text__item}>
                    <span>Средний срок доставки</span>
                    <p>2-3 рабочих дня</p>
                </div>
                <div className={styles.delivery__ups__top__text__item}>
                    <span>Способ доставки</span>
                    <p>АВИА</p>
                </div>
                <div className={styles.delivery__ups__top__text__item}>
                    <span>Место доставки</span>
                    <p>Офис клиента</p>
                </div>
            </div>
        </div>
        <div className={styles.delivery__ups__bottom}>
            <p>Эксклюзивные партнерские условия</p>
            <span>Выгодно! Быстро! Надежно!</span>
        </div>
    </div>
  )
}

export default DeliveryUps;
