import './App.css';

import axios from 'axios';
import React, { Component } from 'react';

import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import Users from './components/users/Users';

class App extends Component {
  state = {
    loading: false,
    users: [],
  };

  onSearchUser = async searchTerm => {
    console.log(searchTerm);

    this.setState((state, props) => ({
      loading: true,
    }));

    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState((state, props) => ({
      loading: false,
      users: data.items,
    }));
  };

  render() {
    return (
      <div className="App">
        <NavBar title="Github Finder" />
        <div className="container">
          <Search searchUsers={this.onSearchUser} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
