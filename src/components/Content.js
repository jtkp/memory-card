import React, { useEffect, useState } from "react";
import Scores from './content/Scores';
import Cards from './content/Cards';
import ARTISTS from "./Artists";
import shuffleArray from "./helpers/shuffle";

function Content() {
  const [store, setStore] = useState({
    artists: ARTISTS,
    artistsTwelve: ARTISTS.slice(0, 12),
    scoreCurr: 0,
    scoreBest: 0,
    selected: [],
  });

  const handleClick = (event) => {
    let name = event.currentTarget.textContent;
    console.log(`clicked on ${name}`);

    let newState = {};
    newState.artists = shuffleArray(store.artists);
    newState.artistsTwelve = newState.artists.slice(0, 12);
    newState.scoreCurr = store.scoreCurr;
    newState.scoreBest = store.scoreBest;
    newState.selected = store.selected;

    if (!store.selected.includes(name)) {
      console.log('have not seen this name');
      newState.scoreCurr++;
      if (newState.scoreCurr > newState.scoreBest) {
        newState.scoreBest++;
      }
      newState.selected.push(name);
    } else {
      console.log('selected this name already');
      newState.scoreCurr = 0;
      newState.selected = [];
    }

    setStore(newState);
  }

  return (
    <div>
      <Scores scoreCurr={store.scoreCurr} scoreBest={store.scoreBest}></Scores>
      <Cards artistsCurr={store.artistsTwelve} handleClick={handleClick}></Cards>
    </div>
  )
}

export default Content;