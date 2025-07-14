import { motion } from "framer-motion";
const CreatedBy = () => {
  const logoStr = "*DEBRAND.DESIGN*";
    return (
      <div className="relative">
        <div className="created-by">
            <span className={`debrand-logo text-[#ff0000]
               mr-1 font-bold stars-wrapper`}
              style={{
                opacity: 0.8,
                maxHeight: "40px",
                scale: 1.25,
                prespective: 1000
              }}
              >
              {
                logoStr.split("").map((letter, i) => {                  
                  return (
                    <motion.span
                      key={i}
                      className={i !== 0 && i !== 8 && i !== 15 ? `star-icon` : ''}
                      style={{ rotateX: "-180deg", opacity: 0, }}
                      variants={{
                        initilal: { rotateX: "-180deg", opacity: 0, y: "1rem" },
                        animate: { rotateX: 0, opacity: 1, y: 0 }
                      }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.5, animationDirection: "normal", delay: 3.65, once: true }}
                      >
                      {letter}
                    </motion.span>)
                })
              }
            </span>
        </div>
      </div>
    )
}

export default CreatedBy;