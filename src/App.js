import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
import About from './components/pages/About';
import User from './components/users/User';
import GitHubState from './context/github/github.state';
import AlertState from './context/alert/alert.state';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar title="Github Finder" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-us" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
};

export default App;
