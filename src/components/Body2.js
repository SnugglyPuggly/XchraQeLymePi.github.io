import "../styles/Body2.css";
import React from "react";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";

const Body2 = () => {
  return (
    <div className="body2-container">
      <div className="motto-container">
        <h1 className="motto">
          Ethan :C <strong> text</strong>
        </h1>
      </div>
      
      <div className="images-container">
        <div className="image-item">
          <img src={icon1} alt="Image 1" className="image" />
          <div className="caption">
            <h3 className="caption-header">Convenient</h3>
            <p className="caption-body">Ethan <br /> Butcher <br />awegawgaew</p>
          </div>
        </div>
        <div className="image-item">
          <img src={icon2} alt="Image 2" className="image" />
          <div className="caption">
            <h3 className="caption-header">Modern</h3>
            <p className="caption-body">Chris <br /> Butcher <br /> blabhaowebhaoweib</p>
          </div>
        </div>
        <div className="image-item">
          <img src={icon3} alt="Image 3" className="image" />
          <div className="caption">
            <h3 className="caption-header">Healthy</h3>
            <p className="caption-body">remember <br />  when u <br />  cancer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
