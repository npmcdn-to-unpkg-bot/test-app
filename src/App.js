import React, { Component } from 'react';
import { AlertOne } from 'test-component-one';
import { AlertTwo } from 'test-component-two';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AlertOne message="Testing component one (React 15.3)" />
        <AlertTwo message="Testing component two (React 15.2)" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
