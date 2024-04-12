import React from "react";
import aparna_pic from "../../aparna_image/aparna.JPG";
import "./Hero.scss";
const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-contentbox">
        <div className="hero-contentbox-content">
          <p className="sectionTitle">Hello, This is Aparna</p>
          <h1 className="hero-title">
            <span className="hero-title-color">
              Full stack
              <br /> Engineer
            </span>
          </h1>
          <p className="hero-description">
            An aspiring developer with a transition in career.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero-img">
        <img src={aparna_pic} alt="Hero Section" />
      </div>
    </section>
  );
};

export default Hero;
