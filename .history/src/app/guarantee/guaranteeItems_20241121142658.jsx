import React from 'react';
import styles from '../styles/guarantee/guarantee__items.module.scss'

const guaranteeItems = () => {
    return (
        <div className={styles.guarantee__items}>
            <div className={styles.three__whales}>
                <div className={styles.reasons}>
                    <span>3</span>
                    <div className={styles.reasons__right}>
                        <span>Важных причин</span>
                        <h4>в основе гарантии</h4>
                    </div>
                </div>
                <div className={styles.three__whales__card}></div>
            </div>

            <div className={styles.guaranty__term}>

            </div>
        </div>
    );
};

export default guaranteeItems;