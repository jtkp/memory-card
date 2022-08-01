import React, { useEffect, useState } from "react";
import Scores from './content/Scores';
import Cards from './content/Cards';
import ARTISTS from "./Artists";
import shuffleArray from "./helpers/shuffle";

function Content() {
  const [artistsCurr, setArtistsCurr] = useState(ARTISTS);
  const [twelveArtists, setTwelveArtists] = useState(artistsCurr.slice(0, 12));
  const [scoreCurr, setScoreCurr] = useState(0);
  const [scoreBest, setscoreBest] = useState(0);

  const handleClick = (event) => {
    let name = event.currentTarget.textContent;
    console.log(`clicked on ${name}`);
    artistsCurr = shuffleArray(artistsCurr);
    setTwelveArtists(artistsCurr.slice(0, 12));

    if (!clicked.includes(name)) {
      setScoreCurr(scoreCurr);
      if (scoreCurr > scoreBest) {
        setscoreBest(scoreCurr);
      }
    } else {
      console.log('clicked has this name already');
      setScoreCurr(0);
    }
  }

  return (
    <div>
      <Scores scoreCurr={scoreCurr} scoreBest={scoreBest}></Scores>
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