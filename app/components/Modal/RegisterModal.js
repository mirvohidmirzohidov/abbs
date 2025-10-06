"use client";

import React, { useState } from 'react';
import Modal from './Modal';
import styles from './Modal.module.css';

const RegisterModal = ({ onClose, setModalType, setUser }) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Введите email");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Неверный формат email");
      return;
    }

    if (!login) {
      setError("Введите логин");
      return;
    }

    if (password.length < 8) {
      setError("Пароль должен быть не меньше 8 символов");
      return;
    }

    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.find((u) => u.email === email);
    if (emailExists) {
      setError("Уже существует аккаунт с таким email");
      return;
    }

    const loginExists = users.find((u) => u.login === login);
    if (loginExists) {
      setError("Такой логин уже занят");
      return;
    }

    const newUser = { email, login, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser)
    setError(null);
    onClose()
  };

  return (
    <Modal onClose={onClose} fixed={true}>
      <h3 style={{ textAlign: 'center', color: '#fff' }}>Регистрация аккаунта</h3>
      <p className={styles.desc}>
        Чтобы приобрести подписку, необходимо создать аккаунт AbbsNet.
        Если у вас уже есть аккаунт — пожалуйста, войдите в систему.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        {error && (
          <div className={styles.error}>
            <img src="/assets/icons/error.svg" alt="" />
            <p>{error}</p>
          </div>
        )}
        <label>
          Email
          <input
            type="email"
            placeholder="Ваш Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Логин
          <input
            type="text"
            placeholder="Придумайте логин"
            className={styles.input}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
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
        <label>
          Повторите пароль
          <div className={styles.input_wrapper}>
            <input
              type={showRepeatPassword ? "text" : "password"}
              placeholder="Повторите пароль"
              className={styles.input}
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <span onClick={() => setShowRepeatPassword(!showRepeatPassword)}>
              {showRepeatPassword ? (
                <img src="/assets/icons/eye_off.svg" alt="eye" />
              ) : (
                <img src="/assets/icons/eye.svg" alt="eye" />
              )}
            </span>
          </div>
        </label>
        <div className={styles.button_wrapper}>
          <button className={styles.button}>Регистрация</button>
        </div>
      </form>
      <p className={styles.text}>
        Уже есть аккаунт? <br />
        <span onClick={() => setModalType("login")}>Войти в аккаунт↗</span>
      </p>
    </Modal>
  );
};

export default RegisterModal;