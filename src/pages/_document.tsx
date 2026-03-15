// src/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="حلويات سعد الدين - أشهى الحلويات الشرقية والغربية في المملكة العربية السعودية" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
