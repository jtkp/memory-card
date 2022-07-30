import React, { useState } from "react";
import ScoreCurr from './scores/ScoreCurr';
import ScoreBest from './scores/ScoreBest';

function Scores() {


  return (
    <div>
      <ScoreCurr></ScoreCurr>
      <ScoreBest></ScoreBest>
    </div>
  )
}

export default Scores;