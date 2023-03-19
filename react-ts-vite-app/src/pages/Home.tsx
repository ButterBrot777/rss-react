import React, { Component } from 'react';
import Input from '../components/Input';

class Home extends Component {
  render() {
    return (
      <div className="bg-red-500 w-max">
        <p className="text-amber-400">Hello World!</p>

        <Input />
      </div>
    );
  }
}

export default Home;
