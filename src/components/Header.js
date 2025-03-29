import React from "react";
import "../styles/Header.css"; // Import the CSS file
import Navbar from '../components/Navbar'; 

export default function Header() {
  return (
    <header>
      
      <div className="top-bar"></div>
      
      <div className="header">
      <Navbar /> {/* Fixed Navbar closing */}
        <div className="header-left">
          {/* Add content here or remove if unnecessary */}
        </div>

        {/* Right Side: Button */}
        <button className="header-button">Contact</button>
      </div>
    </header>
  );
}
