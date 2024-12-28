import React from 'react'
import styles from '../styles/AboutUs.module.scss'
import warehouse from '../../../public/warehouse.svg'
import Image from 'next/image'

const page = () => {
  return (
    <section className={styles.about__advatages}>
        <div className={styles.advatage__card}>
          <Image src={warehouse} alt='warehouse' width={50} height={60}/>
          <p>Мы осуществляем <span>стабильные поставки</span> серверного оборудования</p>
        </div>
        <div className={styles.advatage__card}>
          <Image src={warehouse} alt='warehouse' width={50} height={60}/>
          <p>Исключая посредников, мы даем  <span>лучшее предложение</span> клиенту</p>
        </div>
        <div className={styles.advatage__card}>
          <Image src={warehouse} alt='warehouse' width={50} height={60}/>
          <p>Поставку оборудования под заказ осуществляем <span>а рекордные 30 дней</span></p>
        </div>
        <div className={styles.advatage__card}>
          <Image src={warehouse} alt='warehouse' width={50} height={60}/>
          <p>Имеем <span>собственный технический отдел </span>с опытными инженерами</p>
        </div>

        <div className={styles.advatage__card}>
          <Image src={warehouse} alt='warehouse' width={50} height={60}/>
          <p>Мы предлагаем <span>огромный выбор </span>готового оборудования</p>
        </div>
        <div className={styles.advatage__card}>
          <Image src={warehouse} alt='warehouse' width={50} height={60}/>
          <p>Мы готовы поставить оборудование <span>по вашему запросу</span></p>
        </div>
        
    </section>
  )
}

export default  page;