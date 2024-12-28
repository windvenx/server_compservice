import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Configuration/Ram.module.scss';
import ram from '../../../public/ram.png';

const Ram = () => {
  // Массив доступных значений для оперативной памяти
  const values = [1, 2, 3, 4, 8, 16, 32, 64, 128, 256]; 
  const [value, setValue] = useState(values[0]);

  // Обработчик изменения в select
  const handleSelectChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setValue(newValue);
  };

  // Обработчик изменения в ползунке
  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    // Найдем ближайшее значение из массива
    const closestValue = values.reduce((prev, curr) =>
      Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
    );
    setValue(closestValue);
  };

  return (
    <div className={styles.configutator_block}>
      <Image src={ram} width={100} height={100} alt="ram" />
      <div className={styles.configutator_block__right}>
        <div className="configutator_block__right__top">
          <h4>Оперативная память:</h4>
          <select 
            className={styles.select} 
            name="ram" 
            id="ram" 
            value={value} // синхронизация с состоянием
            onChange={handleSelectChange}
          >
            {values.map((val) => (
              <option key={val} value={val}>
                {val} ГБ
              </option>
            ))}
          </select>
        </div>

        <input
          type="range"
          min={Math.min(...values)} 
          max={Math.max(...values)} 
          step={1}
          value={value}
          onChange={handleRangeChange}
          style={{ width: '100%' }}
        />

        <p>Оперативная память: {value} ГБ</p>
      </div>
    </div>
  );
};

export default Ram;
