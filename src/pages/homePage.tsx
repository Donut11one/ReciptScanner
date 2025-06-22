import React from "react";
import HeroSection from "../component/HomePage/HeroSection/HeroSection"
import BodyStory from "../component/HomePage/BodyStory/BodyStory";
import CatTyping from "../assets/CatTyping.gif";
import HandScanning from "../assets/Scanning.gif"

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="hero-section">
        <HeroSection/>
      </div>
      <div className="body-side-story-section">
      <BodyStory
        title="Recipt Scan"
        imageSrc = {CatTyping}
        content={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `}
      />
      <BodyStory
        title="Recipt Scan"
        imageSrc = {HandScanning}
        isImageRight
        content={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `}
      />
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
