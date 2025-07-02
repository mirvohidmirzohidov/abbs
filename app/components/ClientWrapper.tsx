
"use client"

import { usePathname } from "next/navigation";
import styles from "../page.module.css";
import Footer from "./footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            <div className={styles.banner}>
                <h3><img src="/assets/money.png" alt="" /> Начни экономить от <span>2000₽</span> в месяц уже сегодня!</h3>
            </div>
            <div className={styles.headerTop}>
                <p>Скачать браузер для экономии</p>
            </div>
            <main>{children}</main>
            <Footer className={pathname === "/download" ? styles.footerDownload : ""} />
        </>
    );
}
