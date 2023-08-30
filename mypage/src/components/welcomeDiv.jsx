import React from 'react';
import "./css/WelcomeDivStyle.css";
import { motion } from "framer-motion";
const WelcomeDiv = () => {

    const motionAnimation = {
        FadeIn: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5 }
        },
    };

    return (
        <motion.div
            className='WhiteDiv'
            {...motionAnimation.FadeIn}
        >
            <h1>
                Welcome<br />
                To<br />
                My<br />
                Page<br />
            </h1>
        </motion.div>
    );

}

export default WelcomeDiv;