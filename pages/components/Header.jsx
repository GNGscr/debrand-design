"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { easeInOut, motion, useTransform, useScroll } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

export default function Header({ media }) {
  const comp = useRef(null);
  const [ currentButton, setCurrentButton ] = useState();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(
        ["#header-li-1", "#header-li-2", "#header-li-3", "#header-li-4"],
        { opacity: 0, duration: 0.5, stagger: 0.1, y: "-=12.5", delay: 5 }
      );
    }, comp);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sectionToIntersect = ["#home", "#about", "#menifest", "#projects"];
    const intersections = document.querySelectorAll(sectionToIntersect);
    const intersectionsIterator = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intersectingEntry = entry.target.id;
          setCurrentButton(intersectingEntry);
          // Update the URL with the section query parameter
          const params = new URLSearchParams(window.location.search);
          params.set("section", intersectingEntry);
          // Use replace to avoid adding a new entry in the history stack
          router.replace(`?${params.toString()}`, { scroll: false });
            }
          });
    };
  
    const observer = new IntersectionObserver(intersectionsIterator, {
      threshold: 0.5,
    });
  
    [...intersections].forEach((intersection) =>
      observer.observe(intersection)
    );
  
    return () => observer.disconnect();
  }, []);
  

  const handleClick = (e, inputTarget) => {
    e.preventDefault();

    const target = document.getElementById(inputTarget);
    const scrollPositions = {
      desktop: {
        home: 0,
        about: 703,
        menifest: 1500,
        projects: 2450,
      },
      mobile: {
        home: 0,
        projects: 500,
      },
    };
    if (
      target &&
      [...Object.keys(scrollPositions[media])].includes(target.id)
    ) {
      window.scrollTo({
        top: scrollPositions[media][target.id],
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      ref={comp}
      className="header-wrp flex justify-center p-5 fixed z-99 top-0 left-0"
    >
      <motion.div
        id="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        style={{ opacity: 0 }}
      >
        <ul className="header-ul flex gap-[100px]">
          <a
            href="home"
            onClick={(e) => handleClick(e, "home")}
            id="header-li-1"
          >
            <li>
              <ZoopEffect media={media} current={currentButton} name="home">home</ZoopEffect>
            </li>
          </a>
          {media === "desktop" ? (
            <a
              href="about"
              onClick={(e) => handleClick(e, "about")}
              id="header-li-2"
            >
              <li>
                <ZoopEffect media={media} current={currentButton} name="about">about</ZoopEffect>
              </li>
            </a>
          ) : (
            ""
          )}
          {media === "desktop" ? (
            <a
              href="menifest"
              onClick={(e) => handleClick(e, "menifest")}
              id="header-li-3"
            >
              <li>
                <ZoopEffect media={media} current={currentButton} name="menifest">menifest</ZoopEffect>
              </li>
            </a>
          ) : (
            ""
          )}
          <a
            href="projects"
            onClick={(e) => handleClick(e, "projects")}
            id="header-li-3"
          >
            <li>
              <ZoopEffect media={media} current={currentButton} name="projects">projects</ZoopEffect>
            </li>
          </a>
        </ul>
      </motion.div>
    </header>
  );
}

const DURATION = 0.1;
const STAGGER = 0.1;

const ZoopEffect = ({ children, href, media, current, name }) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
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
    [0, 0.2525, 0.735, 1],
    ["#000", "#000", "rgb(252 165 165)", "rgb(252 165 165)"],
    { ease: (t) => Math.round(t) }
  );
  useEffect(() => {}, [color, mobileColor]);
  const isCurrent = name === current;
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative overflow-hidden text-gray-800 --font-nerko-one-regular
        whitespace-nowrap text-[1.2rem] font-bold
        sm:text-[1.2rem] md:text-[1.2rem] lg:text-[1.2rem] z-20 transition-opacity duration-300`}
        style={{
          lineHeight: 0.8,
          color: media === "desktop" ? color : mobileColor,
          opacity: isCurrent ? 1 : 0.65,
          transition: "opacity 0.3s ease",
        }}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: easeInOut,
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: easeInOut,
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};
