import React, { Component } from 'react';
import Card from '../interfaces/Card.interface';

class Header extends Component {
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
      <div className="flex w-screen h-[80px] bg-yellow-200 text-black justify-around items-center">
        <h2>About us</h2>
        <h2>Home</h2>
        <h2>Current page:</h2>
      </div>
    );
  }
}

export default Header;
