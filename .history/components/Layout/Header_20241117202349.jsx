import React from 'react';
import styles from '../../src/app/styles/Layout/Header.module.scss'
import logo from '../../public/next.svg'
import Image from 'next/image';
import basket from '../../public/basket.png'
import ques from '../../public/ques.png'
import whatsapp from '../../public/whatsapp-3.svg'
import telegram from '../../public/telegram-1.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            
                <div className={styles.header__top}>
                    <div className='container'>
                        <div className={styles.header__wrapper}>
                            <ul className={styles.header__ul}>
                                <li>Гарантия</li>
                                <li>Доставка</li>
                                <li>Поддержка</li>
                                <li>Калькулятор RAID</li>
                                <li>Блог</li>
                                <li>О нас</li>
                                <li>Контакты</li>
                                <li>Конфигуратор</li>
                            </ul>
                            <h3 className={styles.phone}>+996 700-355-344</h3>
                            <div className={styles.soc__nav}>
                                <Image src={whatsapp} width={20} height={20}/>
                                <Image src={telegram} width={17} height={17}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.header__middle}>
                    <div className="container">
                        <div className={styles.header__wrapper}>
                        <Link href={'/'} className={styles.header__bottom__left__nav}>ГЛАВНАЯ</Link>

                            <Image src={logo} alt="logo" width={124} height={38}/>
                            <div className="search">
                                <input type="text" placeholder='Поиск по сайту' className={styles.searchInput}/>
                                
                            </div>

                            <div className={styles.basket}>
                                <Image src={basket} alt='basket'width={20} height={20}/>
                                <p className={styles.basket__text}>Корзина</p>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className={styles.header__bottom}>
                    <div className="container">
                        <div className={styles.header__wrapper}>
                            <ul className={styles.header__ul}>
                                <li>Серверы</li>
                                <li>Подобрать сервер</li>
                                <li>Комплектующие</li>
                                <li>Сетевое оборудование</li>
                            </ul>
                            <p className={styles.header__bottom__text}>Цены включают <span> НДС 20%</span><Image src={ques} width={16} height={16}/></p>
                        </div>
                    </div>
                </div>

        </header>
    );
};

export default Header;