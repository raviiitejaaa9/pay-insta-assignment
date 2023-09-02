import React, { useState } from 'react';
import './index.css'; 

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mobile-navbar ${isOpen ? 'open' : ''}`}>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="mobile-nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#schedules">Schedules</a>
        </li>
        <li>
          <a href="#membership">Membership</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#offers">Offers</a>
        </li>
      </ul>
      <div className="courses-button">
        <button>Course</button>
      </div>
    </div>
  );
};

export default MobileNavbar;
