import React, { Component } from 'react'
import { Item, Segment, Divider, Grid, Progress } from 'semantic-ui-react'
import '../App.css'


class Tracker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      style: undefined,
      progressPercent: undefined,
      barLabel: undefined,
      color: undefined
    }
  }

  setStyle = () => {
    let style = 'good', progressPercent = 80, barLabel = 'Up to date', color = 'blue'
    if (this.props.tracker.offer_received === true) {
      style = 'offer'
      progressPercent = 100
      barLabel = 'Offer Reviced'
      color = 'green'
    }
    if (this.props.tracker.application_date === null || this.props.tracker.follow_up_date === null) {
      style = 'missing'
      progressPercent = 20
      barLabel = 'Missing Fields'
      color = 'violet'
    }
    else {
      let followDate = this.props.tracker.follow_up_date
      let currentDate = new Date().toISOString().slice(0, 10)

      let followdateUpdated = new Date(followDate.replace(/-/g, '/'));
      let currentDateUpdated = new Date(currentDate.replace(/-/g, '/'));

      let diffMs = currentDateUpdated - followdateUpdated
      let diffDays = diffMs / (60 * 60 * 24 * 1000) % 365

      if (diffDays >= 14) {
        style = 'week2'
        progressPercent = 60
        barLabel = '2 weeks since follow-up'
        color = 'yellow'
      }
      if (diffDays >= 30) {
        style = 'week4'
        progressPercent = 40
        barLabel = '4 weeks since follow-up'
        color = 'red'
      }
    }

    this.setState({ style, progressPercent, barLabel, color })
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
                  <Item.Header>Application Sent: {this.props.tracker.application_date}</Item.Header>
                  <Item.Meta>Follow up Date: {this.props.tracker.follow_up_date}</Item.Meta>
                </Item.Content>
              </Item>
            </Grid.Column>

            <Grid.Column>
                  <Progress className='bar' percent={this.state.progressPercent} color={this.state.color} size='large'>{this.state.barLabel}</Progress>
            </Grid.Column>

          </Grid>
          <Divider vertical />
        </Segment>
      </div>
    )
  }
}

export default Tracker
