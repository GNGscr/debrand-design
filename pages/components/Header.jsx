"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { easeInOut, motion, useTransform, useScroll } from 'framer-motion';

export default function Header({media}) {
    const comp = useRef(null);
    const [ isIntersecting, setIsIntersecting ] = useState();

    useEffect(() => {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from(
          ['#header-li-1', '#header-li-2', '#header-li-3', '#header-li-4'],
          { opacity: 0, duration: .5, stagger: .1, y: '-=12.5', delay: 5 }
        )
      }, comp);
      return () => ctx.revert();
    },[]);

    useEffect(() => {
      const sectionToIntersect = ["#home", "#about", "#menifest"];
      const intersections = document.querySelectorAll(sectionToIntersect);
      const intersectionsIterator = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const intersectingEntry = entry.target.id.replace('#', '');
            // setIsIntersecting( === intersectingEntry); // Save the intersecting button
            // setCurrentButton(intersectingEntry); // Save the intersecting button
          }
        });
      };
      
      const observer = new IntersectionObserver(intersectionsIterator);
      [...intersections].forEach(intersection => observer.observe(intersection));
  
      return () => observer.disconnect(); // Cleanup observer
    }, []);

    const handleClick = (e, inputTarget) => {
      e.preventDefault()
      
      const target = document.getElementById(inputTarget);
      const scrollPositions = { 
        "desktop": {
          "home": 0,
          "about": 703,
          "menifest": 1450,
          "projects": 2150,
        },
        "mobile": {
          "home": 0,
          "about": 900,
          "menifest": 1730,
          "projects": 2600,
        },
      };
      if (target && [...Object.keys(scrollPositions[media])].includes(target.id)) {
        window.scrollTo({
          top: scrollPositions[media][target.id],
          behavior: 'smooth'
        });
      }
    }

    return (
        <header 
          ref={comp}
          className="header-wrp flex justify-center p-5 fixed z-99 top-0 left-0">
            <div style={{display: 'none'}}>Left</div>
            <motion.div
              id="header"
              initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}} style={{opacity: 0}}>
                <ul className="header-ul flex gap-[100px]">
                  <a href="home" onClick={e => handleClick(e, "home")} id="header-li-1"><li><ZoopEffect media={media}>Home</ZoopEffect></li></a>
                  <a href="about" onClick={e => handleClick(e, "about")} id="header-li-2"><li><ZoopEffect media={media}>About</ZoopEffect></li></a>
                  <a href="menifest" onClick={e => handleClick(e, "menifest")} id="header-li-3"><li><ZoopEffect media={media}>menifest</ZoopEffect></li></a>
                  <a href="projects" onClick={e => handleClick(e, "projects")} id="header-li-3"><li><ZoopEffect media={media}>projects</ZoopEffect></li></a>
                </ul>
            </motion.div>
            <div style={{display: 'none'}}>Right</div>
        </header>
    )
}

const DURATION = .10;
const STAGGER = .10;

const ZoopEffect = ({ children, href, media }) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Set the color to switch by toggle (ease fnc) between sections
  const color = useTransform(
    scrollYProgress,
    [0, 0.18, 0.2525, 0.665, 0.857, 1],
    ["#000", "#000", "#ddd", "#000", "rgb(252 165 165)", "rgb(252 165 165)"],
    { ease: (t) => Math.round(t) }
  );
  const mobileColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2525, 0.725, 0.735, 1],
    ["#000", "#000", "#fff", "#000", "rgb(252 165 165)", "rgb(252 165 165)"],
    { ease: (t) => Math.round(t) }
  );
  useEffect(() => {
  }, [color, mobileColor]);

  // const boolean = useTransform(
  //   scrollYProgress,
  //   [0, 0.18, 0.2525, 0.665, 0.857, 1],
  //   ['false', 'false', 'false', 'true', 'false', 'false'],
  //   { ease: (t) => Math.round(t) }
  // );
    
    return <motion.div 
            initial="initial"
            whileHover="hovered"
            href={href}
            className={`relative overflow-hidden text-gray-800 --font-nerko-one-regular
              whitespace-nowrap text-[1.2rem] font-bold
              sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.2rem] z-20`}
            style={media === 'desktop' ? { lineHeight: .8, color } : { lineHeight: .8, color: mobileColor }}
          >
                <div>{children.split("").map((l, i) => {
                    return <motion.span
                    variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" },
                    }}
                    transition={{
                        duration: DURATION,
                        ease: easeInOut,
                        delay: STAGGER * i
                    }}
                    className="inline-block"
                    key={i}>{l}</motion.span>
                })}</div>
                <div className="absolute inset-0">
                    {children.split("").map((l, i) => {
                    return <motion.span
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                    }}
                    transition={{
                        duration: DURATION,
                        ease: easeInOut,
                        delay: STAGGER * i
                    }}
                    className="inline-block"
                    key={i}>{l}</motion.span>
                })}</div>
        </motion.div>
}
