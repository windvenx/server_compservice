import React from 'react';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import Products from '../../../components/Products/Page'
import styles from '../../app/styles/Products.module.scss'

const page = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <div className={styles.sidebar}>
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