import "@/styles/globals.css";
import Layout from '../pages/components/Layout';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  return (
    <Layout>
      {NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </Layout>
  );
}
