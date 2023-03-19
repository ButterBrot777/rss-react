import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '../interfaces/Card.interface';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    };
  }

  getLocation() {
    return {
      location: this.props.location,
    };
  }

  handleClick() {
    const location = useLocation();
  }

  render() {
    return (
      <div className="flex w-screen h-[80px] bg-yellow-200 text-black justify-around items-center">
        <Link to="/home">Home</Link>
        <Link to="/about">About us</Link>
        <h2>Current page:</h2>
      </div>
    );
  }
}

export default Header;
