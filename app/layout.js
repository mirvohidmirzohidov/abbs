import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";

export const metadata = {
  title: 'AbbsNet - Быстрый, безопасный и недорогой доступ к сервисам и нейросетям',
  description: 'С AbbsNet вы сможете легко экономить до 95% средств на сервисах, без ограничений, блокировок и других проблем.',
  keywords: ['доступ', 'сервисы', 'нейросети', 'безопасный доступ', 'быстрый доступ', 'недорогой доступ'],
  openGraph: {
    title: 'AbbsNet - Быстрый, безопасный и недорогой доступ к сервисам и нейросетям',
    description: 'С AbbsNet вы сможете легко экономить до 95% средств на сервисах, без ограничений, блокировок и других проблем.',
    url: 'https://abbsnet.com',
    type: 'website',
    siteName: 'AbbsNet',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="44d2670959a7427a" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" /> */}
      </head>
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
} 