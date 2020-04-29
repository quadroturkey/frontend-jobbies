import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome'
// import Login from './Components/Login';
// import SignUp from './Components/Signup'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  }

  handleLogin = data => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
    console.log(this.state.user)
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
                />
              )}
            />

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
