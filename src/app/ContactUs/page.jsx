import React from 'react'
import Map from './map';
import styles from '../styles/ContactUs.module.scss'
import ContactUsBlock from './ContactUsBlock'

const  page = () => {
  return (
    <section className={styles.contact__us}> 
          <div className="container">
              <div className={styles.contactus__title}>
                <h1>Контактная Информация</h1>
                <p>Уважаемые клиенты и партнеры!</p>
                <p>Двери нашего офиса открыты для Вас ежедневно по рабочим дням <span> с 09-00 до 19-00.</span></p>
              </div>
              <ContactUsBlock/>
              <h2>Расположение</h2>
              <Map/>
          </div>
    </section>
  )
}

export default page;