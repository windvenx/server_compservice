'use client';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from '../src/app/styles/guarantee/modal.module.scss';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRoot = typeof window !== 'undefined' ? document.getElementById('modal') : null;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.modalOpen);
    } else {
      document.body.classList.remove(styles.modalOpen);
    }

    return () => document.body.classList.remove(styles.modalOpen);
  }, [isOpen]);

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
