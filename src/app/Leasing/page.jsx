import React from 'react'
import styles from '../styles/Leasing.module.scss'
import RaidCalc from './RaidCalc/page'
import RaidResult from './RaidResult'

const Leasing = () => {
  return (
    <section className={styles.leasing}>
        <div className="container">
            <h1>Калькулятор <span>RAID</span></h1>
            <div className={styles.leasing__block}>
                <RaidCalc/>
                <RaidResult/>
            </div>
        </div>
    </section>
  )
}

export default Leasing