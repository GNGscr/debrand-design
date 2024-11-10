import "@/styles/globals.css";
import Layout from '../pages/components/Layout';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3JQ1HLK15T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3JQ1HLK15T');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}
