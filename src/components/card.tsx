import React from "react";

const card = ({ hidden = true, card, onChildClick, isActive }) => {
  function onCardClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    card: any
  ) {
    onChildClick(card);
  }

  return (
    <div className={'card'}
    onClick={(event) => {
      onCardClick(event, card);
    }}
  >
      {hidden && <img src={card.logo} width='110' alt={card.logo} /> }
    </div>
  );
};

export default card;
