"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from '../src/app/styles/Breadcrumbs.module.scss'

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Если путь - главная страница, не показываем хлебные крошки
  if (pathname === "/") {
    return null;
  }

  // Функция для ручного перевода текста
  const translate = (path) => {
    if (path === "guarantee") {
      return "Гарантия";
    } else if (path === "AboutUs") {
      return "О нас";
    } else if (path === "home") {
      return "Главная";
    } else if (path === "Delivery") {
      return "Доставка";
    } else if (path === "ContactUs") {
        return "Контакты";
    }else if (path === "configuration") {
        return "Конфигурация";
    }
    return path; 
  };

  const paths = pathname.split("/").filter((path) => path);

  return (
    <nav className={styles.breadcrumbs}>
      <ul
        style={{ display: "flex", gap: "8px", listStyle: "none", padding: "0" }}
      >
        <li>
          <Link href="/Home" className={styles.breadcrumbs__home}>{translate("home")} / </Link>
        </li>
        {paths.map((path, index) => {
          const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          return (
            <li key={index}>
              {!isLast ? (
                <a href={fullPath}>{translate(path)}</a>
              ) : (
                <span>{translate(path)}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
