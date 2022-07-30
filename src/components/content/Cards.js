import React, { useState } from "react";

function Cards(props) {


  return (
    <div>
      {card}
      <Card image={props.image} name={props.name}></Card>
    </div>
  )
}

export default Cards;