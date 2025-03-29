// Body1.jsx
import "./Body1.css";
import React, { useEffect } from "react";
import squiggle from "../assets/images/squiggle.png";

const Body1 = () => {
  useEffect(() => {
    // Dynamically load the SendPulse form script
    const script = document.createElement("script");
    script.src = "//web.webformscr.com/apps/fc3/build/loader.js";
    script.async = true;
    script.setAttribute(
      "sp-form-id",
      "07c004c63cd692af46564152b8484d73da100a6a63429142a0468f3be3cb97aa"
    );

    

    // Create a specific container for the script
    const scriptContainer = document.createElement("div");
    scriptContainer.id = "sp-form-container";
    document.getElementById("sendpulse-form").appendChild(scriptContainer);
    scriptContainer.appendChild(script);

    return () => {
      const container = document.getElementById("sp-form-container");
      if (container) {
        container.remove();
      }
    };
  }, []);

  return (
    <div className="body1-container">
      {/* Left Side - Header Content */}
      <div className="body1-left">
        <h1 className="header-title">PROTI</h1>
        <h1 className="header-text header-text-bold">
          Proti Ki Roti - Har Baar Ghar Jaisi
        </h1>
        <h1 className="header-text">
          A modern smart robotic kitchen appliance
        </h1>
        <img src={squiggle} alt="Squiggle" className="squiggle" />

      </div>

      {/* Right Side - SendPulse Form */}
      <div id="sendpulse-form" className="body1-right"></div>
    </div>
  );
};

export default Body1;