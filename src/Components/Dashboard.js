import React, { Component } from 'react'
import Tracker from './Tracker'
import { Item, Container } from 'semantic-ui-react'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackers: []
    }
  }

  fetchTrackers() {
    fetch(`http://localhost:3000/profile`, {
      headers: {
        'Authorization': `JWT ${localStorage.getItem('token')}`,
      },
    })
      .then(r => r.json())
      .then(response => {
        console.log(response.user.trackers)
        this.setState({ trackers: response.user.trackers })
      })
  }

  componentDidMount() {
    this.fetchTrackers()
  }

  increment = () =>
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    }))

  render() {
    return (
      <div>

        <h1>Status: {this.props.loggedInStatus}</h1>
        <h1>Username: {this.props.user.username}</h1>

        <Container>
          <Item.Group divided>
            {this.state.trackers.map(tracker =>
              <Tracker tracker={tracker} key={tracker.id} />
            )}
          </Item.Group>
        </Container>
      </div>
    )
  }
}
