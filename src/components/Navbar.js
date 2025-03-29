import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="left-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <ul className="right-nav">
        <li><a href="#shop">Shop</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
