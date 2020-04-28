import React, { Component } from 'react';
import './App.css';
import Welcome from './Components/Welcome'
import Login from './Components/Login';
import SignUp from './Components/Signup'
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Welcome />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/signup'>
              <SignUp />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
