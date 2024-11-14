'use client';
import Image from "next/image";
import myImg from "../public/images/my-photo.jpeg";
import { useEffect, useRef } from "react";
import { useTransform, useScroll, motion } from 'framer-motion';
import Lenis from "@studio-freight/lenis";
import ShineWaveAnimation from "./ShineWaveAnimation";

export default function SectionTransition() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
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
      <div ref={container} className="relative h-[205vh] section-transition-main">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </div>
    )
}

const Section1 = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        <motion.div
          style={{scale, rotate}}
          id="about"
          className={`sticky top-0 h-screen bg-black text-[3.25vw] flex flex-col
            items-center justify-center text-white pt-[10vh] pb-[0vh] mb-[5vh]`}>
            <ShineWaveAnimation text="About Me" />
            <div className="flex gap-[15rem] mt-[1rem]">
                <div // style={{clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)"}}
                  style={{clipPath: "xywh(0 5px 100% 75% round 15% 0)"}}
                  className="relative w-[25vw] h-[37.5vw] mt-[1.5rem]">
                    <Image 
                      className="absolute left-[1rem]"
                      src={myImg}
                      alt="img"
                      placeholder="blur"
                      fill
                    />
                </div>
                <div className="right-section flex flex-col">
                    <div className="about-me-title mt-[0.5rem] mb-[0.5rem] text-[1.5rem]">As a Creative Developer..</div>
                    <div className="about-me-title mt-[1rem] mb-[1rem] text-[1.35rem] flex flex-wrap w-[25rem]">
                        In the last 5 years I worked with Forter. Mainly creating tools and bla blas. Company tools where doing UX/UI, design and development.
                    </div>
                    <div className="about-me-title mt-[1rem] mb-[1rem] text-[1.35rem] flex flex-wrap w-[25rem]">Working with Hamaagal, a worldwide platform that connects communities and buissnesses.</div>
                    <div className="about-me-title mt-[1rem] mb-[1rem] text-[1.35rem] flex flex-wrap w-[25rem]">Currently contributing to an ongoing digital project for helping children.</div>
                </div>
            </div>
        </motion.div>
    )
}

const Section2 = ({scrollYProgress}) => {
    const SectionScope = useRef();
    const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);
    return (
        <motion.div
          id="menifest"
          ref={SectionScope}
          style={{ scale, rotate }} 
          className={`relative h-screen bg-gray-200 text-[3.5vw]
            flex flex-col items-center justify-center text-black pb-[2.5vh]`}>
            <div className="flex flex-col gap-10 w-[45%]">
                <div className="about-me-title creative-dev mb-[5rem] font-bold relative">
                    <div id="a-parent">
                        <span id="a-top"
                          className="text-[#ff0000] text-[3.5rem] absolute top-0 left-[0rem] z-1"
                          style={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)" }}>
                            A
                        </span>
                        <span id="a-bottom"
                          className="text-[#ff0000] text-[3.5rem] absolute top-0 left-[-1.25rem] overflow-hidden z-2"
                          style={{ clipPath: "polygon(0% 0, 100% 0, 100% 50%, 0 50%)", rotate: "-25deg", top: "5px" }}>
                            A
                        </span>
                    </div>

                    <div id="s-parent">
                        <span id="s-top"
                          className="text-[#ff0000] text-[3.5rem] absolute top-0 left-[2.5rem] z-1"
                          style={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)" }}>
                            s
                        </span>
                        <span id="s-bottom"
                          className="text-[#ff0000] text-[3.5rem] absolute top-0 left-[1.25rem] overflow-hidden z-2"
                          style={{ clipPath: "polygon(0% 0, 100% 0, 100% 50%, 0 50%)" }}>
                            s
                        </span>
                    </div>

                    <div id="creative-top"
                      className="absolute top-2 left-[5.25rem] z-1"
                      style={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)" }}>
                      a Creative Developer..
                    </div>
                    <div id="creative-bottom"
                      className="absolute top-2 left-[4.9rem] overflow-hidden z-2"
                      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 50%, 0 50%)", rotate: "-0.05deg" }}>
                      a Creative Developer..
                    </div>
                </div>

                <div id="decleration-first" className="decleration flex  mt-[1rem] mb-[1rem] text-[2.25rem] flex flex-wrap w-[35rem]">
                    My Passion is creating a Unique and Meaninigful experience.
                </div>
                <div id="decleration-second" className="decleration flex  mt-[1rem] mb-[1rem] text-[2.25rem] flex flex-wrap w-[35rem]">
                    Making each Project with different Vibe and Energy.
                </div>
            </div>
        </motion.div>
    )
}