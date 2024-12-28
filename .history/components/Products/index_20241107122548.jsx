import React from 'react';
import styles from '../../src/app/styles/'
import product__logo from '../../public/product.jpeg'
import Image from 'next/image';
import processor__logo from '../../public/processor.png'

const index = () => {
    return (
        
            <div className={styles.card__item}>
                <Image src={product__logo} className={styles.product__img} alt="logo"  height={224.39}/>
                <div className={styles.product__text}>
                    <div className={styles.product__text__top}>
                        <h3>DELL PowerEdge R430</h3>
                        <span>used / refurbished</span>
                    </div>
                    <div className={styles.product__text__bottom}>
                        <Image src={processor__logo} width={28} height={28} alt='processor'/>
                        <p>1U <span>Rackmount</span></p>
                    </div>
                    <div className={styles.product__text__bottom}>
                        <Image src={processor__logo} width={28} height={28} alt='processor'/>
                        <p>2 x Intel Xeon E5-2600v3 / Intel Xeon E5-2600v4 серии</p>
                    </div>
                    <div className={styles.product__text__bottom}>
                        <Image src={processor__logo} width={28} height={28} alt='processor'/>
                        <p>до 384 GB DDR4 <span>(12 модулей)</span></p>
                    </div>
                    <div className={styles.product__text__bottom}>
                        <Image src={processor__logo} width={28} height={28} alt='processor'/>
                        <p>4LFF / 8SFF <span>(Hot Swap)</span></p>
                    </div>
                    <div className={styles.product__text__bottom}>
                        <Image src={processor__logo} width={28} height={28} alt='processor'/>
                        <p>2 x PSU<span> (Hot Plug) </span></p>
                    </div>
                </div>
                <button><span>от</span> 41 457 ₽</button>
                <button className={styles.button}>Сконфигурировать</button>
            </div>
        
    );
};

export default index;