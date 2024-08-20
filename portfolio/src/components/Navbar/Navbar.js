import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav container">
        <div className="nav__logo">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgVUexSsMzNAezpZY0i9TFVbynFu_FcuORw&s" 
            alt="REDINTEK Logo" 
            className="nav__logo-img" 
          />
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#about-us" className="nav__link">About Us</a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">Services</a>
          </li>
          <li className="nav__item">
            <a href="#blog" className="nav__link">Blog</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
        <NavLink to="#contact" className="nav__cta">Contact Us</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
