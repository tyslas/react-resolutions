import React, { Component } from 'react';
import './App.css';

import Navbar from './Components/UI/Navbar.js'
import Main from './Components/UI/Main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
