import React from 'react';
import server__img from '../../../public/server-image-1.png'
import Image from 'next/image';
import styles from '../styles/Home/Restored.module.scss'

const Restored = () => {
    return (
        <section className={styles.restored}>
            <div className="container">
                <div className="restored__top"> 
                    <Image src={server__img} width={515} height={328}/>
                    <div className="restored__text">
                        <h3>Почему <span>клиенты выбирают</span> серверы б/у?</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Restored;