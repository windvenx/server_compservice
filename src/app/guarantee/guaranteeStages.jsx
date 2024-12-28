import React from 'react'
import styles from '../styles/guarantee/guaranteeStage.module.scss'

export default function guaranteeStages() {
  return (
    <section className={styles.guarantee__stages}>
        <div className={styles.guarantee__stage}>
            <h2 className={styles.stage__title}>1 <span>этап</span><p>Обращение</p></h2>
            <p>По всем гарантийным обращениям обработка заявок производится 7 дней в неделю 365 дней в году.</p>
        </div>
        <div className={styles.guarantee__stage}>
            <h2 className={styles.stage__title}>2 <span>этап</span><p>Диагностика</p></h2>
            <p>Наши специалисты используют все доступные способы диагностики, в том числе удаленный доступ и тесная работа с инженерной службой заказчика.</p>
        </div>
        <div className={styles.guarantee__stage}>
            <h2 className={styles.stage__title}>3 <span>этап</span><p>Гарантийный случай</p></h2>
            <p>По результатам диагностики принимается решение по замене отдельных узлов или сервера в целом.</p>
        </div>
        <div className={styles.guarantee__stage}>
            <h2 className={styles.stage__title}>4 <span>этап</span><p>Замена оборудования</p></h2>
            <p>Поставка оборудования и частей на замену осуществляется в течение 1-5 рабочих дней в зависимости от удаленности клиента.</p>
        </div>
    </section>
  )
}
