import React from 'react';
import server__img from '../../../public/server-image-1.png'
import Image from 'next/image';
import styles from '../styles/Home/Restored.module.scss'

const Restored = () => {
    return (
        <section className={styles.restored}>
            <div className="container">
                <div className="restored__top"> 
                    <Image src={server__img}/>
                    
                </div>
            </div>
        </section>
    );
};

export default Restored;