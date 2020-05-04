import './App.css';

import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Alert from './components/layout/Alert';
import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import About from './components/pages/About';
import Users from './components/users/Users';

class App extends Component {
  state = {
    loading: false,
    users: [],
    user: {},
    alert: null,
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

  onSetAlerts = (msg, type) => {
    this.setState(() => ({
      alert: {
        msg,
        type,
      },
    }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar title="Github Finder" />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Alert alert={this.state.alert} />
                    <Search
                      clearUsers={this.onClearUsers}
                      searchUsers={this.onSearchUser}
                      showClear={this.state.users.length ? true : false}
                      setAlerts={this.onSetAlerts}
                    />
                    <Users loading={this.state.loading} users={this.state.users} />
                  </Fragment>
                )}
              />
              <Route path="/about-us" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
