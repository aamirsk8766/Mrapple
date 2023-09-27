import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import ProfilePic1 from "../Assets/profilepic1.jpg";
import ProfilePic2 from "../Assets/profilepic2.jpg";

import { AiFillStar } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Assets/white.jpg"

const Testimonial = () => {
  return (
    <div id="Test-container" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Here are some of our customers which have given us some feedback and we would love to share this with you!
        </p>
      </div>
      <div className="testimonial-section-bottom">
      <div >
      <Carousel className="slides">
        <Carousel.Item className="test-slide" interval={1500}>
         <img  classNam="slide-back"src={img1} alt="" />
          <Carousel.Caption>
          <img src={ProfilePic} alt="" />
        <p>
          My iPhone 12 Pro Screen was fixed in 30 mins At My House
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="test-slide" interval={1500}>
         <img src={img1} alt="" />
          <Carousel.Caption>
          <img src={ProfilePic1} alt="" />
        <p>
        My iPhone 13 Pro Screen was fixed in 30 mins At My House
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="test-slide"  interval={500}>
         <img src={img1} alt="" />
          <Carousel.Caption>
          <img src={ProfilePic2} alt="" />
        <p>
        My MacBook Air Screen was fixed in 30 mins At My House
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
