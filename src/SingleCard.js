import React from "react";

const SingleCard = ({ cardTitle, cardBody, cardId, colNumber, deleteCard }) => (
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{cardTitle}</h5>

      <p class="card-text">{cardBody}</p>
      <button
        onClick={() => deleteCard(cardId, colNumber)}
        class="btn btn-block btn-danger"
      >
        Delete
      </button>

      <button className="btn btn-sm btn-block btn-primary">Move Up</button>
      <button className="btn btn-sm btn-block btn-secondary">Move Down</button>
    </div>
  </div>
);

export default SingleCard;
