'use client';
import { useState, useRef, useEffect } from "react";
import IntroSlider from "./components/IntroSlider";
import SectionTransition from './components/SectionTransition';
import Header from "./components/Header";
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
        <div className="top-screen h-screen left-0 relative">
          <SectionTransition></SectionTransition>
        </div>
        <Header />
      </div>
  );
}
