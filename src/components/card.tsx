import React from "react";

const card = ({
  hidden = true,
  card,
  onChildClick,
}) => {
  function onCardClick(event, card) {
    onChildClick(card);
  };

  return (
    <div style={{
      width: 120,
      height: 120,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: hidden ? "gray" : "black",
      border: 'solid white 2px', 
      borderRadius:'5%',
      margin: 5,
    }}
    onClick={(event) => {onCardClick(event, card)}}
  >
      {hidden && <img src={card.logo} width='110' alt={card.logo} /> }
    </div>
  );
};

export default card;
