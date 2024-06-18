// src/components/Skills.js
import React from 'react';
import './Skills.css'; // Create and import your CSS file
import AIMRunningMan from '../images/AIM_Running_Man.png';
import MinMax from '../images/minmax.png';
import tak from '../images/tak.png';
import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JS from '../images/js.png';
import Reeact from '../images/React.png';
import Photoshop from '../images/photoshop.png';
import CSharp from '../images/Csharp.png';
import Angular from '../images/angular.png';
import Git from '../images/git.png';
import Maui from '../images/maui.png';
import SQL from '../images/sql.png';
import VS from '../images/vs.png';

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-toolbar">
        <img className="icon" height="30" width="30" src={AIMRunningMan} alt="Icon" />
        <p className="sign-on">Sign On</p>
        <img className="minmax" height="50" width="70" src={MinMax} alt="Minimize" />
      </div>
      <img src={tak} alt="me" className="aim-logo" />
      <div className="skills">Languages and Skills:</div>
      <div className="buddies-card">
        <ul className="skills-list">
          <li><img className="icon" src={CSharp} height="35" width="25" alt="csharp" /> C#</li>
          <li><img className="icon" src={Maui} height="35" width="25" alt="maui" /> .NET MAUI</li>
          <li><img className="icon" src={Reeact} height="22" width="25" alt="Reeact" /> React</li>
          <li><img className="icon" src={JS} height="35" width="25" alt="JavaScript" /> JavaScript</li>
          <li><img className="icon" src={Angular} height="35" width="25" alt="angular" /> Angular</li>
          <li><img className="icon" src={SQL} height="35" width="25" alt="sql" /> SQL</li>
          <li><img className="icon" src={Git} height="35" width="25" alt="git" /> Git</li>    
          <li><img className="icon" src={HTML} height="35" width="25" alt="HTML" /> HTML5</li>
          <li><img className="icon" src={CSS} height="35" width="25" alt="CSS" /> CSS3</li>
          <li><img className="icon" src={VS} height="35" width="25" alt="vs" /> Visual Studio</li>
          <li><img className="icon" src={Photoshop} height="25" width="25" alt="Photoshop" /> Photoshop</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
