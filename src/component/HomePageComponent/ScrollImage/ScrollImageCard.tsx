import React from "react";
import styled from "styled-components";

const HomePageCardContainer = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  max-width: 350px;

  img.homepage_card-image {
    width: 100%;
    height: 100%;


  }
`;

const HomePageCardTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 0px;
`;

const HomePageCardDescription = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom:0px;
`;

export const ScrollImageCard = (props: any) => {
  const { title, content, imageSrc } = props;

  return (
    <HomePageCardContainer>
      <img className="homepage_card-image" src={imageSrc} alt={title} />
      <HomePageCardTitle>{title}</HomePageCardTitle>
      <HomePageCardDescription>
        {content}
      </HomePageCardDescription>
    </HomePageCardContainer>
  );
};
