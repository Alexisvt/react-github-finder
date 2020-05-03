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
    user: {},
  };

  onSearchUser = async (searchTerm) => {
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

  getUser = async (userName) => {
    this.setState((state, props) => ({
      loading: true,
    }));

    const { data } = await axios.get(
      `https://api.github.com/users/${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState((state, props) => ({
      loading: false,
      user: data,
    }));
  };

  onClearUsers = () => {
    this.setState(() => ({
      users: [],
    }));
  };

  render() {
    return (
      <div className="App">
        <NavBar title="Github Finder" />
        <div className="container">
          <Search
            clearUsers={this.onClearUsers}
            searchUsers={this.onSearchUser}
            showClear={this.state.users.length ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
