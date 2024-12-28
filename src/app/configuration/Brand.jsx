// Brand Component
import React, { useState } from 'react';
import styles from '../styles/Configuration/Brand.module.scss';
import dell from '../../../public/Dell.svg';
import hp from '../../../public/hp.svg';
import Image from 'next/image';

const Brand = () => {
    const [selectedBrand, setSelectedBrand] = useState("option1");

    const handlePlatformChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    return (
        <>
            <div className={styles.configutator_block}>
                <div className="configutator_block__wrapper">
                    <h4>Какую платформу предпочитаете:</h4>
                    <div className={styles.brand}>
                        <div className={styles.brand__inp}>
                            <Image src={hp} alt="hp" width={50} height={50} />
                            <input
                                type="radio"
                                id="hpOption"
                                name="brand"
                                value="option1"
                                checked={selectedBrand === 'option1'}
                                onChange={handlePlatformChange}
                            />
                            <label htmlFor="hpOption">HP</label>
                        </div>
                        <div className={styles.brand__inp}>
                            <Image src={dell} alt="dell" width={80} height={50} />
                            <input
                                type="radio"
                                id="dellOption"
                                name="brand"
                                value="option2"
                                checked={selectedBrand === 'option2'}
                                onChange={handlePlatformChange}
                            />
                            <label htmlFor="dellOption">Dell</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Brand;
