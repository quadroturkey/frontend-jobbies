import React, { Component } from 'react';
const backend = `https://peaceful-wildwood-78792.herokuapp.com`

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      currentUser: ""
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  };

  createUser = (event) => {
    event.preventDefault()
    event.target.reset()

    const { username, password } = this.state
    const user = { username, password }

    fetch(`${backend}/users`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true"
      },
      body: JSON.stringify({ user })
    })
      .then(r => r.json())
      .then(response => {
        if (response.status === "created") {
          localStorage.setItem("token", response.jwt)
          this.setState({ currentUser: response.user.username, loggedIn: true })
          this.props.handleLogin(response)
        }
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createUser}>
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange} /><br/>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} /><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
