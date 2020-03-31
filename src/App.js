import './App.css';

import React, { Component } from 'react';

import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="Github Finder" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
