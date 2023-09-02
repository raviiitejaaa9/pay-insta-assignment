import React from 'react';
import './index.css';

const Navbar = () => {
  return (
    <nav className = "navbar">
      <ul className = "navbar-list">
        <li className = "navbar-item">
          <a href = ""> Home </a>
        </li>
        <li className = "navbar-item">
          <a href = "" > About </a>
        </li>
        <li className = "navbar-item">
          <a href = "" > Schedules </a>
        </li>
        <li className = "navbar-item">
          <a href = "" > Membership </a>
        </li>
        <li className="navbar-item">
          <a href = "" > Pricing </a>
        </li>
        <li className = "navbar-item">
          <a href = "" > Offers </a>
        </li>
      </ul>
      <div className = "courses-button">
        <button type = "button" > Courses </button>
      </div>
    </nav>
  );
};



export default Navbar;
