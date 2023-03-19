import { Component } from 'react';

import CardInterface from '../interfaces/Card.interface';

class Card extends Component<{ card: CardInterface }, { card: CardInterface }> {
  constructor(props) {
    super(props);
  }

  render() {
    const { card } = this.props;
    return (
      <div className="flex flex-row items-center">
        <figure className="flex flex-col items-center bg-white w-56 h-40 mr-4 mb-4 hover:bg-menu-hover">
          <img
            className="mt-9"
            src={card.image}
            alt={card.title}
            width="60"
            height="50"
          />
          <figcaption className="font-sans text-base mt-4 text-black">
            {card.title.toUpperCase()}
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default Card;
