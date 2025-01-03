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
import proc from '../../../public/processor-icon.svg'

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
            
            <div className="configutator_block__wrapper">
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
                <Image src={dell} alt="dell" width={80} height={50}  />
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
          </div>

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

          <div className={styles.configutator_block}>
            <Image src={proc} width={65} height={65} alt='proc'/>
            <div className="configutator_block__right">
                <h4>Процессор :</h4>
                {/* <select name="ldkfl" id="proc">
                    <option defaultValue="Intel Xeon Scalable" selected>Intel Xeon Scalable</option>
                    <option defaultValue="Intel Xeon E-2200 ">Intel Xeon E-2200 </option>
                </select> */}
                <details class={styles.custom-select}>
  <div class={styles.radios}>
    <input type="radio" className={styles.input} name="item" id="default" title="Auswählen..." checked/>
    <input type="radio" className={styles.input} name="item" id="item1" title="Item 1"/>
    <input type="radio" className={styles.input} name="item" id="item2" title="Item 2"/>
    <input type="radio" className={styles.input} name="item" id="item3" title="Item 3"/>
    <input type="radio" className={styles.input} name="item" id="item4" title="Item 4"/>
    <input type="radio" className={styles.input} name="item" id="item5" title="Item 5"/>
  </div>
  <ul class={styles.list}>
    <li className={styles.li}>
      <label for="item1" className={styles.label}>
        Item 1
        <span></span>
      </label>
    </li >
    <li className={styles.li}>
      <label for="item2" className={styles.label}>Item 2</label>
    </li>
    <li className={styles.li}>
      <label for="item3" className={styles.label}>Item 3</label>
    </li>
    <li className={styles.li}>
      <label for="item4" className={styles.label}>Item 4</label>
    </li>
    <li className={styles.li}>
      <label for="item5" className={styles.label}>Item 5</label>
    </li>
  </ul>
</details>

            </div>
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
