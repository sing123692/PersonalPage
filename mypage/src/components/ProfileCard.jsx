import React, { useState } from 'react';
import "./css/ProfileCardDivStyle.css";
import { motion } from 'framer-motion';

const ProfileCard = (props) => {

    const [ShowAboutMe, setShowAboutMe] = useState(true);
    const [ShowSkill, setShowSkill] = useState(false);
    console.log(props);


    const toggleAboutMe = () => {
        setShowAboutMe(!ShowAboutMe);
        setShowSkill(!ShowSkill);

    };



    return (
        <motion.div>
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
                        <h1>關於我</h1>

                        <p>
                            你好！我是曾郁庭，近期剛從資策會畢業，正在尋找網頁前端相關的工作。<br />
                            我會使用的語言有基本的HTML、CSS、JavaScript，<br />
                            框架則是使用了React目前正在學習Vue，在此前也有使用過jQuery含式庫，<br />
                            CSS的部分學習使用了SCSS正在學習TailWindCss<br />
                            API串接的時候使用AJAX但後來改使用框架的原因改使用了Axios<br />
                            也會使用Boostrap套用現有的套版。<br />
                            在學期間，略懂一些後端的程式語言，<br />
                            目前使用的是MySQL與Express套件去將資料庫與本地伺服器連接。<br />

                            <br />
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