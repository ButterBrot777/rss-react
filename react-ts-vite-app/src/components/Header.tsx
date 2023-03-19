import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component<unknown, { location: string }> {
  constructor(props) {
    super(props);

    this.state = {
      location: localStorage.getItem('location') ?? 'home',
    };
  }

  render() {
    const { location } = this.state;

    return (
      <div className="flex w-screen h-[80px] bg-yellow-200 text-black justify-around items-center">
        <Link to="/home" onClick={() => this.setState({ location: 'home' })}>
          Home
        </Link>
        <Link to="/about" onClick={() => this.setState({ location: 'about' })}>
          About us
        </Link>
        <h2>Current page: {location}</h2>
      </div>
    );
  }
}

export default Header;
