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
                        <select className={styles.select} name="processor" id="proc" value={selectedProcess
