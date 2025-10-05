"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Modal from "./Modal";
import styles from "./Modal.module.css";

const PasswordResetModal = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const router = useRouter();

  const handleNewPassword = (e) => {
    e.preventDefault();

    const resetEmail = localStorage.getItem("resetEmail");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!resetEmail) {
      setError("Email не найден. Попробуйте снова восстановить пароль.");
      return;
    }

    if (!password || !repeatPassword) {
      setError("Пароль не может быть пустым");
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

    const updatedUsers = users.map((u) =>
      u.email === resetEmail ? { ...u, password } : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.removeItem("resetEmail");

    setError(null);
    setIsSent(true);
  };

  const handleLoginRedirect = () => {
    router.push('/');
    localStorage.setItem("openLoginModal", true);
  };

  return (
    <Modal>
      <h3 style={{ textAlign: "center", color: "#fff" }}>
        {isSent ? "Пароль изменён" : "Новый пароль"}
      </h3>

      <p className={styles.desc}>
        {isSent
          ? "Ваш пароль успешно изменён. Теперь вы можете войти в аккаунт, используя новый пароль."
          : "Введите новый пароль для своего аккаунта AbbsNet и повторите его, чтобы подтвердить."}
      </p>

      {!isSent ? (
        <form onSubmit={handleNewPassword} className={styles.form}>
          {error && (
            <div className={styles.error}>
              <img src="/assets/icons/error.svg" alt="error" />
              <p>{error}</p>
            </div>
          )}

          <label>
            Новый пароль
            <div className={styles.input_wrapper}>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Новый пароль"
                className={styles.input}
                value={password}
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
                onChange={(e) => setRepeatPassword(e.target.value)}
                type={showRepeatPassword ? "text" : "password"}
                placeholder="Повторите пароль"
                className={styles.input}
                value={repeatPassword}
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
            <button type="submit" className={styles.button}>
              Сохранить пароль
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.button_wrapper}>
          <button className={styles.button} onClick={handleLoginRedirect}>
            Войти в аккаунт
          </button>
        </div>
      )}
    </Modal>
  );
};

export default PasswordResetModal;
