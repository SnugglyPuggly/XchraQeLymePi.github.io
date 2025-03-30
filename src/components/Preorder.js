import "../styles/Preorder.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
function Preorder() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  function toggleDetailsVisibility() {
    setIsDetailsVisible(prevState => !prevState);
  }

  return (
    <div className="preorder-tab">
      <h2>Preorder Your Lunch!</h2>

      <p>
        Don't forget to preorder your lunch! By preordering, you are cutting down on the food waste produced at your school!
        Order only what you will eat so as little as possible goes to waste. Click below to see the menu for today.
      </p>

      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDetailsVisibility}>
          Lunch Menu
        </button>
        {isDetailsVisible && (
          <div className="dropdown-content">
            <ul>
              <li><strong>Chicken Alfredo</strong></li>
              <li><strong>Tomato Soup:</strong> Vegan</li>
              <li><strong>Caesar Salad:</strong> Vegetarian</li>
              <li><strong>Beverage:</strong> the beverages we have today are orange juice, apple juice, and chocolate milk.</li>
            </ul>
          </div>
        )}
      </div>


      <div className="preorder-tab">
        <p>Thank you, Student, for preordering and reducing food waste!</p>
        <p>We will send a confirmation email to your school email if you wish to cancel.</p>
        <p>We will send updates to your school email if availability changes.</p>
      </div>
    </div>
  );
}

export default Preorder;