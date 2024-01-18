import React from "react";
import Logo from "../Assets/final_logo.png";

const Footer = () => {
  return (
    <div id="Footer" className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
       
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Phone Number</span>
          <span>Email</span>
          <span>Project By</span>
         
        </div>
        <div className="footer-section-columns">
          <span>9060602460</span>
          <span>mrappleindia@gmail.com</span>
          <span><a href="https://www.linkedin.com/in/aamir-shaikh-aa3b6121b/">Aamir</a></span>
        </div>
        <div className="footer-section-columns">
        </div>
      </div>
    </div>
  );
};

export default Footer;
