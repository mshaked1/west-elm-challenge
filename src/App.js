import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.png'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo"/>
        </header>
      </div>
    );
  }
}

export default App;
