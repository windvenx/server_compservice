'use client';
import power_supplies from '../../../public/power-supplies.svg'
import styles from '../styles/Configuration/power-supplies.module.scss'
import React, { useState } from 'react';
import Image from 'next/image';

const PowerAcc = () => {
    return (
        <>
            <div className={styles.configutator_block}>
                <Image src={power_supplies} width={80} height={80} />
                <div className="radio__list"></div>
            </div>
        </>
    );
};

export default PowerAcc;