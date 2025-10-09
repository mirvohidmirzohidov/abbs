"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./profile.module.css"

export default function ProfileLayout({ children }) {
    const pathname = usePathname()
    const router = useRouter()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const savedUser = localStorage.getItem("currentUser")
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, [])

    return (
        <div className={styles.layout}>
            <div className={styles.left}>
                <div className={styles.top}>
                    <div className={styles.name} onClick={() => router.push("/profile/settings")}>
                        <span>{user?.login[0]}</span>
                        <p>{user?.login}</p>
                    </div>
                    <button  onClick={() => router.push("/profile/settings")} className={`${pathname === '/profile/settings' ? styles.active : ""} ${styles.settins_button}`}>
                        <img src="/assets/icons/settings2.svg" alt="settings icon" />
                        Настройки
                    </button>
                    <button onClick={() => {
                        router.push("/profile/control-panel")
                        localStorage.setItem("openServicesModal", true)
                    }} className={styles.buy}>
                        <img src="/assets/icons/cart_black.svg" alt="cart img" />
                        Купить сервис
                    </button>
                </div>
                <div className={styles.bottom}>
                    <h3>Навигация</h3>
                    <div className={styles.links}>
                        <button onClick={() => router.push("/profile/control-panel")} className={pathname === '/profile/control-panel' ? styles.active : ""}>
                            <img src="/assets/icons/servis.svg" alt="icon" />
                            Сервисы
                        </button>
                        <button onClick={() => router.push("/profile/settings")} className={pathname === '/profile/settings' ? styles.active : ""}>
                            <img src="/assets/icons/settings2.svg" alt="settings icon" />
                            Настройки
                        </button>
                        <button onClick={() => {
                            localStorage.removeItem("currentUser")
                            router.push("/")
                            window.dispatchEvent(new Event("logout"));
                        }
                        }>
                            <img src="/assets/icons/logout2.svg" alt="log out icon" />
                            Выход
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                {children}
            </div>
        </div>
    )
}
