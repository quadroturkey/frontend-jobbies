import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackers: []
    }
  }

  fetchTrackers() {
    fetch(`http://localhost:3000/tracker`)
      .then(r => r.json())
      .then(response => {
        localStorage.setItem("token", response.jwt)
        console.log(response)
      })
  }

  componentDidMount() {
    this.fetchTrackers()
  }

  render() {
    return (
      <div>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <h1>Username: {this.props.user.username}</h1>
      </div>

    )
  }
}
