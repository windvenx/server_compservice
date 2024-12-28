'use client';
import power_supplies from '../../../public/power-supplies.svg'
import styles from '../styles/Configuration/Power_supplies.module.scss'
import React, { useState } from 'react';
import Image from 'next/image';

const PowerAcc = () => {

    const [selected, setSelected] = useState(null);

    const handlePlatformChange = (event) => {
      setSelected(event.target.value); 
    };
  
    return (
        <>
            <div className={styles.configutator_block}>
                <Image src={power_supplies} width={80} height={80} />
                <div className="power__select>
                <div className={styles.radio__list}>
                    <div className={styles.radio}>
                        <input
                            type="radio"
                            id="option1"
                            name="platform"
                            value="option1"
                            checked={selected === 'option1'}
                            onChange={handlePlatformChange}
                        />
                        <p>Без горячей замены (NON-HOT PLUG)</p>
                    </div>
                    <div className={styles.radio}>
                        <input
                            type="radio"
                            id="option2"
                            name="platform"
                            value="option2"
                            checked={selected === 'option2'}
                            onChange={handlePlatformChange}
                        />
                        <p>С горячей заменой (HOT PLUG) </p>
                    </div>  
                </div>
                <select className={styles.select} name="processor" id="proc">
                  <option value="Intel Xeon Scalable">Intel Xeon Scalable</option>
                  <option value="Intel Xeon E-2200">Intel Xeon E-2200</option>
                </select>
                </div>
            </div>
        </>
    );
};

export default PowerAcc;