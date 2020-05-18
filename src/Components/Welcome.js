import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import '../styleSheets/Welcome.css'

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth(data) {
    this.props.history.push("/dashboard")
    this.props.handleLogin(data)
  }

  render() {
    return (
      <div className='div'>
        <h1>Please log in or create an account</h1><br />

        <h2>Login</h2>
        <Login handleAuth={this.handleAuth} />
        
        <h2>Signup</h2>
        <Signup handleAuth={this.handleAuth} />  

      </div>
    );
  }
}
