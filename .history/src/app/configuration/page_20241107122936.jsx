import React from 'react';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import Products from '../../../components/Products/Page'
import { StyleRegistry } from 'styled-jsx';


const page = () => {
    return (
        <>
            <Header/>
            <div className="side__bar">
                <div className="container">
                    <Products/>
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
            <Footer/>
        </>
    );
};

export default page;