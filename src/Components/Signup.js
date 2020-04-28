import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class signup extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      bio: "",
      avatar: "",
      // email: "",
      created: false
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
    const { username, password, bio, avatar } = this.state

    let user = {
      username: username,
      bio: bio,
      avatar: avatar,
      // email: email,
      password: password
    }

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ user })
    })
      .then(r => r.json())
      .then(response => {
        // We are reciving a status of "created" if the user is valid and saved to the database
        if (response.status === "created") {
          this.setState({ created: true })
          // call this.props. main level function
        }
      })

  }





  render() {
    return (
      <div>
        {this.state.created ? <Redirect to="/login" /> : <div>
          <form onSubmit={this.createUser}>
            {/* <input type="text" name="email" placeholder="Email" onChange={this.handleChange} /> */}
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
            <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
            <input type="text" name="bio" placeholder="bio" onChange={this.handleChange} />
            <input type="text" name="avatar" placeholder="avatar" onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>}
      </div>
    );
  }
}

export default signup;
