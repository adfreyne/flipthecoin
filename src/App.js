import React, { Component } from 'react';
import './App.css';
import FlipFormComponent from './FlipFormComponent';

class App extends Component {
  render() {
    return (
      <div >
        test
        <form>
          <button >RESTART GAME</button>
          <FlipFormComponent />
        </form>
      </div>
    );
  }
}

export default App;
