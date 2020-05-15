import './App.css';

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Alert from './components/layout/Alert';
import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import About from './components/pages/About';
import User from './components/users/User';
import Users from './components/users/Users';
import GitHubState from './context/github/github.state';
import AlertState from './context/alert/alert.state';

const App = () => {
  return (
    <GitHubState>
      <AlertState>
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
                      <Alert />
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route path="/about-us" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
};

export default App;
