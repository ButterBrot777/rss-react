import React, { Component } from 'react';
import CardInterface from '../interfaces/Card.interface';
import circle from '../assets/home/circle.png';
import docs from '../assets/home/docs.png';
import headphones from '../assets/home/headphones.png';
import Card from './Card';

class CardList extends Component<unknown, { cards: CardInterface[] }> {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        { id: 1, title: 'circle', image: circle },
        { id: 2, title: 'docs', image: docs },
        { id: 3, title: 'headphones', image: headphones },
      ],
    };
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="flex mt-16">
        {cards.map((card: CardInterface) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

export default CardList;
