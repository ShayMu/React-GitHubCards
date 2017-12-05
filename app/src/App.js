import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardList from './js/components/cardList';
import Form from './js/components/form';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };
    }

    addCard = (cardInfo) => {
        console.log(cardInfo);

        this.setState((prevState) => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };

  render() {
      return (
          <div>
              <Form onSubmit={this.addCard} />
              <CardList cards={this.state.cards} />
          </div>
      );
  }
}

export default App;
