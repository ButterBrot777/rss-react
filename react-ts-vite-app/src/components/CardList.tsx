import React, { Component } from 'react';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { id: 1, title: 'First', description: 'card 1' },
        { id: 2, title: 'Second', description: 'card 2' },
      ],
    };
  }

  render() {
    return (
      <div className="">
        <h2>Cards: </h2>
      </div>
    );
  }
}

export default CardList;
