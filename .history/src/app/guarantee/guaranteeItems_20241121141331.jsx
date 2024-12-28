import React from 'react';
import styles from '../styles/guarantee/guarantee__items.module.scss'

const guaranteeItems = () => {
    return (
        <div className={styles.guarantee__items}>
            <div className={styles.three-whales}>
                <div className={styles.reasons}>
                    <span>3</span>
                    <div className={styles.reasons__right}>
                        <span>Важных причин</span>
                    </div>
                </div>
            </div>

            <div className={styles.guaranty-term}>

            </div>
        </div>
    );
};

export default guaranteeItems;