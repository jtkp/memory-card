import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 300px;
`

function Card({ id, name, image, handleClick }) {

  const handleClickCard = (event) => {
    handleClick(event);
  }

  return (
    <div onClick={handleClickCard}>
      <h1>{name}</h1>
      <StyledImg src={image} alt={name} />
    </div>
  )
}

export default Card;