import React from 'react';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import Products from '../../../components/Products/Page'
import styles from '../../app/styles/Configuration/Configuration.module.scss'
import Image from 'next/image';
import hp from '../../../public/hp.svg'
import dell from '../../../public/Dell.svg'

const page = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <div className={styles.sidebar}>
                    <div className={styles.configutator_block}>
                        <p>Какую платформу предпочитаете :</p>
                        <div className={styles.brand}>
                            <div className={styles.brand__inp}>
                                <Image src={hp} alt='hp' width={50} height={50}/>
                                <input type="checkbox" />
                            </div>
                            <div className={styles.brand__inp}>
                                <Image src={dell} alt='dell' width={80} height={50}/>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.configutator_block}>
                        in
                    </div>

                    <p className={styles.find__server}>Найдено серверов : 9</p>
                    <div className={styles.sidebar__products}>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default page;