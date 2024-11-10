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
      <div ref={ref}>
        <IntroSlider media={media} />
      </div>
  );
}
