"use client";
import { useState } from "react";
import styles from "../src/app/styles/guarantee/modal.module.scss";
import Modal from "./Modal";
import Image from "next/image";
import messageIcon from "../public/blue-chat-message.svg";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Состояние для данных формы
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Обработчик изменения инпутов
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Здесь отправляем данные на бэкенд
    console.log("Отправляем данные:", formData);

    // После успешной отправки можно закрыть модалку
    closeModal();
  };

  return (
    <div className={styles.contact__us}>
      <div className={styles.contact__us__top}>
        <Image src={messageIcon} width={90} height={80} alt="Message Icon" />
        <h3>Связаться <br /> с нами</h3>
      </div>
      <p>
        Наши сотрудники помогут Вам заранее рассчитать стоимость вашего заказа.
        И уточнят все индивидуальные условия заказа.
      </p>
      <p>
        Звоните нам прямо сейчас и уточняйте детали
        <span> 8 800 222 86 42.</span>
      </p>
      <button className={styles.contact__button} onClick={openModal}>
        ЗАДАТЬ ВОПРОС
      </button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className={styles.modal__content}>
          <h2 className={styles.modal__title}>Задайте свой вопрос</h2>
          <p className={styles.modal__description}>
            Напишите свой вопрос, и мы обязательно ответим вам в ближайшее время!
          </p>
          <form className={styles.modal__form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className={styles.modal__input}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              className={styles.modal__input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Ваш номер телефона"
              className={styles.modal__input}
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="question"
              placeholder="Введите ваш вопрос..."
              className={styles.modal__textarea}
              value={formData.question}
              onChange={handleChange}
              required
            ></textarea>
            <button
              className={styles.modal__submit}
              type="submit"
            >
              Отправить
            </button>
          </form>
          <button
            className={styles.modal__close}
            onClick={closeModal}
          >
            Закрыть
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default MyComponent;
