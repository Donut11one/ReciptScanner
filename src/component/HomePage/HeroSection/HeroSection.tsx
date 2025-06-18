import React from "react";
import './HeroSection.scss';

const HeroSection: React.FC = () => {
  return (
    <div className="p-5 text-center bg-image rounded-3">
      <div className="mask">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Heading</h1>
            <h4 className="mb-3">Subheading</h4>
            <a
              data-mdb-ripple-init
              className="btn btn-outline-light btn-lg"
              href="#!"
              role="button"
            >
              some Text
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection