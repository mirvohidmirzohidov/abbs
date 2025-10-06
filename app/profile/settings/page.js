"use client"

import { useState } from "react"
import styles from "./settings.module.css"

const Settings = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("currentUser")))

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!oldPassword || !newPassword) {
      alert("Пожалуйста, заполните все поля!")
      return
    }

    if (oldPassword !== user?.password) {
      alert("Старый пароль введён неверно!")
      return
    }

    const updatedUser = { ...user, password: newPassword }
    localStorage.setItem("currentUser", JSON.stringify(updatedUser))

    const users = JSON.parse(localStorage.getItem("users")) || []
    const updatedUsers = users.map((u) =>
      u.email === user?.email ? updatedUser : u
    )
    localStorage.setItem("users", JSON.stringify(updatedUsers))

    setUser(updatedUser)
    setOldPassword("")
    setNewPassword("")
    alert("Пароль успешно изменён!")
  }

  return (
    <div className={styles.settings}>
      <h3 className={styles.title}>Настройки аккаунта</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.item}>
          <h4>Основные</h4>
          <label>
            Ваш логин <br />
            <input type="text" placeholder="Nickname" value={user?.login || ""} readOnly />
          </label>
          <label>
            Ваш email <br />
            <input type="email" placeholder="mail@gmail.com" value={user?.email || ""} readOnly />
          </label>
        </div>

        <div className={styles.item}>
          <h4>Смена пароля</h4>
          <label>
            Старый пароль <br />
            <input
              type="password"
              placeholder="Введите старый пароль"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </label>
          <label>
            Новый пароль <br />
            <input
              type="password"
              placeholder="Введите новый пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Сменить пароль</button>
      </form>
    </div>
  )
}

export default Settings
