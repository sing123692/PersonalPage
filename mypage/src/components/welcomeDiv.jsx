import React from 'react';
import "./css/WelcomeDivStyle.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
            {...motionAnimation.FadeIn}>

            <div className='WelcomeText'>
                <h1>
                    Welcome to my page!
                </h1>
                <img src={require("../images/WelcomPic.png")} alt="" />

            </div>
            <div className='WelcomeBtn'>
                <Link to="/design">
                    <motion.button whileHover={{ x: 50 }}
                    >View my Design</motion.button>
                </Link>
                <Link to="/profile">
                    <motion.button whileHover={{ x: 50 }}>View my Profile</motion.button>
                </Link>
            </div>
        </motion.div>
    );

}

export default WelcomeDiv;