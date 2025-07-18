'use client';
import Image from "next/image";
import myImg from "../public/images/my-photo.jpeg";
import thaiIslandsImg from "../public/images/thaiislands-img.png";
import iceOfCreamImg from "../public/images/ice-of-cream-img-1.png";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion, useAnimate } from 'framer-motion';
import Lenis from "@studio-freight/lenis";
import ShineWaveAnimation from "./ShineWaveAnimation.jsx";
import SectionAnimation from "./SectionAnimation";

export default function SectionTransition({ media }) {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    let { scrollYProgress: scrollYProgressEndStart } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    });
    
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    return (
      <div ref={container}
          className="relative section-transition-main">
        <Section1 scrollYProgress={scrollYProgress} media={media} />
        <Section2
          scrollYProgress={scrollYProgress}
          scrollYProgressEndStart={scrollYProgressEndStart}
          media={media}
           />
      </div>
    )
}

const Section1 = ({scrollYProgress, media}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        <motion.div
          style={media === 'desktop' ? { scale, rotate } : { scale, rotate }}
          id="about"
          className={`sticky top-0 h-screen bg-black text-[3.25vw] flex flex-col
            items-center justify-center text-white pt-[17.5vh] pb-[0vh] mb-[7.5vh]`}>
            <ShineWaveAnimation text="About Me" />
            <div className="about-content flex gap-[10rem] mt-[1rem]">
                <div style={{clipPath: "xywh(0 5px 100% 75% round 15% 0)" }}
                     className="clip-path relative w-[25vw] h-[37.5vw] mt-[1.5rem]">
                    <Image 
                      className="absolute left-[1rem]"
                      src={myImg}
                      alt="img"
                      style={{ aspectRatio: 4/3 }}
                      placeholder="blur"
                      fill
                    />
                </div>
                <div className="right-section flex flex-col">
                    <div className="about-me-title mt-[1rem] mb-[0.5rem] text-[2rem]">As a Creative Developer..</div>
                    <div className="about-me-title mt-[2rem] mb-[1rem] text-[1.5rem] flex flex-wrap w-[25rem]">
                    In the last 5 years I worked with Forter. Contributing to the team effort, migrating old code to new, doing face lifts, refactoring, creating in house tools for the company. In some projects doing UX/UI, design and development.
                    </div>
                    <a
                      className="my-linkedin text-lg text-blue-300 hover:text-blue-200"
                      href="https://linkedin.com/in/daniel-ehrlich-36a389136">
                        Go to my Linkedin profile {' >'}
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

const Section2 = ({ scrollYProgress, scrollYProgressEndStart, media }) => {

  const [menuIsActive, setMenuIsActive] = useState(true);
  
  const firstPara = {
    "line1": "My Passion is creating a Unique",
    "line2": "& Meaninigful experience.",
  };
  const secondPara = "Making each Project with different Energy and an Authentic Vibe !";

  const projects = [
    {
      "title": "Thaiislands",
      "link": "https://thaiislands.vercel.app/about",
      "image": thaiIslandsImg.src,
      "content": {},
      "github": "https://github.com/GNGscr/Thaiislands"
    },
    {
      "title": "Ice Of Cream",
      "link": "https://ice-of-cream.vercel.app/",
      "image": iceOfCreamImg.src,
      "content": {},
      "github": "https://github.com/GNGscr/IceOfCream"
    }
  ];

  const inView = { opacity: 1, x: 0, y: 0 };
  const delay = 3.5;
  const duration = 1.5;
  
  const [ scope, animate ] = useAnimate();
  const SectionScope = useRef();
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  
  const BrokenTextAnimation = async () => {

    // set text to be broken
    animate("#a-bottom", { x: "-1.25rem", rotate: -25, y: "5px" }, { delay: 0.6, duration: 0.3 });
    animate("#s-bottom", { x: "1.25rem"  }, { delay: 0.6, duration: 0.3 });
    animate("#creative-bottom", { x: "4.9rem", rotate: "-0.05deg" }, { delay: 0.6, duration: 0.3 });
    await animate("#pull-line", { x: "0.65rem", opacity: 1 }, { duration: 0.5, delay: 1 });
    animate("#clipper-top", { rotate: -15 }, { duration: 0.5, delay: 0 });
    await animate("#clipper-bottom", { rotate: 15 }, { duration: 0.5, delay: 0 });

    // set broken text
    animate("#a-bottom", { x: 0, rotate: 0, y: 0 }, { delay: 0.025, duration: 0.4 });
    animate("#s-bottom", { x: "2.5rem"  }, { delay: 0.025, duration: 0.4 });
    animate("#creative-bottom", { x: "5.25rem", y: 0, rotate: 0 }, { delay: 0.025, duration: 0.4 });
    await animate("#pull-line", { x: "1rem", opacity: 1 }, { duration: 0.4, delay: 0.025 });
    animate("#clipper-top", { rotate: -35 }, { duration: 0.5, delay: 0.025 });
    animate("#clipper-bottom", { rotate: 35 }, { duration: 0.5, delay: 0.025 });

    // return to offset position
    await animate("#pull-line", { x: "30rem" }, { duration: 0.5, delay: 0.25 });
    await animate("#pull-line", { opacity: 0 }, { duration: 0.1, delay: 0.1 });
  }


    // Set the display value to switch by toggle (ease fnc) between flex and none
    const isDisplayed = useTransform(
      scrollYProgressEndStart,
      [0, 0.15, 0.25, 0.75, 1],
      ["hidden", "hidden", "hidden", "visible", "visible"],
      { ease: (t) => Math.round(t) }
    );


    return (
      <div className="sticky top-0 h-[237.5vh]" style={{ height: media === 'desktop' ? '237.5vh' : '100vh', width: '100%' }}>
        <div className="sticky top-0 h-[135vh]" style={{ height: media === 'desktop' ? '100vh' : '0vh', width: '100%' }}>
          <motion.div
            id="menifest"
            ref={SectionScope}
            style={media === 'desktop' ? { scale, rotate } : { scale, rotate }}
            className={`relative h-screen w-screen bg-gray-200 text-[3.5vw]
              flex flex-col items-center justify-center text-black pb-[2.5vh]`}>
              <div
                className="flex flex-col gap-10 w-[45%]">
                  <motion.div
                    ref={scope}
                    whileInView={() => BrokenTextAnimation()}
                    className="about-me-title creative-dev mb-[5rem] font-bold relative">
                      <div id="a-parent">
                          <span id="a-top"
                            className="text-[#ff0000] text-[3.5rem] absolute top-0 left-[0rem] z-1"
                            style={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)" }}>A
                          </span>
                          <span
                            id="a-bottom"
                            className="text-[#ff0000] text-[3.5rem] absolute top-0 overflow-hidden z-2"
                            style={{ clipPath: "polygon(0% 0, 100% 0, 100% 50%, 0 50%)" }}>A
                          </span>
                      </div>

                      <div id="s-parent">
                          <span id="s-top"
                            className="text-[#ff0000] text-[3.5rem] absolute top-0 left-[2.5rem] z-1"
                            style={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)" }}>s
                          </span>

                          <motion.span
                            initial={{ x: "2.5rem" }}
                            id="s-bottom"
                            className="text-[#ff0000] text-[3.5rem] absolute top-0 overflow-hidden z-2"
                            style={{ clipPath: "polygon(0% 0, 100% 0, 100% 50%, 0 50%)" }}>s
                          </motion.span>
                      </div>

                      <div id="creative-top"
                        className="absolute top-2 left-[5.25rem] z-1"
                        style={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)" }}>a Creative Developer..
                      </div>

                      <motion.div
                        id="creative-bottom"
                        initial={{ x: "5.25rem", y: 0, rotate: 0 }}
                        className="absolute top-2 overflow-hidden z-2"
                        style={{ clipPath: "polygon(0% 0, 100% 0, 100% 50%, 0 50%)" }}>a Creative Developer..
                      </motion.div>
                      
                      <motion.div
                        id="pull-line"
                        className="fixed"
                        initial={{ x: "30rem", opacity: 0 }}>
                        <motion.div id="clipper-top" initial={{ rotate: -35 }}></motion.div>
                        <motion.div id="clipper-bottom" initial={{ rotate: 35 }}></motion.div>
                      </motion.div>
                  </motion.div>

                  <div
                    id="decleration-first"
                    className={`decleration flex  mt-[1rem] mb-[1rem]
                      text-[2.25rem] flex flex-wrap w-[35rem]`}>
                      <motion.div
                        initial={{ opacity: 0, x: '1.5rem' }}
                        whileInView={inView}
                        transition={{ duration: duration, type: 'spring', delay: delay }}
                        className="line-1">
                        {firstPara.line1}
                      </motion.div>
                      <div className="line-2">
                        {
                          firstPara.line2.split(" ").map((word, index) => {
                            return (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: "-1.5rem" }}
                                whileInView={inView}
                                transition={{ duration: duration, type: 'spring', delay: delay }}
                                className="mr-[0.5rem]"
                                >{word}</motion.div>
                            )
                          })
                        }
                      </div>
                  </div>
                  <motion.div
                    id="decleration-second"
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0, y: "0.75rem" }}
                    whileInView={inView}
                    transition={{ duration: duration, type: 'spring', delay:delay }}
                    className={`decleration flex  mt-[1rem] mb-[1rem]
                      text-[2.025rem] flex flex-wrap w-[35rem]`}
                    >
                      {
                        secondPara.split(' ')
                          .map((word, index) => {
                          return (
                            <div key={index} className="mr-[0.5rem]" style={{fontWeight: 600}}>{word}</div>
                          )
                        })
                      }
                  </motion.div>
              </div>
          </motion.div>
        </div>
        <div />
        <div className="projects" id="projects">
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
              initial={{ opacity: 0, y: '25px' }}
              whileInView={inView}
              transition={{ duration: 0.4, delay: delay }}
              className="projects-inner-content absolute top-16">
              {
                projects.map(({link, image, title}, index) => {
                  return (
                    <motion.div key={index} className="proj-card-wrapper"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                      <a className="proj-a" href={link} target="_blank" rel="noopener noreferrer">
                        <div className="proj-card"
                          style={{
                            backgroundPosition: 'center',
                            borderRadius: '0.85rem',
                            backgroundImage: `url(${image})`,
                            backgroundSize: "contain",
                            backgroundRepeat: 'no-repeat',
                        }}>
                          <motion.div
                            className="proj-title"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.9 }}
                            transition={{ duration: 1.15, delay: 4.15 }}
                          >{title}
                          </motion.div>
                        </div>
                      </a>
                      <div className="proj-card-github">
                        <a href={projects[index].github} target="_blank" rel="noopener noreferrer">Go to Github repository</a>
                      </div>
                    </motion.div>
                  )
                })
              }
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
}