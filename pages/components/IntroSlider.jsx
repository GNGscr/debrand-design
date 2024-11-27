"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hero from '../components/Hero';
import { motion } from "framer-motion";

export default function IntroSlider({ media }) {
  const comp = useRef(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from('#intro-slider', { xPercent: '-100', duration: .75, delay: .15 })
        .from(['#title-1', '#title-2', '#title-3'], { display: 'flex', opacity: 0, y: '+=30', stagger: .2 })
        .to(['#title-1', '#title-2', '#title-3'], { opacity: 0, y: '-=30', delay: .015, stagger: .25, })
        .to('#intro-slider', { xPercent: '-100', duration: 1.15 })
        .to(['#title-1', '#title-2', '#title-3'], { display: 'none' })
        .from('#inner-hero-title',{ opacity: 0, duration: .5, yPercent: '+=100', rotate: 5 }, "<-0.75")
      }, comp);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="relative" ref={comp}>
      <motion.div 
        id="intro-slider"
        initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}} style={{opacity: 0}}
        className={`h-[100vh] min-h-screen p-4 md:p-20 bg-gray-50 absolute top-0 left-0
          z-10 w-full flex flex-col gap-4 md:gap-10 tracking-tight justify-start`}>
          <h1 id="title-1" className="text-4xl md:text-9xl font-bold">Software Engineer</h1>
          <h1 id="title-2" className="text-4xl md:text-9xl font-bold">Designer</h1>
          <h1 id="title-3" className="text-4xl md:text-9xl font-bold">Freelanser</h1>
      </motion.div>
      <div 
        style={{clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)"}} 
        className={`h-screen flex bg-red-300 justify-center place-items-center`}>
        <Hero media={media} />
      </div>
    </div>
  );
}