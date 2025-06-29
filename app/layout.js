"use client"

import Footer from "./components/footer";
import "./globals.css";
import styles from "./page.module.css"
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ABBSNET</title>
        <meta name="description" content="Быстрый, безопасный и недорогой доступ к сервисам и нейросетям." />
        <meta name="keywords" content="доступ, сервисы, нейросети, безопасный доступ, быстрый доступ, недорогой доступ" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className={styles.banner}>
          <h3><img src="/assets/money.png" alt="" /> Начни экономить от <span>2000₽</span> в месяц уже сегодня!</h3>
        </div>
        <div className={styles.headerTop}>
          <p>Скачать браузер для экономии</p>
        </div>
        <main>{children}</main>
        <Footer className={pathname === "/download" ? styles.footerDownload : ""} />
      </body>
    </html>
  );
}
