// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Create and import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Taylor Oliver. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
