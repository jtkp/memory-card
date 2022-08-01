import React from "react";
import Card from './cards/Card';
import styled from "styled-components";

const Container = styled.div`
  width: min-content;
  height: min-content;
`

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`

function Cards({ artistsCurr, handleClick }) {

  let cards = artistsCurr.map(({ id, name, image }, index) => {
    return (
      <Card key={index} id={id} name={name} image={image} handleClick={handleClick}></Card>
    )
  });

  return (
    <Container>
      <StyledDiv>
        {cards}
      </StyledDiv>
    </Container>
  )
}

export default Cards;