import React from 'react';
import { motion } from 'framer-motion';
import { useRive, useStateMachineInput } from 'rive-react';
// import DolphinRive from './pages/public/dolphin.riv';

const STATE_MACHINE_NAME = "State Machine 1";

const SectionAnimation = ({ menuIsActive }) => {

    const {rive, RiveComponent} = useRive({
        src: "dolphin.riv",
        autoplay: true,
        stateMachines: STATE_MACHINE_NAME
    })

    const stateSuccess = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        'Timeline 1'
    )
    const triggerSuccess = () => {
        stateSuccess && stateSuccess.fire();
    }
    
    if (rive) {
    //   console.log(rive.contents);
      triggerSuccess()
    }

    // console.log('anim: ', menuIsActive);
    
    return (
        <motion.div
        style={{borderRadius: '50%'}}
            className="slide-in"
            initial={{ opacity: 0 }}
            animate={ menuIsActive ? { opacity: 1 } : { opacity: 0 } }
            // whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                // initial={{ opacity: 0 }}
                // animate={ menuIsActive ? { opacity: 1 } : { opacity: 0 } }
                // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className={`flex justify-center align-center`}
                style={{
                    padding: "0",
                    // height: "35vw",
                    // width: "35vw",
                    borderRadius: "50%",
                    // border: "0.5rem solid #ca8a03",
                    // boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.25)",
                    background: "#000" }}>

                        <RiveComponent style={{width:'400px', height:'400px', borderRadius: "50%", marginTop: "0rem", clipPath: 'circle(40%)'}} src="dolphin.riv"/>

            </motion.div>
        </motion.div>
    );
};

// {/* <Image
// src="/logo.png"
// alt="Mascot"
// height={240}
// width={240}
// className="hidden lg:block cover" /> */}
export default SectionAnimation;