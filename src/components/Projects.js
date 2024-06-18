// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css'; // Import your CSS file
import MinMax from '../images/minmax.png';
import GreenFolder from '../images/greenfolder.png';
import PinkFolder from '../images/pinkfolder.png';
import BlueFolder from '../images/bluefolder.png';
import OrangeFolder from '../images/orangefolder.png';
import PurpleFolder from '../images/purplefolder.png';
import Tahini from '../images/tahini.png';
import MobileApp from '../images/mobileapp.png';
import Scheduler from '../images/scheduler.png';
import WorldMap from '../images/worldmap.png';

const projectDetails = {
    'Project 1': {
      title: 'Angular World Map',
      image: WorldMap,
      description: 'This project involves creating an interactive world map using Angular and World Bank API. Each country is highlighted as you hover over it and it will display relevant information on the right.',
      githubLink: 'https://github.com/taylorkondrla/Interactive-World-Map'
    },
    'Project 2': {
      title: 'Tahini Travel Website',
      image: Tahini,
      description: 'A travel website built using HMTL, CSS, and Javascript.',
      githubLink: 'https://github.com/taylorkondrla/Travel-Destination-Website'
    },
    'Project 3': {
      title: 'College Student Mobile App',
      image: MobileApp,
      description: 'A C# .NET MAUI mobile app connected to a SQLite database, designed to help college students manage their tasks for upcoming terms and courses.',
      githubLink: 'https://github.com/taylorkondrla/D424-Oliver'
    },
    'Project 4': {
      title: 'C# Scheduling Application',
      image: Scheduler,
      description: 'A scheduling application built with C# Windows Forms connected to a MySQL database for efficient task management.',
      githubLink: 'https://github.com/taylorkondrla/Scheduling-App'
    }
  };

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openProjects = () => setIsOpen(true);
  const closeProjects = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  const openProjectDetail = (projectKey) => {
    setActiveProject(projectDetails[projectKey]);
  };

  return (
    <>
      <div id="projects-folder">
        
        <button onClick={openProjects}>
          <img height='75' width='75' src={GreenFolder} alt="Open Projects" />
        </button>
       
      </div>
      <p className='ptitle'>Projects</p>

      <div className={`projects ${isOpen ? 'active' : ''}`}>
        <div className="projects-header">
          <div className="title">My Projects</div>
          <button onClick={closeProjects} className="close-button">
            <img height="50" width="70" src={MinMax} alt="Close" />
          </button>
        </div>
        <div className="projects-container">
          <div className="projects-body">
            <button onClick={() => openProjectDetail('Project 1')}>
              <img height="75" width="75" src={PinkFolder} alt="Project 1" />
              <p>Angular World Map</p>
            </button>
            <button onClick={() => openProjectDetail('Project 2')}>
              <img height="75" width="75" src={BlueFolder} alt="Project 2" />
              <p>Tahini Travel Webiste</p>
            </button>
            <button onClick={() => openProjectDetail('Project 3')}>
              <img height="75" width="75" src={OrangeFolder} alt="Project 3" />
              <p>College Student Mobile App</p>
            </button>
            <button onClick={() => openProjectDetail('Project 4')}>
              <img height="75" width="75" src={PurpleFolder} alt="Project 4" />
              <p>C# Scheduling Application</p>
            </button>
          </div>
        </div>
      </div>

      {activeProject && (
        <div className="project-detail">
          <div className="project-detail-header">
            <div className="title">{activeProject.title}</div>
            <button onClick={() => setActiveProject(null)} className="close-button">
              <img height="50" width="70" src={MinMax} alt="Close" />
            </button>
          </div>
          <div className="project-detail-body">
            <img src={activeProject.image} alt={activeProject.title} width="75" height="75" />
            <p>{activeProject.description}</p>
            <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
