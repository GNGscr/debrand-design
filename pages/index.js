'use client';
import IntroSlider from "./components/IntroSlider";
import { useState, useRef, useEffect } from "react";
import Script from 'next/script';

export default function Home() {
  let ref = useRef(null);
  const [ media, setMedia ] = useState("desktop");

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();    
    setMedia(width < 680 ? "mobile" : "desktop") 
  }, []);

  return (
    <>
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
      <div ref={ref}>
        <IntroSlider media={media} />
      </div>
    </>
  );
}
