import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  padding: 1rem 1rem 0 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  transition: transform .2s;
  &:hover {
    transform: scale(1.05);
  }
`

const StyledH1 = styled.h1`
  font-size: 1rem;
`

const StyledImg = styled.img`
  object-fit: cover;
  width: 200px;
  height: 300px;
`

function Card({ id, name, image, handleClick }) {

  const handleClickCard = (event) => {
    handleClick(event);
  }

  return (
    <StyledDiv onClick={handleClickCard}>
      <StyledImg src={image} alt={name} />
      <StyledH1>{name}</StyledH1>
    </StyledDiv>
  )
}

export default Card;