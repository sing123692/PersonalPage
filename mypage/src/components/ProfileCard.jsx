import React, { useState } from 'react';
import "./css/ProfileCardDivStyle.css";
import { motion } from 'framer-motion';

const ProfileCard = () => {

    const [ShowAboutMe, setShowAboutMe] = useState(true);
    const [ShowSkill, setShowSkill] = useState(false);



    const toggleAboutMe = () => {
        setShowAboutMe(!ShowAboutMe);
        setShowSkill(!ShowSkill);

    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className='BackShape'>
                <div className='ProfileCardDiv'>

                    <div className='Profile'>



                        <div className='avatar'>
                            <img src="" alt="" />
                        </div>


                        <div className='text'>
                            <h1>OOO</h1>
                            <h2>畢業於OOOXXX</h2>
                        </div>






                    </div>

                </div>


                {ShowAboutMe && (
                    < div className='AboutMe'>
                        <h1>introduction</h1>
                        <p>ProfileCardDivProfileCardDivProfileCardDivProfileCardDiv
                            ProfileCardDivProfileCardDivProfileCardDivProfileCardDiv
                        </p>
                    </div>
                )}

                {ShowSkill && (
                    <div className='SkillDiv'>
                        <h1>tool</h1>
                        <p>myskill</p>
                        <h1>tool</h1>
                        <p>myskill</p>
                    </div>
                )}


                <div className='buttonDiv'>
                    <button onClick={toggleAboutMe}>ClickMe</button>
                </div>

            </div>

        </motion.div >


    );

}

export default ProfileCard;