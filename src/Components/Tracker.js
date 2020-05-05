import React, { Component } from 'react'
import { Item, Segment, Divider, Grid } from 'semantic-ui-react'
import '../App.css'

class Tracker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      style: undefined
    }
  }

  setStyle = () => {
    let style = 'good'
    if (this.props.tracker.offer_received === true) {
      style = 'offer'
    }
    if (this.props.tracker.application_date === null || this.props.tracker.follow_up_date === null) {
      style = 'missing'
    }
    else {
      let followDate = this.props.tracker.follow_up_date
      let currentDate = new Date().toISOString().slice(0, 10)

      let followdateUpdated = new Date(followDate.replace(/-/g, '/'));
      let currentDateUpdated = new Date(currentDate.replace(/-/g, '/'));

      let diffMs = currentDateUpdated - followdateUpdated
      let diffDays = diffMs / (60*60*24*1000) % 365

      if (diffDays >= 14) {
        style = 'week2'
      }
      if (diffDays >= 30) {
        style = 'week4'
      }
    }
    this.setState({ style })
  }

  componentDidMount() {
    this.setStyle()
  }

  render() {
    return (
      <div className={this.state.style}>
        <Segment>
          <Grid columns={2} relaxed='very' stackable>

            <Grid.Column>
              <Item onClick={() => this.props.handleExpand(this.props.tracker)} >
                <Item.Content>
                  <Item.Header as='a' ><h3>Title: {this.props.tracker.title}</h3></Item.Header>
                  <Item.Meta>Company: {this.props.tracker.company}</Item.Meta>
                  <Item.Description>Description: {this.props.tracker.description}</Item.Description>
                </Item.Content>
              </Item>
            </Grid.Column>

            <Grid.Column>
              <Item>
                <Item.Content>
                  <Item.Header>Application Sent: {this.props.tracker.application_date}</Item.Header>
                  <Item.Meta>Follow up Date: {this.props.tracker.follow_up_date}</Item.Meta>
                  <Item.Description>Offer Received? {this.props.tracker.offer_received ? "YES" : "NO"}</Item.Description>
                </Item.Content>
              </Item>
            </Grid.Column>

          </Grid>
          <Divider vertical />
        </Segment>
      </div>
    )
  }
}

export default Tracker
