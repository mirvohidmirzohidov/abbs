import React, { useState } from 'react';
import Modal from './Modal';
import styles from './Modal.module.css';

const RegisterModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = () => {
    // Ro'yxatdan o'tish logikasini shu yerda qo'shish mumkin
    console.log('Register:', email, login, password);
  };

  return (
    <Modal onClose={onClose}>
      <h3 style={{ textAlign: 'center', color: '#fff' }}>Регистрация аккаунта</h3>
      <input
        type="email"
        placeholder="Ваш Email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Придумайте логин"
        className={styles.input}
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="Придумайте пароль"
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Повторите пароль"
        className={styles.input}
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <button className={styles.button} onClick={handleSubmit}>
        Регистрация
      </button>
      <p className={styles.text}>
        Уже есть аккаунт?{' '}
        <span onClick={() => alert('Go to login!')}>Войти в аккаунт</span>
      </p>
    </Modal>
  );
};

export default RegisterModal;
