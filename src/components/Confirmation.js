import React from "react";
import "../styles/Confirmation.css";
import { useLocation } from "react-router-dom";
function Confirmation() {
    const location = useLocation();
    const state = location.state || {};
  
    return (
      <div className="confirmation-tab">
        <h2>Preorder Confirmed!</h2>
        <p>Thank you, Student, for preordering and reducing food waste!</p>
        <p>We have sent a confirmation email to your school email if you wish to cancel.</p>
        <p>We will send updates to your school email if availability changes.</p>
        <button onClick={() => location("/")} className="home-btn">Go Home</button>
      </div>
    );
  }
  
  export default Confirmation()