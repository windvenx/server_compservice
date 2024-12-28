import React,{useState  } from 'react';
import Image from 'next/image';
import styles from '../styles/Configuration/Ram.module.scss'
import ram from '../../../public/ram.png'


const Ram = () => {
    const values = [1, 2, 3, 4, 8, 16, 32, 64]; 
  const [value, setValue] = useState(values[0]);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    const closestValue = values.reduce((prev, curr) =>
      Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
    );
    setValue(closestValue);
  };

    return (
        <div className={styles.configutator_block}>
          <Image src={ram} width={100} height={100} alt='ram'/>
            <div className={styles.configutator_block__right}>
                <div className="configutator_block__right__top">
                    <h4>Оперативная память:</h4>
                    <select className={styles.select} name="processor" id="proc"  >
                        <option value="Выберите процессор">Выберите процессор</option>
                        <option value="Intel Xeon Scalable">Intel Xeon Scalable</option>
                        <option value="Intel Xeon E-2200">Intel Xeon E-2200</option>
                    </select>
                </div>
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
    );
};

export default Ram;