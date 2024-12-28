// PowerAcc Component
import React, { useState } from 'react';
import power_supplies from '../../../public/power-supplies.svg';
import styles from '../styles/Configuration/Power_supplies.module.scss';
import Image from 'next/image';

const PowerAcc = () => {
    const [selectedPowerAcc, setSelectedPowerAcc] = useState('option1');
    const [selectedProcessor, setSelectedProcessor] = useState('');

    const handlePlatformChange = (event) => {
        setSelectedPowerAcc(event.target.value);
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
                                id="nonHotPlug"
                                name="powerAcc"
                                value="option1"
                                checked={selectedPowerAcc === 'option1'}
                                onChange={handlePlatformChange}
                            />
                            <p>Без горячей замены (NON-HOT PLUG)</p>
                        </div>
                        <div className={styles.radio}>
                            <input
                                type="radio"
                                id="hotPlug"
                                name="powerAcc"
                                value="option2"
                                checked={selectedPowerAcc === 'option2'}
                                onChange={handlePlatformChange}
                            />
                            <p>С горячей заменой (HOT PLUG)</p>
                        </div>
                    </div>

                    {selectedPowerAcc === 'option1' && (
                        <select
                            className={styles.select}
                            name="processor"
                            id="proc1"
                            value={selectedProcessor}
                            onChange={handleProcessorChange}
                        >
                            <option value="">Выберите блок питания...</option>
                            <option value="600W">600W</option>
                            <option value="700W">700W</option>
                            <option value="800W">800W</option>
                            <option value="900W">900W</option>
                            <option value="1000W">1000W</option>
                            <option value="1200W">1200W</option>
                        </select>
                    )}

                    {selectedPowerAcc === 'option2' && (
                        <select
                            className={styles.select}
                            name="processor"
                            id="proc2"
                            value={selectedProcessor}
                            onChange={handleProcessorChange}
                        >
                            <option value="">Выберите блок питания...</option>
                            <option value="900W">900W</option>
                            <option value="1000W">1000W</option>
                            <option value="1200W">1200W</option>
                            <option value="1400W">1400W</option>
                            <option value="1600W">1600W</option>
                            <option value="2000W">2000W</option>
                        </select>
                    )}
                </div>
            </div>
        </>
    );
};

export default PowerAcc;
