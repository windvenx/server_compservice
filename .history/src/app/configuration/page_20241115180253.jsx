'use client';
import React from 'react';
import Products from '../../../components/Products/Page';
import styles from '../styles/Configuration/Configuration.module.scss';
import Ram from './Ram';
import Processor from './processor';
import PowerAcc from './Power_supplies';
import Brand from './Brand';
import SwiperComponent from '../../../components/SwiperComponent';

const Configuration = () => {
  return (
    <div className="container">
      <div className={styles.sidebar}>

        <Brand />
        <Ram />
        <Processor />
        <PowerAcc />
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
  );
};

export default Configuration;
