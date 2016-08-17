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
        <p>
          <a href="https://github.com/chrisheninger/test-component-one" target="_blank">GitHub Link</a> / <a href="https://npmcdn.com/test-component-one@2.0.0/dist/alert-one.js" target="_blank">npmcdn (dist) Link</a>
        </p>
        <br /><br /><br />
        <AlertTwo message="Testing component two (React 15.2)" />
        <p>
          <a href="https://github.com/chrisheninger/test-component-two" target="_blank">GitHub Link</a> / <a href="https://npmcdn.com/test-component-two@2.0.0/dist/alert-two.js" target="_blank">npmcdn (dist) Link</a>
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
