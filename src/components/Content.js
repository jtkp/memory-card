import React, { useState } from "react";
import Scores from './content/Scores';
import Cards from './content/Cards';
import ARTISTS from "./Artists";
import shuffleArray from "./helpers/shuffle";

function Content() {
  // need to select 12 artists first before storing in state
  const [artistsCurr, setArtistsCurr] = useState(ARTISTS);
  const [scoreCurr, setScoreCurr] = useState(0);
  const [scoreBest, setscoreBest] = useState(0);

  function handleClick(event) {
    console.log('entered Content.js handleClick');
    console.log(event.currentTarget.textContent);
  }

  return (
    <div>
      {/* <Scores scoreCurr={scoreCurr} scoreBest={scoreBest}></Scores> */}
      <Cards artistsCurr={artistsCurr.slice(0, 12)} handleClick={handleClick}></Cards>
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