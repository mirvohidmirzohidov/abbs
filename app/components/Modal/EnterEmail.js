"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "./Modal";
import styles from "./Modal.module.css"

const EnterEmail = () => {
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSendEmail = (e) => {
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

        const usersJSON = localStorage.getItem("users");
        let users = [];
        if (usersJSON) {
            try {
                users = JSON.parse(usersJSON);
            } catch (err) {
                return;
            }
        }

        const existingUser = users.find(u => u.email === email);

        if (!existingUser) {
            setError("Пользователь с таким email не найден");
            return;
        }

        localStorage.setItem("resetEmail", email);
        setError(null);
        setIsSent(true);
    };

    const handleClickButton = () => {
        router.push('/');
    };

    return (
        <Modal>
            <h3 style={{ textAlign: 'center', color: '#fff' }}>
                {isSent ? 'Новый пароль' : 'Восстановление пароля'}
            </h3>

            <p className={styles.desc}>
                {isSent
                    ? "Мы отправили инструкцию по восстановлению пароля на указанный адрес электронной почты. Проверьте входящие сообщения, а также папку «Спам»."
                    : "Чтобы восстановить доступ к аккаунту, введите адрес электронной почты, привязанный к вашему аккаунту AbbsNet. Мы отправим инструкции для сброса пароля."}
            </p>

            {!isSent ? (
                <>
                    <form onSubmit={handleSendEmail} className={styles.form}>
                        {error && (
                            <div className={styles.error}>
                                <img src="/assets/icons/error.svg" alt="" />
                                <p>{error}</p>
                            </div>
                        )}
                        <label>
                            Ваш Email
                            <input
                                type="text"
                                placeholder="Ваш Email"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <div className={styles.button_wrapper}>
                            <button type='submit' className={styles.button}>
                                Восстановить пароль
                            </button>
                        </div>
                    </form>
                    <p className={styles.text}>
                        Вспомнили пароль? <br />
                        <span onClick={() => {
                            router.push('/');
                            localStorage.setItem("openLoginModal", true);
                        }}>Войти в аккаунт↗</span>
                    </p>
                </>
            ) : (
                <div className={styles.button_wrapper}>
                    <button onClick={handleClickButton} className={styles.button}>
                        Вернутся на главную
                    </button>
                </div>
            )}
        </Modal>
    );
};

export default EnterEmail;
