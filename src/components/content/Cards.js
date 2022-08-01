import React from "react";
import Card from './cards/Card';

function Cards({ artistsCurr, handleClick }) {

  let cards = artistsCurr.map(({ id, name, image }, index) => {
    return (
      <Card key={index} id={id} name={name} image={image} handleClick={handleClick}></Card>
    )
  });

  return (
    <div>
      {cards}
    </div>
  )
}

export default Cards;