import React from 'react';
import styles from '../../styles/Aside.module.scss'

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.sb__filter__sec}>
                <p>Производитель</p>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>HP</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>Dell</p>
                </div>
            </div>

            <div className={styles.sb__filter__sec}>
                <p>Форм-Фактор</p>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>1U</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>2U</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>4U</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>Tower</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>Blade</p>
                </div>
            </div>
                
            <div className={styles.sb__filter__sec}>
                <p>Семейство процессоров</p>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>Intel Xeon E5-2600v1/v2</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>Intel Xeon E5-2600v3/v4</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>Intel Xeon Scalable</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>Intel Xeon E Processors</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>Intel Xeon E3-1200v5/v6</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>Intel Xeon E5-2400v1/v2</p>
                </div>
            </div>

            <div className={styles.sb__filter__sec}>
                <p>Тип памяти</p>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>DDR3</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>DDR4</p>
                </div>
            </div>

            <div className={styles.sb__filter__sec}>
                <p>Тип шасси</p>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>SSF</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>LFF</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>NVME</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>SSD</p>
                </div>
                
            </div>

            <div className={styles.sb__filter__sec}>
                <p>Доступность</p>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>В наличии</p>
                </div>
                <div className={styles.check__label}>
                    <input type="checkbox" />
                    <p>С ожиданием</p>
                </div>
            </div>

            <button>ПРИМЕНИТЬ</button>
        </aside>
    );
};

export default Aside;