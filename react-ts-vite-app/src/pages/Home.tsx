import React, { Component } from 'react';
import Input from '../components/Input';
import CardList from '../components/CardList';

class Home extends Component {
  render() {
    return (
      <div className="bg-red-500 flex flex-col items-center w-screen h-[calc(100vh-80px)]">
        <h1 className="text-amber-400">Hello World!</h1>

        <Input aria-label="main-input" />

        <CardList />
      </div>
    );
  }
}

export default Home;
