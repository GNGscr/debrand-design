'use client';
import { motion } from 'framer-motion';

export default function ProjectCard({ link, image, title }) {
  return (
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
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 1.15, delay: 4.15 }}
        >
          {title}
        </motion.div>
      </div>
    </a>
  );
}
