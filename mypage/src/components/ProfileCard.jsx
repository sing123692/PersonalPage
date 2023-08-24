import React, { useState } from 'react';
import "./css/ProfileCardDivStyle.css";

const ProfileCard = () => {

    const [ShowAboutMe, setShowAboutMe] = useState(false);
    const [ShowText, setShowText] = useState(true);


    const toggleAboutMe = () => {
        setShowAboutMe(!ShowAboutMe);
        setShowText(!ShowText);
    };

    return (
        <div className='BackShape'>
            <div className='ProfileCardDiv'>

                <div className='Profile'>



                    {ShowText && (
                        <div className='avatar'>
                            <img src="" alt="" />
                        </div>
                    )}
                    {ShowText && (
                        <div className='text'>
                            <h1>OOO</h1>
                            <h2>畢業於OOOXXX</h2>
                        </div>
                    )}
                    {ShowAboutMe && (
                        <div className='AboutMe'>
                            ProfileCardDivProfileCardDivProfileCardDivProfileCardDiv
                            ProfileCardDivProfileCardDivProfileCardDivProfileCardDiv

                        </div>
                    )}




                    <div className='buttonDiv'>
                        <button className="aboutButtonStyle" onClick={toggleAboutMe}>
                            切換 About Me
                        </button>
                    </div>
                </div>

            </div>
            <div className='WhiteCircle'></div>

        </div>

    );

}

export default ProfileCard;