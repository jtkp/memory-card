import React, { useState } from "react";
import Scores from './content/Scores';
import Cards from './content/Cards';
import ARTISTS from "./Artists";
import shuffleArray from "./helpers/shuffle";

function Content() {
  // need to select 12 artists first before storing in state
  const [artistsCurr, setArtistsCurr] = useState(ARTISTS);
  const [twelveArtists, setTwelveArtists] = useState(artistsCurr.slice(0, 12));
  const [scoreCurr, setScoreCurr] = useState(0);
  const [scoreBest, setscoreBest] = useState(0);

  const handleClick = (event) => {
    console.log(`clicked on ${event.currentTarget.textContent}`);
    let newArray = shuffleArray(artistsCurr);
    setArtistsCurr(newArray);
    setTwelveArtists(artistsCurr.slice(0, 12));
  }

  return (
    <div>
      {/* <Scores scoreCurr={scoreCurr} scoreBest={scoreBest}></Scores> */}
      <Cards artistsCurr={twelveArtists} handleClick={handleClick}></Cards>
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