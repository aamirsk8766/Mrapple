import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/all_product.png";
import DeviceForm from "./DeviceForm"

const About = () => {
  return (
    <div  id='Device'className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-text-container">
        <DeviceForm/>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
     
    </div>
  );
};

export default About;
