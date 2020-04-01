import './App.css';

import axios from 'axios';
import React, { Component } from 'react';

import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';

class App extends Component {
  state = {
    loading: false,
    users: [],
  };
  async componentDidMount() {
    this.setState((state, props) => ({
      loading: true,
    }));

    const { data } = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState((state, props) => ({
      loading: false,
      users: data,
    }));
  }

  render() {
    console.log('users', this.state.users);
    return (
      <div className="App">
        <NavBar title="Github Finder" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
