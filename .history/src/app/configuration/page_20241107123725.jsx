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
                <div className="sidebar">
                    
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default page;