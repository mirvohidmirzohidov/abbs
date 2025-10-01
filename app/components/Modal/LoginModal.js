import React, { useState } from 'react';
import Modal from './Modal';
import styles from './Modal.module.css';

const LoginModal = ({ onClose }) => {
  const [emailOrLogin, setEmailOrLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Login qilish logikasini shu yerda qo'shish mumkin
    console.log('Login:', emailOrLogin, password);
  };

  return (
    <Modal onClose={onClose}>
      <h3 style={{ textAlign: 'center', color: '#fff' }}>Вход в аккаунт</h3>
      <p className={styles.desc}>Чтобы приобрести подписку, сначала необходимо <br /> войти в свой аккаунт AbbsNet. Если аккаунта нет — <br /> пожалуйста, зарегистрируйтесь.</p>
      <input
        type="text"
        placeholder="Email или логин"
        className={styles.input}
        value={emailOrLogin}
        onChange={(e) => setEmailOrLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button} onClick={handleSubmit}>
        Войти
      </button>
      <p className={styles.text}>
        Еще не зарегистрированы?{' '}
        <span onClick={() => alert('Go to registration!')}>Зарегистрироваться</span>
      </p>
    </Modal>
  );
};

export default LoginModal;
