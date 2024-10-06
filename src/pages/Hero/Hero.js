import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm [Your Name]</h1>
        <p>Frontend Developer | React Enthusiast</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
};

export default HeroSection;
