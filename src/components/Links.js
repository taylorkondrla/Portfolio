// src/components/Links.js
import React from 'react';
import './Links.css'; // Import your CSS file
import LinkedIn from '../images/linkedin.png';
import GitHub from '../images/github.png';
import Email from '../images/emailicon.png';

const Links = () => {
    return (
        <div className="links">
            <a href="https://www.linkedin.com/in/taylor-oliver-295223313/" target="_blank" rel="noopener noreferrer">
                <img className="link-icon" src={LinkedIn} alt="LinkedIn" />
            </a>
            <p>LINKEDIN</p>

            <a href="https://github.com/taylorkondrla" target="_blank" rel="noopener noreferrer">
                <img className="link-icon" src={GitHub} alt="GitHub" />
            </a>
            <p>GITHUB</p>

            <a href="mailto:taylorkondrla@gmail.com">
                <img className="link-icon" src={Email} alt="Email" />
            </a>
            <p>EMAIL</p>
        </div>
    );
};

export default Links;
