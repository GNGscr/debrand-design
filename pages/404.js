import Link from "next/link";
import Head from "next/head";
import SectionAnimation from "./components/SectionAnimation";
import media from "./hooks/useMediaQuery";
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 – Page Not Found</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white px-4 text-center">
        <h1 className="text-6xl font-bold mb-4">
          {/* 404 */}
          <div
          className="w-full flex align-center justify-center text-[3rem] mb-[5px]"
          style={{ opacity: 0.7 }}>
            {
              '404'.split('').map((letter, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: "120%", skewX: 15 }}
                    whileInView={{ opacity: 1, y: 0, skewX: 0 }}
                    transition={{ duration: 0.35, type: "spring", delay: i * 0.03, }}
                  >
                    {letter}
                  </motion.div>
                )
              })
            }
        </div>
        </h1>
        <div className="404-dolphin-animation">
          <SectionAnimation
              menuIsActive={true}
              media={media}
            />
        </div>
        <p className="text-2xl mb-6">
          {`The page you're looking for doesn't exist.`}
        </p>
        <Link
          href="/"
          className="text-lg text-blue-300 hover:text-blue-200"
        >
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
