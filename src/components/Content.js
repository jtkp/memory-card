import React, { useState } from "react";
import Scores from './content/Scores.js';
import Cards from './content/Cards.js';


function Content() {

  const [cards, setCards] = useState(allCards);



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