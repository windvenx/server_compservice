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



  //
  const [selected, setSelected] = useState(null);

  const handlePlatformChange = (event) => {
    setSelected(event.target.value); 
  };




  const [selectedProcessor, setSelectedProcessor] = useState('Intel Xeon Scalable');
  const [selectedSubsection, setSelectedSubsection] = useState(null); // Храним выбранную радиокнопку

  // Функция для изменения выбранной опции процессора
  const handleSelectChange = (event) => {
    setSelectedProcessor(event.target.value);
    setSelectedSubsection(null); // Сбрасываем выбор подраздела при смене процессора
  };

  // Функция для изменения выбранного подраздела
  const handleSubsectionChange = (event) => {
    setSelectedSubsection(event.target.value); // Устанавливаем выбранный подраздел
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
                
      <select name="processor" id="proc" value={selectedProcessor} onChange={handleSelectChange}>
        <option value="Intel Xeon Scalable">Intel Xeon Scalable</option>
        <option value="Intel Xeon E-2200">Intel Xeon E-2200</option>
      </select>

      {/* Подразделы, отображаемые в зависимости от выбранной опции */}
      {selectedProcessor === 'Intel Xeon Scalable' && (
        <div>
          <h3>Подразделы для Intel Xeon Scalable</h3>
          <div>
            <label>
              <input
                type="radio"
                name="subsection" // Группировка радиокнопок
                value="subsection1"
                checked={selectedSubsection === 'subsection1'}
                onChange={handleSubsectionChange}
              />
              1: 1
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection2"
                checked={selectedSubsection === 'subsection2'}
                onChange={handleSubsectionChange}
              />
              Подраздел 2: Y модель
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection3"
                checked={selectedSubsection === 'subsection3'}
                onChange={handleSubsectionChange}
              />
              Подраздел 3: Z модель
            </label>
          </div>
        </div>
      )}

      {selectedProcessor === 'Intel Xeon E-2200' && (
        <div>
          <h3>Подразделы для Intel Xeon E-2200</h3>
          <div>
            <label>
              <input
                type="radio"
                name="subsection" // Группировка радиокнопок
                value="subsection1"
                checked={selectedSubsection === 'subsection1'}
                onChange={handleSubsectionChange}
              />
              Подраздел 1: A модель
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection2"
                checked={selectedSubsection === 'subsection2'}
                onChange={handleSubsectionChange}
              />
              Подраздел 2: B модель
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="subsection"
                value="subsection3"
                checked={selectedSubsection === 'subsection3'}
                onChange={handleSubsectionChange}
              />
              Подраздел 3: C модель
            </label>
          </div>
        </div>
      )}
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
