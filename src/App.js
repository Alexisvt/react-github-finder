import "./App.css";

import axios from "axios";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Alert from "./components/layout/Alert";
import NavBar from "./components/layout/NavBar";
import Search from "./components/layout/Search";
import About from "./components/pages/About";
import User from "./components/users/User";
import Users from "./components/users/Users";
import GitHubState from "./context/github/github.state";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const getUser = async (userName) => {
    setLoading(true);

    const { data } = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setLoading(false);
    setUser(data);
  };

  const getUserRepos = async (userName) => {
    setLoading(true);

    const { data } = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setLoading(false);
    setRepos(data);
  };

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
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
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
