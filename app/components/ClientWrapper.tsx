"use client"
import { usePathname, useRouter } from "next/navigation";
import Footer from "./footer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LoginModal from "./Modal/LoginModal";
import RegisterModal from "./Modal/RegisterModal";
import styles from "../page.module.css";

import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', "600", '700'],
    display: 'swap',
})

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false)
    const [openControlMenu, setOpenControlMenu] = useState(false)
    const router = useRouter()
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("currentUser");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }

        const handleStorageChange = () => {
            const updatedUser = localStorage.getItem("currentUser");
            setUser(updatedUser ? JSON.parse(updatedUser) : null);
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    useEffect(() => {
        const handleLogout = () => setUser(null);
        window.addEventListener("logout", handleLogout);
        return () => window.removeEventListener("logout", handleLogout);
    }, []);

    const [modalType, setModalType] = useState(null);

    const openLoginModal = () => setModalType('login');
    const openRegisterModal = () => setModalType('register');
    const openPasswordResetModal = () => setModalType('passwordReset');
    const closeModal = () => setModalType(null);
    const menuRef = useRef(null)
    const buttonRef = useRef(null);

    useEffect(() => {
        setModalType(null)
        const openLogin = localStorage.getItem("openLoginModal")
        if (openLogin) {
            openLoginModal()
            localStorage.removeItem("openLoginModal")
        }
        setOpenMenu(false)
        setOpenControlMenu(false)
    }, [pathname])

    return (
        <>
            <div className={`${styles.navbarWrapper} ${inter.className}`}>
                <nav className={styles.navbar}>
                    <Link href="/" prefetch>
                        <div style={{ cursor: "pointer" }} className={styles.nav_left}>
                            <img className={styles.logo} src="/logo.svg" alt="logo" />
                        </div>
                    </Link>
                    <div className={styles.nav_links}>
                        <Link
                            href="/"
                            className={pathname === "/" ? styles.active : ""}
                        >
                            Главная
                        </Link>

                        <Link
                            href="/services"
                            className={pathname.includes("/services") ? styles.active : ""}
                        >
                            Сервисы
                        </Link>

                        <Link
                            href="/download"
                            className={pathname === "/download" ? styles.active : ""}
                        >
                            Скачать приложение
                        </Link>
                    </div>
                    {
                        user ? <div className={styles.controls}>
                            <button className={styles.control_button}>Панель управления</button>
                            <button ref={buttonRef} className={styles.name_button} onClick={(e) => {
                                setOpenControlMenu(prev => !prev)
                                e.stopPropagation();
                            }}>{user?.login[0]}</button>
                            {
                                openControlMenu && <div ref={menuRef} className={styles.control_menu}>
                                    <div className={styles.control_menu_item}>
                                        <div className={styles.name}>
                                            <div className={styles.left}>{user?.login[0]}</div>
                                            <div className={styles.right}>
                                                <p>{user?.login}</p>
                                                <span>{user?.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.control_menu_item}>
                                        <Link href="/profile/control-panel"><img src="/assets/icons/control.svg" alt="control icon" /> Панель управления подписками</Link>
                                        <Link href="/profile/control-panel" onClick={() => localStorage.setItem("openServicesModal", "true")}>
                                            <img src="/assets/icons/cart.svg" alt="cart icon" /> Купить сервис
                                        </Link>
                                    </div>
                                    <div className={styles.control_menu_item}>
                                        <Link href="/profile/settings"><img src="/assets/icons/settings.svg" alt="settings icon" /> Настройки</Link>
                                    </div>
                                    <div className={styles.control_menu_item}>
                                        <Link href="https://t.me/+jnihcO6AuyhiODVi" target="__blank"><img src="/assets/icons/telegram.svg" alt="telegram icon" /> Telegram-канал</Link>
                                        <Link href="https://t.me/AbbsNet_support" target="__blank"><img src="/assets/icons/telegram.svg" alt="telegram icon" /> Тех. Поддержка</Link>
                                    </div>
                                    <div className={styles.control_menu_item}>
                                        <Link href="" onClick={() => {
                                            localStorage.removeItem("currentUser")
                                            setUser(null);
                                            setOpenControlMenu(false)
                                        }}><img src="/assets/icons/logout.svg" alt="logout icon" /> Выйти</Link>
                                    </div>
                                </div>
                            }
                        </div> :
                            <div className={styles.authButtons}>
                                <button onClick={openLoginModal} >Вход</button>
                                <button onClick={openRegisterModal}>Регистрация</button>
                            </div>
                    }
                    <div className={styles.burger_menu}>
                        {
                            user && <button ref={buttonRef} className={styles.name_button} onClick={(e) => {
                                setOpenControlMenu(prev => !prev)
                                e.stopPropagation();
                            }}>{user?.login[0]}</button>
                        }
                        <svg onClick={() => setOpenMenu(true)} width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.766667 0.601562C0.343252 0.601562 0 0.944814 0 1.36823C0 1.79164 0.343252 2.1349 0.766667 2.1349H19.1667C19.59 2.1349 19.9333 1.79164 19.9333 1.36823C19.9333 0.944814 19.59 0.601562 19.1667 0.601562H0.766667ZM0 7.50156C0 7.07815 0.343252 6.7349 0.766667 6.7349H19.1667C19.59 6.7349 19.9333 7.07815 19.9333 7.50156C19.9333 7.92498 19.59 8.26823 19.1667 8.26823H0.766667C0.343252 8.26823 0 7.92498 0 7.50156ZM0 13.6349C0 13.2115 0.343252 12.8682 0.766667 12.8682H19.1667C19.59 12.8682 19.9333 13.2115 19.9333 13.6349C19.9333 14.0582 19.59 14.4016 19.1667 14.4016H0.766667C0.343252 14.4016 0 14.0582 0 13.6349Z" fill="#F3F3F3" />
                        </svg>
                        {
                            openControlMenu && <div ref={menuRef} className={styles.control_menu}>
                                <div className={styles.control_menu_item}>
                                    <div className={styles.name}>
                                        <div className={styles.left}>{user?.login[0]}</div>
                                        <div className={styles.right}>
                                            <p>{user?.login}</p>
                                            <span>{user?.email}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.control_menu_item}>
                                    <Link href="/profile/control-panel"><img src="/assets/icons/control.svg" alt="control icon" />Панель управления подписками</Link>
                                    <Link href="/"><img src="/assets/icons/cart.svg" alt="cart icon" />Купить сервис</Link>
                                </div>
                                <div className={styles.control_menu_item}>
                                    <Link href="/profile/settings"><img src="/assets/icons/settings.svg" alt="settings icon" />Настройки</Link>
                                </div>
                                <div className={styles.control_menu_item}>
                                    <Link href="https://t.me/+jnihcO6AuyhiODVi" target="__blank"><img src="/assets/icons/telegram.svg" alt="telegram icon" /> Telegram-канал</Link>
                                    <Link href="https://t.me/AbbsNet_support" target="__blank"><img src="/assets/icons/telegram.svg" alt="telegram icon" /> Тех. Поддержка</Link>
                                </div>
                                <div className={styles.control_menu_item}>
                                    <Link href="" onClick={() => {
                                        localStorage.removeItem("currentUser")
                                        setUser(null);
                                    }}><img src="/assets/icons/logout.svg" alt="logout icon" /> Выйти</Link>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={styles.menu}>
                        {
                            openMenu ? (
                                <div className={styles.menuItem}>
                                    <div className={styles.menuTop}>
                                        <Link href="/" prefetch>
                                            <div style={{ cursor: "pointer" }} className={styles.nav_left}>
                                                <img className={styles.logo} src="/logo.svg" alt="logo" />
                                            </div>
                                        </Link>
                                        <div className={styles.buttons}>
                                            {
                                                user && <button ref={buttonRef} className={styles.name_button} onClick={(e) => {
                                                    setOpenControlMenu(prev => !prev)
                                                    setOpenMenu(false)
                                                    e.stopPropagation();
                                                }}>{user?.login[0]}</button>
                                            }
                                            <button className={styles.close} onClick={() => setOpenMenu(false)}><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.73863 0.298302C1.3409 -0.0994341 0.696039 -0.0994341 0.298302 0.298302C-0.0994341 0.696039 -0.0994341 1.3409 0.298302 1.73863L6.05967 7.5L0.298379 13.2613C-0.0993572 13.659 -0.0993576 14.3039 0.298379 14.7016C0.696115 15.0994 1.34097 15.0994 1.73871 14.7016L7.5 8.94033L13.2613 14.7016C13.659 15.0994 14.3039 15.0994 14.7016 14.7016C15.0994 14.3039 15.0994 13.659 14.7016 13.2613L8.94033 7.5L14.7017 1.73864C15.0994 1.3409 15.0994 0.696041 14.7017 0.298304C14.304 -0.0994326 13.6591 -0.0994327 13.2614 0.298304L7.5 6.05967L1.73863 0.298302Z" fill="white" />
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${styles.nav_links} ${styles.menu_links}`}>
                                        <Link href={"/"}>Главная</Link>
                                        <Link href={"/services"}>Сервисы</Link>
                                        <Link href={"/download"}>Скачать приложение</Link>
                                    </div>
                                    {
                                        user ? <div className={styles.controls}>
                                            <button className={styles.control_button}>Панель управления</button>
                                            <button ref={buttonRef} className={styles.name_button}>Настройки</button>
                                        </div> :
                                            <div className={styles.authButtons}>
                                                <button onClick={() => {
                                                    setOpenMenu(false)
                                                    openLoginModal()
                                                }} >Вход</button>
                                                <button onClick={() => {
                                                    setOpenMenu(false)
                                                    openRegisterModal()
                                                }}>Регистрация</button>
                                            </div>
                                    }
                                </div>
                            ) : ""
                        }
                    </div>
                </nav>
            </div>
            <main className={inter.className}>
                {children}
            </main>

            {
                pathname.split('/')[1] !== "reset-password" &&
                pathname.split('/')[1] !== "profile" && (
                    <Footer
                        className={`${pathname === "/download" ? styles.footerDownload : ""} ${inter.className}`}
                    />
                )
            }


            {modalType === 'login' && <LoginModal setModalType={setModalType} onClose={closeModal} setUser={setUser} />}
            {modalType === 'register' && <RegisterModal setModalType={setModalType} onClose={closeModal} setUser={setUser} />}
        </>
    );
}
