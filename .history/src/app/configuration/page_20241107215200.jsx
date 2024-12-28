'use client';
import React,{useState} from 'react';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import Products from '../../../components/Products/Page'
import styles from '../../app/styles/Configuration/Configuration.module.scss'
import Image from 'next/image';
import hp from '../../../public/hp.svg'
import dell from '../../../public/Dell.svg'

const page = () => {

    const values = [1, 2, 3, 4, 8, ];
  
    // Начальное значение - первое в массиве
    const [value, setValue] = useState(values[0]);
  
    // Функция для обновления значения в зависимости от ближайшего подходящего
    const handleChange = (event) => {
      const newValue = parseInt(event.target.value, 10);
  
      // Находим ближайшее допустимое значение
      const closestValue = values.reduce((prev, curr) => 
        Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
      );
  
      setValue(closestValue);
    };
    return (
        <>
            <Header/>
            <div className='container'>
                <div className={styles.sidebar}>
                    <div className={styles.configutator_block}>
                        <p>Какую платформу предпочитаете :</p>
                        <div className={styles.brand}>
                            <div className={styles.brand__inp}>
                                <Image src={hp} alt='hp' width={50} height={50}/>
                                <input type="checkbox" />
                            </div>
                            <div className={styles.brand__inp}>
                                <Image src={dell} alt='dell' width={80} height={50}/>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.configutator_block}>
                        <input 
                            type="range" 
                            min={1} 
                            max={16} 
                            step={1} // По умолчанию шаг 1, но будет корректироваться логикой
                            value={value}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                        <p>Selected Value: {value}</p>
                    </div>

                    <p className={styles.find__server}>Найдено серверов : 9</p>
                    <div className={styles.sidebar__products}>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default page;