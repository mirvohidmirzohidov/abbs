import React, { useState } from 'react';
import Modal from './Modal';
import styles from './Modal.module.css';

const PasswordResetModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendEmail = () => {
    // Parolni tiklash logikasini shu yerda qo'shish mumkin
    setIsSent(true);
  };

  const handleNewPassword = () => {
    // Yangi parolni o'rnatish logikasini shu yerda qo'shish mumkin
    alert('Пароль изменён');
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h3 style={{ textAlign: 'center', color: '#fff' }}>
        {isSent ? 'Новый пароль' : 'Восстановление пароля'}
      </h3>
      {!isSent ? (
        <>
          <input
            type="email"
            placeholder="Ваш Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.button} onClick={handleSendEmail}>
            Отправить письмо
          </button>
        </>
      ) : (
        <>
          <input type="password" placeholder="Новый пароль" className={styles.input} />
          <input
            type="password"
            placeholder="Повторите новый пароль"
            className={styles.input}
          />
          <button className={styles.button} onClick={handleNewPassword}>
            Изменить пароль
          </button>
        </>
      )}
      {isSent && <p className={styles.text}>Письмо отправлено</p>}
    </Modal>
  );
};

export default PasswordResetModal;
