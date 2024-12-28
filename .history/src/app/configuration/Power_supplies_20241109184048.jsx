'use client';
import power_supplies from '../../../public/power-supplies.svg';
import styles from '../styles/Configuration/Power_supplies.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';

const PowerAcc = () => {
    const [selected, setSelected] = useState('option1'); 

    const [selectedProcessor, setSelectedProcessor] = useState(''); 

    const handlePlatformChange = (event) => {
        setSelected(event.target.value);
    };

    const handleProcessorChange = (event) => {
        setSelectedProcessor(event.target.value);
    };

    return (
        <>
            <div className={styles.configutator_block}>
                <Image src={power_supplies} width={80} height={80} alt="Power Supplies" />
                <div className={styles.power__select}>
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
                            <p>С горячей заменой (HOT PLUG)</p>
                        </div>
                    </div>

                    {selected === 'option1' && (
                        <select 
                            className={styles.select} 
                            name="processor" 
                            id="proc1" 
                            value={selectedProcessor} 
                            onChange={handleProcessorChange}
                        >
                            <option value="">Выбетите блок питания...</option>
                            <option value="600W">600W</option>
                            <option value="700W">700W</option>
                            <option value="800W">800W</option>
                            <option value="900W">900W</option>
                            <option value="800W">1000W</option>
                            <option value="900W">1200W</option>
                        </select>
                    )}

                    {selected === 'option2' && (
                        <select 
                            className={styles.select} 
                            name="processor" 
                            id="proc2" 
                            value={selectedProcessor} 
                            onChange={handleProcessorChange}
                        >
                            <option value="">Выбетите блок питания...</option>
                            <option value="Intel Xeon E-2244G">Intel Xeon E-2244G</option>
                        </select>
                    )}

                </div>
            </div>
        </>
    );
};

export default PowerAcc;
