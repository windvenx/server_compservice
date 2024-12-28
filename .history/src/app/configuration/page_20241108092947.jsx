'use client';
import React, { useState } from 'react';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import Products from '../../../components/Products/Page';
import styles from '../../app/styles/Configuration/Configuration.module.scss';
import Image from 'next/image';
import hp from '../../../public/hp.svg';
import dell from '../../../public/Dell.svg';

const Page = () => {
  const values = [1, 2, 3, 4, 8]; 
  const [value, setValue] = useState(values[0]);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    const closestValue = values.reduce((prev, curr) =>
      Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
    );
    setValue(closestValue);
  };

  const [selected, setSelected] = useState(null);

  const handlePlatformChange = (event) => {
    setSelected(event.target.value); 
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.sidebar}>
          <div className={styles.configutator_block}>
            <h4>Какую платформу предпочитаете:</h4>
            <div className={styles.brand}>
              <div className={styles.brand__inp}>
                <Image src={hp} alt="hp" width={50} height={50} />
                <input
                  type="radio"
                  id="option1"
                  name="platform"
                  value="option1"
                  checked={selected === 'option1'}
                  onChange={handlePlatformChange}
                />
                <label htmlFor="option1">HP</label>
              </div>
              <div className={styles.brand__inp}>
                <Image src={dell} alt="dell" width={80} height={50} />
                <input
                  type="radio"
                  id="option2"
                  name="platform"
                  value="option2"
                  checked={selected === 'option2'}
                  onChange={handlePlatformChange}
                />
                <label htmlFor="option2">Dell</label>
              </div>
            </div>
          </div>

          <div className={styles.configutator_block}>
            <h4>Оперативная память:</h4>
            <input
              type="range"
              min={Math.min(...values)} // Устанавливаем минимум как минимальное значение в массиве
              max={Math.max(...values)} 
              step={1}
              value={value}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
            <p>Оперативная память: {value}ГБ</p>
          </div>

          <p className={styles.find__server}>Найдено серверов: 9</p>
          <div className={styles.sidebar__products}>
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
