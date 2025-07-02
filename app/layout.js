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
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="44d2670959a7427a" />
      </head>
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
} 