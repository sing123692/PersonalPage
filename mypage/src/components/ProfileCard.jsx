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
                            <h1>曾郁庭</h1>
                            <h2>畢業於朝陽科技大學<br />近期畢業於資策會</h2>

                        </div>






                    </div>

                </div>


                {ShowAboutMe && (
                    < div className='AboutMe'>
                        <h1>Self Introduction</h1>

                        <p>
                            在資策會就讀時期，學習到了前端相關的HTML、CSS、JavaScript等語言，<br />
                            CSS的部分學習使用了SCSS，JavaScript則是有延伸學習到jQuery函式庫，<br />
                            可以使用ajax以及套用一些已完成套件，也略懂一些後端的程式語言，<br />
                            目前使用的是MySQL與express套件去將資料庫與本地伺服器連接。<br />

                            在畢業專題中，負責了串接政府OpenData與使用Figma設計網頁，<br />
                            以及製作了簡易的登入註冊系統，小組使用了React，<br />
                            因此除了使用ajax，也學習到了使用axios去串接後端或是公開的API，<br />
                            為了能更加應用自如此框架，也持續在更加了解React框架，希望未來完成學習React能了解Vue框架以及其他相關語言。<br />
                        </p>
                    </div>
                )}

                {ShowSkill && (
                    <div className='SkillDiv'>
                        <h1>前端使用工具</h1>
                        <p>Figma、HTML、CSS、SCSS、RWD、Bootstraps、JavaScript、JQuery、React.js、GitDesktop</p>
                        <h1>後端使用工具</h1>
                        <p>Node.js、Express、MySQL、</p>
                    </div>
                )}


                <div className='buttonDiv'>
                    <button onClick={toggleAboutMe}>Next</button>
                </div>

            </div>

        </motion.div >


    );

}

export default ProfileCard;