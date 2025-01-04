'use client';
import { useState, useRef, useEffect } from "react";
import IntroSlider from "./components/IntroSlider";
import SectionTransition from './components/SectionTransition';
import Header from "./components/Header";
import { useTransform, useScroll, motion, useAnimate, useMotionValue } from 'framer-motion';
import SectionAnimation from "./components/SectionAnimation";
import thaiIslandsImg from "./public/images/thaiislands-img.png";
import iceOfCreamImg from "./public/images/ice-of-cream-img-1.png";
import Script from 'next/script';

export default function Home() {
  let ref = useRef(null);
  const container = useRef();
  const [ media, setMedia ] = useState("desktop");
  const [menuIsActive, setMenuIsActive] = useState(true);
  const projects = [
    {
      "title": "Ice Of Cream",
      "link": "https://ice-of-cream.vercel.app/",
      "image": iceOfCreamImg.src,
      "content": {}
    },
    {
      "title": "Thaiislands",
      "link": "https://thaiislands.vercel.app/about",
      "image": thaiIslandsImg.src,
      "content": {}
    }
  ];

  const inView = { opacity: 1, x: 0, y: 0 };
  const delay = 3.5;
  const duration = 1.5;

  let { scrollYProgress: scrollYProgressEndStart } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

    // Set the display value to switch by toggle (ease fnc) between flex and none
    const isDisplayed = useTransform(
      scrollYProgressEndStart,
      [0, 0.15, 0.25, 0.75, 1],
      ["hidden", "hidden", "hidden", "visible", "visible"],
      { ease: (t) => Math.round(t) }
  );

  useEffect(() => {
    const { width } = ref.current.getBoundingClientRect();    
    setMedia(width < 680 ? "mobile" : "desktop") 
  }, [ref]);

  return (
      <div ref={ref} className="main-wrapper">
        <IntroSlider media={media} />
        {
          media === 'desktop'
            ? <div className="top-screen h-screen left-0 relative">
            <SectionTransition media={media}></SectionTransition>
          </div>
            : <div
            // id="projects"
            className="projects">
            <motion.div className="projects-content relative">
              <div className="projects-title uppercase">Projects</div>
              <motion.div
                style={{ opacity: 0, visibility: isDisplayed  }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.25, delay: 0.3 }}
                onAnimationComplete={() => setMenuIsActive(false)}
              >
                <SectionAnimation
                  menuIsActive={menuIsActive}
                  media={media}
                  style={{ position: 'relative'}}
                />
              </motion.div>
              
              <motion.div
                style={{ opacity: 0 }}
                initial={{ opacity: 0, y: '-25px' }}
                whileInView={inView}
                transition={{ duration: 0.4, delay: delay }}
                className="projects-inner-content absolute top-16">
                {
                  projects.map(({link, image, title}, index) => {
                    return (
                      <a key={index} className="proj-a" href={link} target="_blank" rel="noopener noreferrer">
                        <div className="proj-card"
                          style={{
                            backgroundPosition: 'center',
                            borderRadius: '0.85rem',
                            backgroundImage: `url(${image})`,
                            // backgroundSize: "cover",
                            backgroundSize: "contain",
                            backgroundRepeat: 'no-repeat',
                        }}>
                          <motion.div
                            className="proj-title"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 0.7 } : { opacity: 0 }}
                            // transition={{ duration: 1.15, delay: 3.85 }}
                            transition={{ duration: 1.15, delay: 4.15 }}
                          >{title}
                          </motion.div>
                        </div>
                      </a>
                    )
                  })
                }
              </motion.div>
            </motion.div>
          </div>
        }
        <Header media={media} />
      </div>
  );
}
