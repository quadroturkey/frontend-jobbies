import React, { Component } from 'react'
import { Button, Form, Container } from 'semantic-ui-react'

class ExpandedView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tracker: this.props.currentTracker
    }
  }

  deleteTracker = () => {
    const id = this.state.tracker.id
    fetch(`http://localhost:3000/tracker/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `JWT ${localStorage.getItem('token')}`
      }
    })
      .then(data => console.log(data))
      .then(this.props.history.push("/dashboard"))
  }

  render() {
    return (
      <div>
        <Button onClick={this.deleteTracker}>delete</Button>

        <Container>
          <Form>
            <Form.Field>
              <label>title</label>
              <input placeholder={this.state.tracker.title} />
            </Form.Field>
            <Form.Field>
              <label>company</label>
              <input placeholder={this.state.tracker.company} />
            </Form.Field>
            <Form.Field>
              <label>description</label>
              <input placeholder={this.state.tracker.description} />
            </Form.Field>
            <Button type='confirm edit'>Submit</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default ExpandedView;
