import React from "react";
import styled from "styled-components";

const BodyStoryComponent = styled.div`
  color: #FFFFFF;
  padding: 32px 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const ImageContainer = styled.div`
  img {
    width: 350px;
    height: 350px;
  }
`;

const TextContainer = styled.div`
  h4 {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 16px 0;
  }
`;

export const BodyStory = (props: any) => {
  const { title, content, imageSrc, isImageRight } = props;
  return (
    <BodyStoryComponent>
      {!isImageRight && (
        <ImageContainer>
          <img src={imageSrc} alt={title} />
        </ImageContainer>
      )}
      <TextContainer>
        <h4>{title}</h4>
        <p>{content}</p>
      </TextContainer>
      {isImageRight && (
        <ImageContainer>
          <img src={imageSrc} alt={title} />
        </ImageContainer>
      )}
    </BodyStoryComponent>
  );
};