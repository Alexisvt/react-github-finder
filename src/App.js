import './App.css';

import React, { Component } from 'react';

import NavBar from './components/layout/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar title="Github Finder" />
      </div>
    );
  }
}

export default App;
