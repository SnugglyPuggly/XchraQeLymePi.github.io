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
          a website for <strong> food waste management</strong>
        </h1>
      </div>
      
      <div className="images-container">
        <div className="image-item">
          <img src={icon1} alt="Image 1" className="image" />
          <div className="caption">
            <h3 className="caption-header">Convenient</h3>
            <p className="caption-body">preorder <br /> only what <br />you need</p>
          </div>
        </div>
        <div className="image-item">
          <img src={icon2} alt="Image 2" className="image" />
          <div className="caption">
            <h3 className="caption-header">Educate</h3>
            <p className="caption-body">learn <br /> about food waste <br />in your school</p>
          </div>
        </div>
        <div className="image-item">
          <img src={icon3} alt="Image 3" className="image" />
          <div className="caption">
            <h3 className="caption-header">Donate</h3>
            <p className="caption-body">excessive food <br />  to local <br />  charities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
