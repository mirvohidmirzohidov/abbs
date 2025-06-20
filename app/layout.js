import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ABBSNET ТЕСТ</title>
        <meta name="description" content="Быстрый, безопасный и недорогой доступ к сервисам и нейросетям." />
        <meta name="keywords" content="доступ, сервисы, нейросети, безопасный доступ, быстрый доступ, недорогой доступ" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
