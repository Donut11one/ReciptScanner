import React from "react";
import styled from "styled-components";

const HomePageCardContainer = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
`;

const HomePageCardTitle = styled.h1`
  font-size: 32px;
`;

const HomePageCardContainterDescription = styled.p`
  font-size: 16px;
  color: white;
`;

const ScrollImageCard = (props: any) => {
  const { title, content, imageSrc } = props;

  return (
    <HomePageCardContainer>
      <img src={imageSrc} alt={title} />
      <HomePageCardTitle>{title}</HomePageCardTitle>
      <HomePageCardContainterDescription>
        {content}
      </HomePageCardContainterDescription>
    </HomePageCardContainer>
  );
};

export default ScrollImageCard;
