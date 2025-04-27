import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

export default function HoverLinksText({ media }) {

  return (
    <motion.section className="p-4 md:p-8"
      style={{ display: 'none' }}
      initial={{ display: 'none' }}
      animate={{ display: 'flex' }}
      transition={{ duration: 0.1, delay: 4 }}
      >
      <div className={`social-links mx-auto max-w-[68.5rem] flex w-[100%]
        ${media === "mobile" ? "gap-[0rem]" : "gap-[2.5rem]"}`}>

        <Link
          heading="LINKEDIN"
          subheading="linkedin/daniel-ehrlich"
          href="https://linkedin.com/in/daniel-ehrlich-36a389136"
          cta="Go To My LinkedIn"
          media={media}
          index={1}
        />
        <Link
            heading="EMAIL"
            subheading="de.brand808@gmail.com"
            href="https://de.brand808@gmail.com"
            cta="Send Email"
            media={media}
            index={2}
          />
        <Link
          heading="WHATSAPP"
          subheading="(+972)523650974"
          href="(+972)523650974"
          cta="Send WhatsApp"
          media={media}
          index={3}
        />
        <Link
          heading="PHONE"
          subheading="(+972)523650974"
          href="(+972)523650974"
          cta="Call Number"
          media={media}
          index={4}
        />

      </div>
    </motion.section>
  );
};

const Link = ({ heading, subheading, href, cta, media, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  let isMobileMedia = media === "mobile" ?? "whileHover";

  const handleClick = (e, href, heading, subheading) => {
    e.preventDefault();
    if (heading === "EMAIL") {
      handleEmail(subheading);
    } else if (heading === "PHONE") {
      const phoneNumber = href.replace(/[^0-9+]/g, '');
      const telLink = `tel:${phoneNumber}`;
      // const facetimeLink = `facetime:${phoneNumber}`;
      window.location.href = telLink;
      window.open(telLink, '_blank');
    } else if (heading === "WHATSAPP") {
      window.open(`https://wa.me/${href.replace(/[^0-9]/g, '')}`, '_blank');
    } else if (heading === "LINKEDIN") {
      window.open(href, '_blank');
    }
  }
  const handleEmail = (email) => {
    const subject = encodeURIComponent("Subject of the email");
    const body = encodeURIComponent("Body of the email");
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={e => e.preventDefault()}
      initial="initial"
      whileHover="whileHover"
      whileTap={media === "mobile" ? "whileHover" : "initial"}
      className={`group relative border-b-1 border-neutral-400
        transition-colors duration-500 ${media === "mobile" ? "z-11" : ""}`}
    >
      <motion.div
        className="flex justify-center align-center w-[100%] flex-col"
        initial={{ transform: "translateZ(8px) translateY(-4px)" }}
        animate={{ transform: "translateZ(8px) translateY(-8px)" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2.25,
          ease: "easeInOut",
          delay: index * 0.0025
        }}
      >
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -18 },
            whileTap: {isMobileMedia}
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.065,
            delayChildren: 0.15,
            bounce: 0.1
          }}
          className={`social-label relative flex items-center justify-center z-3 block text-[0.5rem]
            transition-colors duration-500 group-hover:text-neutral-800 md:text-[2.85rem]
            link-text whitespace-nowrap font-bold text-[#000]
            `}
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
                whileTap: {isMobileMedia}
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              <motion.div
                className="overflow-hidden"
                style={{opacity: 0,}}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 18}}
                transition={{ 
                  duration: 1, 
                  delay: 4.25, 
                  type: "spring",
                  bounce: 0.5
                 }}
                >
              {l}
              </motion.div>
            </motion.span>
          ))}
        </motion.span>
        <div className={`link-cta-wrp flex justify-center align-center w-[100%] flex-col`}>
          <span className={`link-cta relative z-3 block text-[1.2rem] text-[transparent]
            transition-colors duration-500 group-hover:text-neutral-700
            w-fit whitespace-nowrap font-bold`}>
            {subheading}
          </span>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .85, delay: 1.25 }}
              onClick={e => handleClick(e, href, heading, subheading)}
              className={`link-cta cta-btn text-[1.15rem] mt-2 text-[transparent]
                transition-colors duration-500 group-hover:text-neutral-100
              w-fit whitespace-nowrap font-bold flex gap-[0.5rem]`}
            >
              {cta}
              <svg xmlns="http://www.w3.org/2000/svg" width="14.002" height="6.5" viewBox="0 0 15.802 8.73"><path fill="#fff" data-name="angle-small-down" d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21A1,1,0,0,0,5.29,9.62l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" transform="translate(19.001 16.087) rotate(180)"></path>
              </svg>
            </motion.a>
        </div>
      </motion.div>


      <motion.div
        style={{
          top,
          left,
          translateX: "15%",
          translateY: media === "mobile" ? "-165%" : "-85%",
          display: media === "mobile" ? "flex" : "flex"
        }}
        variants={{
          initial: { scale: 0, rotate: "12.5deg" },
          whileHover: { scale: 1, rotate: "0deg" },
        }}
        transition={{ type: "spring" }}
        className="absolute ml-[-12.5rem] h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      >
        {
          heading === "LINKEDIN"
            ? <a href={href} target="_blank" rel="noopener noreferrer"
                onClick={e => handleClick(e, href, heading, subheading)}>
                <svg className="z-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201 201" width="75" height="75">
                  <rect fill="#379AD0" width="201" height="201" rx="19" ry="19"/>
                  <g fill="#FEFEFE">
                    <polygon points="39,102 39,162 68,162 68,97 68,80 39,80"/>
                    <path d="M54 39c-8 0-15 7-15 15 0 7 7 14 15 14 7 0 14-7 14-14 0-8-7-15-14-15z"/>
                    <path d="M161 105c-2-15-9-25-30-25-12 0-20 5-24 11v-11H84v82h24v-41c0-10 2-21 15-21 13 0 14 13 14 22v40h25v-45c0-4 0-8-1-12z"/>
                  </g>
                </svg>
              </a>
          : ''
        }
        {
          heading === "PHONE"
            ? <a href={href} target="_blank" rel="noopener noreferrer"
                onClick={e => handleClick(e, href, heading, subheading)}>
                <svg height="75" width="75" viewBox="0 0 201 201" xmlns="http://www.w3.org/2000/svg">
                  <g id="Layer_1">
                    <rect fill="#2DC100" height="201" rx="19" ry="19" width="201"/>
                    <path fill="#FEFEFE" d="M107 34c37 5 54 23 59 60 0 4 0 8 4 8 4 0 4-3 4-6v-2c1-35-30-67-66-68-3 0-9-2-9 4 0 4 5 3 8 4z"/>
                    <path fill="#FEFEFE" d="M114 44c-4-1-8-2-9 2-1 6 4 5 8 6 23 5 31 13 35 36v3c0 2 1 5 5 4 2 0 3-1 3-3v-4c0-22-19-42-42-44z"/>
                    <path fill="#FEFEFE" d="M116 61c-2 0-5 1-5 3-2 4 1 5 4 5 9 2 14 7 15 16 0 2 1 3 1 4 1 0 2 1 4 1h1c2-1 2-3 2-5 0-11-12-23-22-23z"/>
                    <path fill="#FEFEFE" d="M164 134c-5-4-10-7-14-10-10-7-19-7-27 3-4 6-9 7-15 4-17-7-30-19-37-35-1-3-2-5-2-8-1-4 1-8 6-11 4-3 8-6 8-12 0-8-20-34-27-37-3-1-6-1-10 0-18 6-25 21-18 38 4 9 9 18 14 26 22 37 54 64 96 81 3 2 6 2 7 3 12 0 26-11 30-22 3-11-5-15-11-20z"/>
                  </g>
                </svg>
              </a>
          : ''
        }
        {
          heading === "WHATSAPP"
            ? <a href={href} target="_blank" rel="noopener noreferrer"
                onClick={e => handleClick(e, href, heading, subheading)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187 187" width="75" height="75">
                  <rect fill="#009846" width="187" height="187" rx="18" ry="18"/>
                  <path fill="#FEFEFE" d="M95 146c-11 0-22-3-31-9l-21 7 7-20c-6-9-10-20-10-32v-5c3-28 26-50 55-50s52 22 55 51v4c0 30-25 54-55 54zm65-56c-1-35-30-63-65-63S31 54 29 89v3c0 12 4 24 10 33l-12 35 36-11c9 5 20 8 32 8 36 0 65-29 65-65v-2z"/>
                  <path fill="#FEFEFE" d="M125 105l-11-5c-1-1-2-1-3 1l-5 6c-1 1-2 1-3 0-2-1-7-2-13-8s-8-9-9-11c-1-1 0-2 0-3l3-3v-2c1-2 1-2 0-3l-5-12c-1-3-2-3-3-3h-3c-1 0-3 1-5 2-1 2-5 6-5 13 0 2 0 4 1 6 1 5 5 10 5 11 1 1 11 18 28 24 16 6 16 4 19 4 3 0 10-4 11-8 1-3 1-7 1-7-1-1-2-1-3-2z"/>
                </svg>
              </a>
          : ''
        }
        {
          heading === "EMAIL"
            ? <a href={href} target="_blank" rel="noopener noreferrer"
                onClick={e => handleClick(e, href, heading, subheading)}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                </svg>
              </a>
            : ''
        }
        
      </motion.div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-3"
      >
      </motion.div>
    </motion.div>
  );
};