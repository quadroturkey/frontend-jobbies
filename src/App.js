import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome'
// import Login from './Components/Login';
// import SignUp from './Components/Signup'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import ExpandedView from './Components/ExpandedView';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
      currentTracker: []
    }
  }

  handleLogin = data => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleTracker = tracker => {
    this.setState({
      currentTracker: tracker
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>

            <Route
              exact
              path={"/"}
              render={props => (
                <Welcome {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                />
              )}
            />

            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                  handleTracker={this.handleTracker}
                  
                />
              )}
            />

            <Route
              exact
              path={"/expandedView"}
              render={props => (
                <ExpandedView {...props}
                currentTracker={this.state.currentTracker}
                  // loggedInStatus={this.state.loggedInStatus}
                  // user={this.state.user}
                />
              )}
            />

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
