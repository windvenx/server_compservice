import React from 'react';
import styles from '../styles/guarantee/guarantee__items.module.scss'
import Image from 'next/image';
import statistic__logo from '../../../public/statistics.svg'

const guaranteeItems = () => {
    return (
        <div className={styles.guarantee__items}>
            <div className={styles.three__whales}>
                <div className={styles.reasons}>
                    <span>3</span>
                    <div className={styles.reasons__right}>
                        <span>Важных причин</span>
                        <h4>в основе гарантии</h4>
                    </div>
                </div>

                <div className={styles.guarantee__line}></div>

                <div className={styles.three__whales__cards}>
                    <div className={styles.three__whales__card}>
                        <p>Все оборудование
                        перед отгрузкой проходит <span>тщательную подготовку
                        и стресс-тестирование</span></p>
                        <Image src={statistic__logo} alt='statistic' width={65} height={60}/>
                    </div>

                    <div className={styles.guarantee__line}></div>

                    <div className={styles.three__whales__card}>
                        <p>Процент гарантийных
                        обращений у нас,
                        это график, который <span>постоянно стремится к нулю</span></p>
                        <Image src={statistic__logo} alt='statistic' width={65} height={60}/>
                    </div>

                    <div className={styles.guarantee__line}></div>

                    <div className={styles.three__whales__card}>
                        <p>Если по каким-то причинам возник гарантийный случай, наши специалисты приложат все усилия для его быстрого и качественного устранения.<span>Наши специалисты приложат все
                        ведомые и неведомые усилия
</span></p>
                        <Image src={statistic__logo} alt='statistic' width={65} height={60}/>
                    </div>
                </div>
            </div>

            <div className={styles.guaranty__term}>

            </div>
        </div>
    );
};

export default guaranteeItems;