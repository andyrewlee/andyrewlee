import React, { Component } from 'react';

import './App.css';

import Links from './scenes/Links';
import Projects from './scenes/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          <Links />
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
