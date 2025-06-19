import React from "react";
import "./HeroSection.scss";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="p-5 text-center bg-image">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white w-50">
          <h1 className="mb-3 ">Recipt Scanner</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore iusto incidunt debitis exercitationem consectetur nostrum error cupiditate quam inventore tempore rem nesciunt nisi ex, ab fugit sit minima possimus.</p>
          <Link to="/translate" className="btn btn-outline-light btn-lg">
            Upload Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
