import React, { useState } from "react";
import Scores from './content/Scores';
import Cards from './content/Cards';
import ARTISTS from "./Artists";
import shuffleArray from "./helpers/shuffle";

function Content() {
  // need to select 12 artists first before storing in state
  const [selected, setSelected] = useState(ARTISTS);

  return (
    <div>
      <Scores></Scores>
      <Cards></Cards>
    </div>
  )
}

export default Content;

// header div
  // title/logo img
// content div
  // scores div
    // current score div
      // 'Current score: {scoreCurr}'
    // best score div
      // 'Best score: {scoreBest}'
  // cards div
    // cardx12 div
      // image img
      // caption text
// footer
  // text