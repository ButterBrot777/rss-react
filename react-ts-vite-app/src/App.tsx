import React from 'react';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="some-name">
          <p>Hello World!</p>
        </div>
        <form action="">
          <input
            className="some-name"
            id="dinosaur_name"
            aria-describedby="dinosaur_namespace"
          />
        </form>
      </>
    );
  }
}

export default App;
