// src/components/About.js
import React from 'react';
import './About.css'; // Import your CSS file
import AIMRunningMan from '../images/AIM_Running_Man.png'; 
import MinMax from '../images/minmax.png'; 
import AIMToolbar from '../images/aimtoolbar.png'; 
import SendToolbar from '../images/sendtoolbar.png'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-toolbar">
          <img className="icon" height="30" width="30" src={AIMRunningMan} alt="Icon" />
          <p className="sign-on">Instant Message with Taylor</p>
          <img className="minmax" height="50" width="70" src={MinMax} alt="Minimize" />
        </div>
        <div className="about-card">

          <div className="about-paragraph">
            <p><strong>Taylor:</strong>Hi! I'm Taylor. I am a New Jersey based Web Developer. Dating back to the days of AOL Instant Messenger and MySpace, coding and designing always piqued my interest. In 2022 I finally decided to start the journey of self-learning, exploring the world of web development. In June 2024 I graduated with a Bachelor of Science in Software Engineering.</p>
            <img className="aim-toolbar" src={AIMToolbar} alt='AIM Toolbar'/>
            <img className="send-toolbar" src={SendToolbar} alt='Send Toolbar'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
