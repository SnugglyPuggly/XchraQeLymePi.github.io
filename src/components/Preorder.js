import "../styles/Preorder.css";
import React, { useState } from "react";

function Preorder() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  function toggleDetailsVisibility() {
    setIsDetailsVisible(prevState => !prevState);
  }

  return (
    <div className="preorder-tab">
      <h2>Preorder Your Lunch!</h2>

      <p>
        Don't forget to preorder your lunch! Click below to see the menu for today.
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

      <h3>How You Are Helping by Preordering</h3>
      <p>
        By preordering, you are cutting down on the food waste produced at your school!
        Order only what you will eat so as little as possible goes to waste.
      </p>

      <div className="preorder-tab">
        <button className="preorder-btn">Preorder Now</button>
      </div>
    </div>
  );
}

export default Preorder;