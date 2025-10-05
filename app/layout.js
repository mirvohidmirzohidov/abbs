import "./globals.css";
import dynamic from "next/dynamic";
const ClientWrapper = dynamic(() => import("./components/ClientWrapper"), { ssr: false });

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
      </head>
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
} 