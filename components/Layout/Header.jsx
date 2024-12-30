import React from "react";
import styles from "../../src/app/styles/Layout/Header.module.scss";
import logo from "../../public/next.svg";
import Image from "next/image";
import basket from "../../public/basket.png";
import ques from "../../public/ques.png";
import whatsapp from "../../public/whatsapp__header.svg";
import telegram from "../../public/telegram-1.svg";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  {
    title: "Серверы",
    href: "/servers",
    subItems: [
      { title: "Серверы HP", href: "/servers/hp" },
      { title: "Серверы Dell", href: "/servers/dell" },
      { title: "Серверы Lenovo", href: "/servers/lenovo" },
      { title: "Б/У серверы", href: "/servers/used" },
    ],
  },
  {
    title: "Подобрать сервер",
    href: "/pick-server",
    subItems: [
      { title: "Для бизнеса", href: "/pick-server/business" },
      { title: "Для хранения данных", href: "/pick-server/storage" },
      { title: "Для виртуализации", href: "/pick-server/virtualization" },
    ],
  },
  {
    title: "Комплектующие",
    href: "/components",
    subItems: [
      { title: "Процессоры", href: "/components/cpu" },
      { title: "Оперативная память", href: "/components/ram" },
      { title: "Жесткие диски", href: "/components/hdd" },
      { title: "Твердотельные накопители (SSD)", href: "/components/ssd" },
    ],
  },
  {
    title: "Сетевое оборудование",
    href: "/network-equipment",
    subItems: [
      { title: "Маршрутизаторы", href: "/network-equipment/routers" },
      { title: "Коммутаторы", href: "/network-equipment/switches" },
      { title: "Точки доступа", href: "/network-equipment/access-points" },
    ],
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className="container">
          <div className={styles.header__wrapper}>
            <ul className={styles.header__ul}>
              <Link href={"/guarantee"} className={styles.LinkNav}>
                <li>Гарантия</li>
              </Link>
              <Link href={"/Delivery"} className={styles.LinkNav}>
                <li>Доставка</li>
              </Link>
              <Link href={"/support"} className={styles.LinkNav}>
                <li>Поддержка</li>
              </Link>
              <Link href={"/Leasing"} className={styles.LinkNav}>
                <li>Калькулятор RAID</li>
              </Link>
              <li>Блог</li>
              <Link href={"/AboutUs"} className={styles.LinkNav}>
                <li>О нас</li>
              </Link>
              <Link href={"/ContactUs"} className={styles.LinkNav}>
                <li>Контакты</li>
              </Link>
              <Link href={"/configuration"} className={styles.LinkNav}>
                <li>Конфигуратор</li>
              </Link>
            </ul>
            <h3 className={styles.phone}>+996 700-355-344</h3>
            <div className={styles.soc__nav}>
              <Image src={whatsapp} width={20} height={20} />
              <Image src={telegram} width={17} height={17} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header__middle}>
        <div className="container">
          <div className={styles.header__wrapper}>
            <Link href={"/"} className={styles.header__bottom__left__nav}>
              <Image src={logo} alt="logo" width={124} height={38} />
            </Link>
            <div className="search">
              <input
                type="text"
                placeholder="Поиск по сайту"
                className={styles.searchInput}
              />
            </div>

            <div className={styles.basket}>
              <Image src={basket} alt="basket" width={20} height={20} />
              <p className={styles.basket__text}>Корзина</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header__bottom}>
        <div className="container">
          <div className={styles.header__wrapper}>
            <ul className={styles.header__ul}>
              {navLinks.map((navLink, idx) => (
                <li key={idx} className={styles.navItem}>
                  <Link href={navLink.href} className={styles.header__menu}>
                    {navLink.title}
                  </Link>
                  {navLink.subItems && (
                    <ul className={styles.subMenu}>
                      {navLink.subItems.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <Link href={subItem.href} >{subItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <p className={styles.header__bottom__text}>
              Цены включают <span> НДС 20%</span>
              <Image src={ques} width={16} height={16} />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
