// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Create and import your CSS file


const Navbar = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const getDate = () => {
      const date = new Date();
      const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      let hour = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      if (hour < 10) hour = "0" + hour;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      const ampm = hour < 12 ? " AM " : " PM ";
      if (hour > 12) hour -= 12;

      const showDate = `${weekdayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
      const showTime = `${hour}:${minutes}:${seconds}${ampm}`;

      setDate(showDate);
      setTime(showTime);

      requestAnimationFrame(getDate);
    };

    getDate();
  }, []);
  

  return (
    <nav id="mainNavbar">
      <div className="date-time-container">
        <div id="date">{date}</div>
        <div id="time">{time}</div>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#about" className="nav-link">ABOUT</a></li>
        <li className="nav-item"><a href="#projects" className="nav-link">PROJECTS</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
