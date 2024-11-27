import { motion } from "framer-motion";

const ShineWaveAnimation = ({ text }) => {
  
    return (
        <div>
          <motion.button
            className={`wave-btn w-full flex justify-center text-bold text-[1.75rem]
              text-white transition-colors md:w-fit z-8 uppercase`}
            style={{ minWidth: 180 }}
            initial={{ "--x":  "100%", scale: 1}}
            animate={{ "--x":  "-100%" }}
            whileTap={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.1
              }
            }}
            >
              <span className={`text-neutral-100 tracking-wide flex justify-center
                font-light h-full w-full block relative linear-mask`}>
                {text}
              </span>
          </motion.button>
        </div>
    )
}

export default ShineWaveAnimation;