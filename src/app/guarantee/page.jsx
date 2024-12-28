import React from 'react';
import styles from '../styles/guarantee/guarantee__items.module.scss'
import GuaranteeItems from './guaranteeItems';
import GuaranteeStages from './guaranteeStages';

const Page = () => {
    return (
        <section className={styles.guarantee__top}>
          <div className="container">
            <div className={styles.guarantee__title}>
              <h1>ГАРАНТИЯ</h1>
              <p>На всё оборудование предоставляется гарантия от компании Сервер Гейт, несмотря на то, что многие вендоры уже не оказывают постгарантийное обслуживание даже новых серверов.</p>
            </div>
            <GuaranteeItems/>
            <GuaranteeStages/>
          </div>  
        </section>
    );
};

export default Page;