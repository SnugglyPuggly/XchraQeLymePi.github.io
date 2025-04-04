import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="left-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/awareness">Awareness</Link></li>
        <li><Link to="/preorder">Lunch Pre-Order</Link></li>
        <li><Link to="/connect-with-nonprofits">Connect with Charities</Link></li>
      </ul>
      <ul className="right-nav">
        
      </ul>
    </nav>
  );
}

export default Navbar;
