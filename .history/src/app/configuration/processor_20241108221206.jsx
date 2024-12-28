'use client';
import proc from '../../../public/processor-icon.svg'
import styles from '../styles/Configuration/Configuration.module.scss'
import React, { useState } from 'react';
import Image from 'next/image';

const Processor = () => {
    // Инициализация состояния с дефолтным значением "Выберите процессор"
    const [selectedProcessor, setSelectedProcessor] = useState('Выберите процессор');
    const [selectedSubsection, setSelectedSubsection] = useState(''); // Дефолтное значение для подраздела
  
    const handleSelectChange = (event) => {
        setSelectedProcessor(event.target.value);
        setSelectedSubsection(''); // Сбрасываем подраздел при смене процессора
    };
  
    const handleSubsectionChange = (event) => {
        setSelectedSubsection(event.target.value);
    };

    return (
        <>
            <div className={styles.configutator_block}>
                <Image src={proc} w
