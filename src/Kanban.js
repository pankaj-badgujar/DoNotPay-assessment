import React from "react";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardColumn from "./CardColumn";
import { CardList } from "./CardList";

class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CardList: CardList
    };
  }

  deleteCard = (cardId, colNumber) => {
    const longColumn = this.state.CardList[colNumber];
    console.log(cardId);
    let cardsArray = longColumn.cards;
    cardsArray = cardsArray.filter((card) => card.cardId !== cardId);
    longColumn.cards = cardsArray;

    const newCardList = { ...this.state.CardList };
    newCardList[colNumber] = longColumn;

    this.setState({
      CardList: newCardList
    });
  };

  addCard = (colNumber) => {
    const longColumn = this.state.CardList[colNumber];

    const newCard = {
      cardTitle: "new card title",
      cardBody: "new card body",
      cardId: longColumn.cards.length + 1
    };

    longColumn.cards.push(newCard);

    const newCardList = { ...this.state.CardList };
    newCardList[colNumber] = longColumn;

    this.setState({
      CardList: newCardList
    });
  };

  moveUp = (cardId, colNumber) => {
    const longColumn = this.state.CardList[colNumber];
    let cardsArray = longColumn.cards;
    let cardToBeMoved = cardsArray.filter((card) => card.cardId === cardId);
    const currIndex = cardsArray.indexOf(cardToBeMoved);
    if (currIndex !== 0) {
      cardsArray.slice(currIndex - 1, 0, cardToBeMoved);
      //could have done other things but short on time
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <CardColumn
            CardList={this.state.CardList}
            title="Pending Task"
            colNumber="0"
            addCard={this.addCard}
            deleteCard={this.deleteCard}
            moveUp={this.moveUp}
          />
        </div>
        <div className="col-4">
          <CardColumn
            CardList={this.state.CardList}
            title="In Progress"
            colNumber="1"
            addCard={this.addCard}
            deleteCard={this.deleteCard}
            moveUp={this.moveUp}
          />
        </div>
        <div className="col-4">
          <CardColumn
            CardList={this.state.CardList}
            title="Completed"
            colNumber="2"
            addCard={this.addCard}
            deleteCard={this.deleteCard}
            moveUp={this.moveUp}
          />
        </div>
      </div>
    );
  }
}

export default Kanban;
