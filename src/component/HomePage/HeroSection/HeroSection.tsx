import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import heroBackground from "../../../assets/HeroBackground.jpg";

const HeroComponent = Styled.div`
      background-image: url(${heroBackground});
      background-size: cover;
      height: 600px;
      `;

const HeroContentComponent = Styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 100%;
      color: white;
`;


const HeroSection: React.FC = () => {
  return (
    <HeroComponent>
      <HeroContentComponent>
        <h1 className="mb-3 ">Recipt Scanner</h1>
        <p style={{width: "800px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore
          iusto incidunt debitis exercitationem consectetur nostrum error
          cupiditate quam inventore tempore rem nesciunt nisi ex, ab fugit sit
          minima possimus.
        </p>
        <Link to="/translate" className="btn btn-outline-light btn-lg">
          Upload Now
        </Link>
      </HeroContentComponent>
    </HeroComponent>
  );
};
export default HeroSection;
