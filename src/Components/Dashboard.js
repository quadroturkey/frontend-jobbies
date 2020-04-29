import React, { Component } from 'react'

export default class Dashboard extends Component {
  render(props) {
    return (
      <div>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <h1>Username: {this.props.user.username}</h1>
      </div>
    )
  }
}
