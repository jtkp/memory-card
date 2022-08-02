import React from "react";
import styled from "styled-components";

function Scores({ scoreCurr, scoreBest }) {

  return (
    <StyledDiv>
      <StyledH1>Current score: {scoreCurr}</StyledH1>
      <StyledH1>Best score: {scoreBest}</StyledH1>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  width: 30rem;
  justify-content: space-between;
`

const StyledH1 = styled.h1`
  font-size: 1.5rem;
`

export default Scores;