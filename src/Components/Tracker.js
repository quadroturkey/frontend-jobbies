import React from 'react'
import { Item, Segment, Divider, Grid } from 'semantic-ui-react'
import '../App.css'

const Tracker = props => (

  <div className={`${props.tracker.offer_received ? "offer" : "bad"}`} >
    <Segment>
      <Grid columns={2} relaxed='very' stackable>

        <Grid.Column>
          <Item onClick={() => props.handleExpand(props.tracker)} >
            <Item.Content>
              <Item.Header as='a' ><h3>Title: {props.tracker.title}</h3></Item.Header>
              <Item.Meta>Company: {props.tracker.company}</Item.Meta>
              <Item.Description>Description: {props.tracker.description}</Item.Description>
            </Item.Content>
          </Item>
        </Grid.Column>

        <Grid.Column>
          <Item>
            <Item.Content>
              <Item.Header>Application Sent: {props.tracker.application_date}</Item.Header>
              <Item.Meta>Follow up Date: {props.tracker.follow_up_date}</Item.Meta>
              <Item.Description>Offer Received? {props.tracker.offer_received ? "YES" : "NO"}</Item.Description>
            </Item.Content>
          </Item>
        </Grid.Column>

      </Grid>
      <Divider vertical />
    </Segment>
  </div>
)

export default Tracker
