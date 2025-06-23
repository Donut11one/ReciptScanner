import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 400px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;

  img {
    width: 300px;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 50px;
  }

  p {
    font-size: 1rem;
    color: white;
    line-height: 1.6;
    white-space: pre-line;
  }
`;

const ScrollImageCard = (props: any) => {
  const { title, content, imageSrc } = props;

  return (
    <CardContainer>
      <img src={imageSrc} alt={title} />
      <h4>{title}</h4>
      <p>{content}</p>
    </CardContainer>
  );
};

export default ScrollImageCard;
