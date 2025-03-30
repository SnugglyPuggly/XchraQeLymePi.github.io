import "../styles/Body1.css";
import React from "react";
import squiggle from "../assets/images/squiggle.png";

const Body1 = () => {
  return (
    <div className="body1-container">
      {/* Left Side - Header Content */}
      <div className="body1-left">
        <h1 className="header-title">Save the Bite</h1>
        <h1 className="header-text header-text-bold">
        </h1>
        <h1 className="header-text">
        </h1>
        <img src={squiggle} alt="Decorative squiggle" className="squiggle" />
      </div>
      {/* Right Side - Subscription Form */}
      <div className="body1-right">
        
      </div>
    </div>
  );
};

export default Body1;
