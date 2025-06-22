import React from "react";
import HeroSection from "../component/HomePage/HeroSection/HeroSection"

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="hero-section">
        <HeroSection/>
      </div>
      <div className="body-side-story-section">
        <h1>body story placeholder</h1>
      </div>
      <div className="body-scrollable-image-section">
        <h1>body scroll image placeholder</h1>
      </div>
      <div className="footer">
        <h1>footer placeholder</h1>
      </div>
    </div>
  );
};

export default HomePage;
