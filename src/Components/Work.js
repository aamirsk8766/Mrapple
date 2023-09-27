import React from "react";
import PickMeals from "../Assets/choose-image.png";
import ChooseMeals from "../Assets/quta_img.png";
import DeliveryMeals from "../Assets/techPerson.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Select Your Device & Issue",
    },
    {
      image: ChooseMeals,
      title: "Get a FREE quote instantly",
    },
    {
      image: DeliveryMeals,
      title: "Technician visits you to fix device in no time",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          By Following These Steps we'll make you understand how this process work and what you should expect from us!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
