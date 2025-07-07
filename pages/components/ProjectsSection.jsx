'use client';
import { useState } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import SectionAnimation from "./SectionAnimation";
import ProjectCard from "./ProjectCard";
import iceOfCreamImg from "../public/images/ice-of-cream-img-1.png";
import thaiIslandsImg from "../public/images/thaiislands-img.png";

export default function ProjectsSection({ media, container }) {
  const [menuIsActive, setMenuIsActive] = useState(true);
  const inView = { opacity: 1, x: 0, y: 0 };
  const delay = 3.5;

  let { scrollYProgress: scrollYProgressEndStart } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const isDisplayed = useTransform(
    scrollYProgressEndStart,
    [0, 0.15, 0.25, 0.75, 1],
    ["hidden", "hidden", "hidden", "visible", "visible"],
    { ease: (t) => Math.round(t) }
  );

  const projects = [
    {
      title: "Thaiislands",
      link: "https://thaiislands.vercel.app/about",
      image: thaiIslandsImg.src,
    },
    {
      title: "Ice Of Cream",
      link: "https://ice-of-cream.vercel.app/",
      image: iceOfCreamImg.src,
    }
  ];

  return (
    <div className="projects">
      <motion.div className="projects-content relative">
        <div className="projects-title uppercase">Projects</div>
        <motion.div
          style={{ opacity: 0, visibility: isDisplayed }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.25, delay: 0.3 }}
          onAnimationComplete={() => setMenuIsActive(false)}
        >
          <SectionAnimation menuIsActive={menuIsActive} media={media} />
        </motion.div>

        <motion.div
          style={{ opacity: 0 }}
          initial={{ opacity: 0, y: '-25px' }}
          whileInView={inView}
          transition={{ duration: 0.4, delay: delay }}
          className="projects-inner-content absolute top-16"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
