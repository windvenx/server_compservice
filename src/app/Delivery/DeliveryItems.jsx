import React from 'react'
import styles from '../styles/Delivery.module.scss'


const DeliveryItems = () => {
  return (
      <div className={styles.delivery__items}>
                <div className={styles.delivery__item}>
                    <h4>Отгрузка товаров<span className={styles.delivery__item__yellow}> в течении суток*</span></h4>
                </div>
                <div className={styles.delivery__item}>
                    <h4>Доставка по Москве<span className={styles.delivery__item__blue}> бесплатная при заказе от 300 000 руб</span></h4>
                </div>
                <div className={styles.delivery__item}>
                    <h4>Возможность доставки <span className={styles.delivery__item__yellow}> в день обращения*</span></h4>
                </div>
                <div className={styles.delivery__item}>
                    <h4>Отправим ваш заказ<span className={styles.delivery__item__blue}> любой ТК*</span></h4>
                    <span>*Уточняйте у наших менеджеров</span>
                </div>
            </div>
  )
}

export default DeliveryItems
