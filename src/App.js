import React, { Component } from 'react';
import './App.css';
import Servers from './Components/Servers/Servers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ServerKing</h1>
        <Servers />
      </div>
    );
  }
}

export default App;
