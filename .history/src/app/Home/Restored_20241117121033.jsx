import React from 'react';
import server__img from '../../../public/server-image-1.png'
import Image from 'next/image';
import styles from '../styles/Home/Restored.module.scss'
import Link from 'next/link';
import Dell_emc from '../../../public/Dell-EMC-Logo.svg'
import arista from '../../../public/arista.png'
import intel from '../../../public/Intel.svg'
import storage

const Restored = () => {
    return (
        <section className={styles.restored}>
            <div className="container">
                <div className={styles.restored__wrapper}>
                    <div className={styles.restored__top}> 
                        <Image src={server__img} width={605} height={418}/>
                        <div className={styles.restored__text}>
                            <h3>Почему <span>клиенты выбирают</span> серверы б/у?</h3>
                            <p>В современных условиях корпоративный сегмент считает каждый рубль и покупка нового сервера может сильно ударить по бюджету. Чтобы существенно сэкономить деньги и инвестировать их в развитие компании, всё чаще и чаще отечественные предприятия покупают б/у серверы, которые ни чуть не хуже новых, а самое главное – их стоимость на 80% ниже.</p>
                            <p>При этом не нужно бояться покупать бывшие в употреблении серверы. Наша компания гарантирует качество и работоспособность всего поставляемого нами серверного и сетевого оборудования, которое обязательно проходит многоступенчатое тестирование перед отгрузкой клиентам в России. Именно поэтому мы уверены в своей технике и даем собственную гарантию от 2 лет на все серверы в сборе, а на отдельные комплектующие мы даём гарантию 3 месяца.</p>
                            <Link href={'/guarantee'}>  Узнать больше о нашей гарантии</Link>
                        </div>
                    </div>

                    <div className={styles.restored__bottom}>
                        <Image src={Dell_emc}/>
                        <Image src={arista} width={125} height={25}/>
                        <Image src={intel} width={125} height={35}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Restored;