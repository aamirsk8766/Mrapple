import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/product_img2.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Nav from 'react-bootstrap/Nav';

const Home = () => {
  return (
    <div id="Home-container" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  src={BannerBackground} alt="" />
        </div>
        
        <div className="home-image-section">
          <img className="Product-img" src={BannerImage} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          India’s Highest Rated Apple Repairs at your doorstep
          </h1>
          <p className="primary-text">
          Most trusted iPhone, iPad, iWatch & MacBook repair service in India.
          </p>
          <button className="secondary-button">
          <Nav.Link  href="#Device"> Select Your Device</Nav.Link> <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
