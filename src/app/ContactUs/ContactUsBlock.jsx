import React from 'react'
import Map from './map';
import styles from '../styles/ContactUs.module.scss'
import compas from '../../../public/compas.svg'
import whatsapp from '../../../public/whatsapp_contactus.svg'
import time from '../../../public/time.svg'
import massage from '../../../public/massage.svg'

import Image from 'next/image';

const  page = () => {
  return (
    <div className={styles.contact__us__block}>
        <div className={styles.contact__us__item}>
            <Image src={compas} width={20} height={20}/>
            <p>117420, г. Москва,ул. Профсоюзная,д. 57, оф. 700</p>
        </div>
        <div className={styles.contact__us__line}></div>
        <div className={styles.contact__us__item}>
            <Image src={whatsapp} width={20} height={20}/>
            <p>+7 495 189-74-90</p>
        </div>
        <div className={styles.contact__us__line}></div>
        <div className={styles.contact__us__item}>
            <Image src={time} width={20} height={20}/>
            <p>Выдача заказов: с 9 до 19 часов,с ПН по ПТ</p>
        </div>
        <div className={styles.contact__us__line}></div>
        <div className={styles.contact__us__item}>
            <Image src={massage} width={20} height={20}/>
            <p>1@servergate.ru

(для бухгалтерских вопросов)</p>
        </div>
    </div>
  )
}

export default page;