import React from "react";
import SingleCard from "./SingleCard";

const CardColumn = ({
  CardList,
  title,
  moveUp,
  colNumber,
  deleteCard,
  addCard
}) => (
  <div>
    {title}
    <button
      onClick={() => addCard(colNumber)}
      className="btn btn-success btn-block"
    >
      Add new card
    </button>
    {CardList[`${colNumber}`].cards.map((card) => (
      <SingleCard
        cardTitle={card.cardTitle}
        cardBody={card.cardBody}
        cardId={card.cardId}
        colNumber={colNumber}
        deleteCard={deleteCard}
        moveUp={moveUp}
      />
    ))}
  </div>
);

export default CardColumn;
