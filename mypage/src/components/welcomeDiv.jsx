import React from 'react';
import "./css/WelcomeDivStyle.css";
import { motion } from "framer-motion";
const WelcomeDiv = () => {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='WhiteDiv'>
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