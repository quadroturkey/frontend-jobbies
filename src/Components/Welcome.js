import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import Login from './Login';
// import Signup from './Signup'

export default class Welcome extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: {}
  //   }
  // }

  handleAuth = data => {
    this.props.history.push("/dashboard")
    this.props.handleLogin(data)
  }

  render() {
    return (
      <div>
        <h1>Welcome to my Job Application Tracker</h1><br />
        <h1>status: {this.props.loggedInStatus}</h1>

        {/* <h2>Signup</h2>
        <Signup /> */}

        <h2>Login</h2>
        <Login handleAuth={this.props.handleAuth} />
      </div>
    );
  }
}
