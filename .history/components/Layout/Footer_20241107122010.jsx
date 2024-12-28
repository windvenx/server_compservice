import React from 'react';
import styles from '../../src/app/'
import logo from '../../public/next.svg'
import Image from 'next/image';
import footer__logo from '../../public/favicon.ico'
import processor__logo from '../../public/contact.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__nav}>
                        <div className={styles.footer__nav__left}>
                            <Image src={logo} alt="logo" width={124} height={38}/>
                            <div className={styles.soc__nav}>
                                <Image src={footer__logo} alt='logo' width={30} height={30}/>
                                <Image src={footer__logo} alt='logo' width={30} height={30}/>
                                <Image src={footer__logo} alt='logo' width={30} height={30}/>
                                <Image src={footer__logo} alt='logo' width={30} height={30}/>
                            </div>
                        </div>
                        <ul className="footer__nav__middle1">
                            <li>серверы</li>
                            <li>подобрать сервер</li>
                            <li>комплектующие</li>
                        </ul>
                        <ul className="footer__nav__middle2">
                            <li>гарантия</li>
                            <li>доставка</li>
                            <li>поддержка</li>
                            <li>калькулятор raid</li>
                            <li>Отзывы</li>
                            <li>блог</li>
                            <li>о нас</li>
                            <li>контакты</li>
                        </ul>
                        <div className={styles.footer__nav__right}>
                            <h4>контакты</h4>
                            <div className={styles.contacts}>
                                {/* <Image src={processor__logo} width={28} height={28} alt='processor'/> */}
                                <p>РФ, 117420, г. Москва,
                                ул. Профсоюзная, д.57, офис 700</p>
                            </div>
                            <div className={styles.contacts}>
                                {/* <Image src={processor__logo} width={28} height={28} alt='processor'/> */}
                                <p>+7 495 189-74-90</p>
                            </div>
                            <div className={styles.contacts}>
                                {/* <Image src={processor__logo} width={28} height={28} alt='processor'/> */}
                                <p>Режим работы
                                ПН-ПТ: 9.00 - 19.00</p>
                            </div>
                            <div className={styles.contacts}>
                                {/* <Image src={processor__logo} width={28} height={28} alt='processor'/> */}
                                <p>1@servergate.ru</p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.footer__bottom}>
                        <h4>© 2018 – 2024, ОСОО «Компсервис»</h4>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;