import './App.css';

import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Alert from './components/layout/Alert';
import NavBar from './components/layout/NavBar';
import Search from './components/layout/Search';
import About from './components/pages/About';
import User from './components/users/User';
import Users from './components/users/Users';
import GitHubState from './context/github/github.state';

const App = () => {
  const [alert, setAlert] = useState(null);

  const onSetAlerts = (msg, type) => {
    setAlert({
      msg,
      type,
    });
  };

  return (
    <GitHubState>
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
                    <Alert alert={alert} />
                    <Search setAlerts={onSetAlerts} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route path="/about-us" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GitHubState>
  );
};

export default App;
