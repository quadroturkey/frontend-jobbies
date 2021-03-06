import React, { Component } from 'react'
import Tracker from './Tracker'
import { Item, Container } from 'semantic-ui-react'
const backend = `https://peaceful-wildwood-78792.herokuapp.com`

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackers: [],
      title: '',
      company: '',
      description: '',
      application_date: this.currentDate(),
      follow_up_date: this.currentDate(),
      offer_received: undefined,
      user_id: undefined
    }
  }

  currentDate = () => {
    return new Date().toISOString().slice(0, 10)
  }

  fetchTrackers() {
    fetch(backend + `/profile`, {
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

    const { title, company, description, user_id, application_date, follow_up_date } = this.state
    const tracker = { title, company, description, user_id, application_date, follow_up_date }

    fetch(backend + `/tracker`, {
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
      .then(() => { this.fetchTrackers() })
  }

  handleExpand = (tracker) => {
    this.props.handleTracker(tracker)
    this.props.history.push("/expandedView")
  }

  render() {
    return (
      <div>

        {/* <h1>Username: {this.props.user.username}</h1> */}

        <div>
          <h3>Make a new Tracker</h3>
          <form onSubmit={this.createNewTracker}>
            <input type="text" name="title" placeholder="title" onChange={this.handleChange} /><br/>
            <input type="text" name="company" placeholder="company" onChange={this.handleChange} /><br/>
            <input type="text" name="description" placeholder="description" onChange={this.handleChange} /><br/>
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
