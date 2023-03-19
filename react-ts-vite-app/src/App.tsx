import React from 'react';

import './App.css';

import Input from './components/Input';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container flex flex-col w-screen m-auto items-center">
        <Header />
        <div className="bg-red-500 w-max">
          <p className="text-amber-400">Hello World!</p>

          <Input />
        </div>
      </div>
    );
  }
}

export default App;
