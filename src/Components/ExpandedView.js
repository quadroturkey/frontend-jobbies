import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
// import Calendar from './Calendar'

class ExpandedView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.currentTracker.title,
      company: this.props.currentTracker.company,
      description: this.props.currentTracker.description,
      user_id: this.props.currentTracker.user_id,
      application_date: this.props.currentTracker.application_date,
      follow_up_date: this.props.currentTracker.follow_up_date,
      offer_received: this.props.currentTracker.offer_received,
      id: this.props.currentTracker.id
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  appDate = (event) => {
    this.setState({
      application_date: event.target
    })
  }

  deleteTracker = () => {
    console.log('where are we? ======')
    const id = this.state.id
    console.log(id, 'tracker id')
    fetch(`http://localhost:3000/tracker/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `JWT ${localStorage.getItem('token')}`
      }
    })
      .then(data => console.log(data))
      .then(this.props.history.push("/dashboard"))
  }

  updateTracker = (event) => {
    event.preventDefault()
    event.target.reset()

    const { title, company, description, user_id, application_date, follow_up_date, offer_received } = this.state
    const tracker = { title, company, description, user_id, application_date, follow_up_date, offer_received }

    const id = this.state.id
    fetch(`http://localhost:3000/tracker/${id}`, {
      method: 'PATCH',
      headers: {
        "Authorization": `JWT ${localStorage.getItem('token')}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ tracker })
    })
      .then(data => console.log(data))
      .then(this.props.history.push("/dashboard"))
  }

  render() {
    return (
      <div>
        <button onClick={this.deleteTracker}>delete</button>
        <Container>
          <form onSubmit={this.updateTracker}>
            <input type="text" name="title" placeholder={this.state.title} onChange={this.handleChange} />
            <input type="text" name="company" placeholder={this.state.company} onChange={this.handleChange} />
            <input type="text" name="description" placeholder={this.state.description} onChange={this.handleChange} />
            <input type="date" name="application_date" placeholder={this.state.application_date} onChange={this.handleChange} />
            <input type="date" name="follow_up_date" placeholder={this.state.follow_up_date} onChange={this.handleChange} />
            <label>
              <select value={this.state.offer_received} name="offer_received" onChange={this.handleChange}>
                <option value={false}>No Offer</option>
                <option value={true}>Offer Received</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        </Container>
      </div>
    )
  }
}

export default ExpandedView;
