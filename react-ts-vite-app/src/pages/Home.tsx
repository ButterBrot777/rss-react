import React, { Component } from 'react';
import Input from '../components/Input';
import CardList from '../components/CardList';

class Home extends Component {
  render() {
    return (
      <div className="bg-red-500 w-max flex flex-col items-center w-screen">
        <p className="text-amber-400">Hello World!</p>

        <Input />

        <CardList />
      </div>
    );
  }
}

export default Home;
