import React, { Component } from 'react'
import Tracker from './Tracker'
import { Item, Container } from 'semantic-ui-react'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackers: [],
      title: '',
      company: '',
      description: '',
      application_date: undefined,
      follow_up_date: undefined,
      offer_received: undefined,
      user_id: undefined
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
        this.setState({
          trackers: response.user.trackers,
          user_id: response.user.id
        })
      })
  }

  componentDidMount() {
    this.fetchTrackers()
    this.fetchTrackers()
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  createNewTracker = (event) => {
    event.preventDefault()
    event.target.reset()

    const { title, company, description, user_id } = this.state
    const tracker = { title, company, description, user_id }

    fetch("http://localhost:3000/tracker", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
        "Authorization": `JWT ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ tracker })
    })
      .then(r => r.json())
      .then(resp => {
        this.fetchTrackers()
      })
  }

  handleExpand = (tracker) => {
    this.props.handleTracker(tracker)
    this.props.history.push("/expandedView")
  }

  render() {
    return (
      <div>

        <h1>Status: {this.props.loggedInStatus}</h1>
        <h1>Username: {this.props.user.username}</h1>

        <div>
          <form onSubmit={this.createNewTracker}>
            <input type="text" name="title" placeholder="title" onChange={this.handleChange} />
            <input type="text" name="company" placeholder="company" onChange={this.handleChange} />
            <input type="text" name="description" placeholder="description" onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>

        <Container>
          <Item.Group divided>
            {this.state.trackers.map(tracker =>
              <Tracker tracker={tracker} key={tracker.id} handleExpand={this.handleExpand} />
            )}
          </Item.Group>
        </Container>

      </div>
    )
  }
}
