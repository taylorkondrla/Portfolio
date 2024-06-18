import React, { useState } from 'react';
import './StartMenu.css'; // Import your CSS file
import MinMax from '../images/minmax.png';
import Windows from '../images/windows.png';
import Paint from './Paint'; // Import the Paint component
import Projects from './Projects';

const StartMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [paintActive, setPaintActive] = useState(false);
  const [projectActive, setProjectActive] = useState(false);

  const toggleStartMenu = () => {
    setIsActive(!isActive);
    setPaintActive(false);
    setProjectActive(false);
  };

  const togglePaint = () => {
    setPaintActive(!paintActive);
    setProjectActive(false);
  };

  const toggleProject = () => {
    setProjectActive(!projectActive); // Toggle projectActive state
    setPaintActive(false); // Close Paint component if open
  };

  return (
    <div>
      {/* Button to open the start menu */}
      <button data-start-target="#start" type="button" onClick={toggleStartMenu}>
        <img className="win-img" src={Windows} alt="Windows Logo" />
      </button>

      {/* Start menu container */}
      <div className={`start ${isActive ? 'active' : ''}`} id="start">
        <div className="start-header">
          <div className="title">Start</div>
          <button onClick={toggleStartMenu} className="close-btn">
            <img className="minmax" height="50" width="70" src={MinMax} alt="Close" />
          </button>
        </div>
        <div className="start-container">
          <ul>
            <li className="menu-header">Menu</li>
            <li className="start-item">
              <button onClick={togglePaint} type="button">Paint</button>
            </li>
            <li className="start-item">
              <button onClick={toggleProject} type="button">Projects</button>
            </li>
            <li className="start-item">Skills</li>
            <li className="start-item">
              <a href="mailto:taylorkondrla@gmail.com" className="start-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Render Paint component if paintActive is true */}
      {paintActive && <Paint />}

      {/* Render Projects component if projectActive is true */}
      {projectActive && <Projects />}
    </div>
  );
};

export default StartMenu;
