import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';

import MainPage from './Components/Main/Main';
import LoginPage from './Components/Login';

import AboutMe from './Components/Main/About';
import { Skills } from './Components/Main/Skills';
import { Portfolio } from './Components/Main/Portfolio';


class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
        <Route key="main" path="/" component={MainPage} />
          <Switch>
            <Route key="login" path="/login" component={LoginPage} />
            <Route key="about" path="/about" component={AboutMe} />
            <Route key="skills" path="/skills" component={Skills} />
            <Route key="portfolio" path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default AppRouter;
