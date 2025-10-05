"use client"

import React, { useState } from 'react';
import Modal from './Modal';
import styles from './Modal.module.css';

const LoginModal = ({ onClose, setModalType }) => {
  const [emailOrLogin, setEmailOrLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailOrLogin) {
      setError("Введите email или логин.");
      return;
    }

    if (!password) {
      setError("Введите пароль");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) =>
        (u.email === emailOrLogin || u.login === emailOrLogin) &&
        u.password === password
    );

    if (!foundUser) {
      setError("Неверный логин или пароль");
      return;
    }

    setError(null);
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    onClose();
  };

  return (
    <Modal onClose={onClose} fixed={true}>
      <h3 style={{ textAlign: 'center', color: '#fff' }}>Вход в аккаунт</h3>
      <p className={styles.desc}>
        Чтобы приобрести подписку, сначала необходимо войти в свой аккаунт AbbsNet.
        Если аккаунта нет — пожалуйста, зарегистрируйтесь.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && (
          <div className={styles.error}>
            <img src="/assets/icons/error.svg" alt="" />
            <p>{error}</p>
          </div>
        )}
        <label>
          Email или логин
          <input
            type="text"
            placeholder="Email или логин"
            className={styles.input}
            value={emailOrLogin}
            onChange={(e) => setEmailOrLogin(e.target.value)}
          />
        </label>
        <label>
          Пароль
          <div className={styles.input_wrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <img src="/assets/icons/eye_off.svg" alt="eye" />
              ) : (
                <img src="/assets/icons/eye.svg" alt="eye" />
              )}
            </span>
          </div>
        </label>
        <span
          className={styles.link}
          onClick={() => setModalType('passwordReset')}
          style={{ cursor: "pointer", color: "#ccc" }}
        >
          Забыли пароль?
        </span>
        <div className={styles.button_wrapper}>
          <button className={styles.button}>Войти</button>
        </div>
      </form>
      <p className={styles.text}>
        Еще не зарегистрированы? <br />
        <span onClick={() => setModalType("register")}>Зарегистрироваться↗</span>
      </p>
    </Modal>
  );
};

export default LoginModal;
