import React, { useState } from "react";

function Scores({ scoreCurr, scoreBest }) {

  return (
    <div>
      <h1>Current score: {scoreCurr}</h1>
      <h1>Best score: {scoreBest}</h1>
    </div>
  )
}

export default Scores;