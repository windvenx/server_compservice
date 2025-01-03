'use client';
import React, { useState } from 'react';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import Products from '../../../components/Products/Page';
import styles from '../../app/styles/Configuration/Configuration.module.scss';
import Image from 'next/image';
import hp from '../../../public/hp.svg';
import dell from '../../../public/Dell.svg';
import ram from '../../../public/ram.png'
import Processor from './processor'
import PowerAcc from './PowerAcc';
import Brand from './Brand';


const Page = () => {

  const values = [1, 2, 3, 4, 5, 6, 7, 8]; 
  const [value, setValue] = useState(values[0]);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    const closestValue = values.reduce((prev, curr) =>
      Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
    );
    setValue(closestValue);
  };



  //
  




  const [selectedProcessor, setSelectedProcessor] = useState('Intel Xeon Scalable');
  const [selectedSubsection, setSelectedSubsection] = useState(null); 

  const handleSelectChange = (event) => {
    setSelectedProcessor(event.target.value);
    setSelectedSubsection(null); 
  };

  const handleSubsectionChange = (event) => {
    setSelectedSubsection(event.target.value); 
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.sidebar}>
          <

          <div className={styles.configutator_block}>
          <Image src={ram} width={100} height={100} alt='ram'/>
            <div className={styles.configutator_block__right}>
                
                <h4>Оперативная память:</h4>
                    <input
                        type="range"
                        min={Math.min(...values)} 
                        max={Math.max(...values)} 
                        step={1}
                        value={value}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    />
                <p>Оперативная память: {value}ГБ</p>
            </div>
          </div>

          <Processor/>

          <PowerAcc/>

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
