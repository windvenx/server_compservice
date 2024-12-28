'use client';
import proc from '../../../public/processor-icon.svg'
import styles from '../styles/Configuration/Configuration.module.scss'
import React, { useState } from 'react';
import Image from 'next/image';

const Processor = () => {
    // Инициализация состояния с дефолтным значением
    const [selectedProcessor, setSelectedProcessor] = useState('Intel Xeon Scalable'); // Дефолтное значение
    
    const handleSelectChange = (event) => {
        setSelectedProcessor(event.target.value); // Обновляем состояние при изменении выбора
    };

    return (
        <>
            <div className={styles.configutator_block}>
                <Image src={proc} width={65} height={65} alt='proc'/>
                <div className={styles.proc_block__right}>
                    <div className={styles.proc_block__right__left}>
                        <h4>Процессор :</h4>
                        <select className={styles.select} name="processor" id="proc" value={selectedProcessor} onChange={handleSelectChange}>
                            <option value="Intel Xeon Scalable">Intel Xeon Scalable</option>
                            <option value="Intel Xeon E-2200">Intel Xeon E-2200</option>
                        </select>
                    </div>

                    {/* Если выбран процессор Intel Xeon Scalable, то показываем соответствующие подразделы */}
                    {selectedProcessor === 'Intel Xeon Scalable' && (
                        <div>
                            <h3>Подразделы для Intel Xeon Scalable</h3>
                            {/* Здесь можно добавить элементы для подкатегорий */}
                        </div>
                    )}

                    {/* Если выбран процессор Intel Xeon E-2200, то показываем соответствующие подразделы */}
                    {selectedProcessor === 'Intel Xeon E-2200' && (
                        <div>
                            <h3>Подразделы для Intel Xeon E-2200</h3>
                            {/* Здесь можно добавить элементы для подкатегорий */}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Processor;
