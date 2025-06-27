import React from "react";
import Footer from "../component/Footer/Footer";
import CatTyping from "../assets/CatTyping.gif";
import HandScanning from "../assets/Scanning.gif";
import {
  ScrollImageCard,
  HeroSection,
  BodyStory,
} from "../component/HomePageComponent";
import chainBreak from "../assets/ChainBroken.jpg";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="hero-section">
        <HeroSection />
      </div>
      <div className="body-side-story-section">
        <BodyStory
          title="Recipt Scan"
          imageSrc={CatTyping}
          content={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `}
        />
        <BodyStory
          title="Recipt Scan"
          imageSrc={HandScanning}
          isImageRight
          content={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `}
        />
      </div>
      <div className="body-scrollable-image-section bg-black">
        <h1 style={{marginBottom:"64px", fontSize:"64px", textAlign:"center", color:"white"}}>About The App</h1>
        <div style ={{display:"flex", justifyContent:"center", gap:"80px"}}>
          <ScrollImageCard
            title="Place Holder 1"
            imageSrc={chainBreak}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
          <ScrollImageCard
            title="Place Holder 2"
            imageSrc={CatTyping}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
          <ScrollImageCard
            title="Place Holder 3"
            imageSrc={HandScanning}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
