import React from 'react'
// import ProgressBar from './ProgressBar'
import { Item, Segment, Divider, Grid } from 'semantic-ui-react'

const Tracker = props => (
  <Segment>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>

        <Item onClick={() => props.handleExpand(props.tracker)} >
          <Item.Content>
            <Item.Header as='a'>{props.tracker.title}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{props.tracker.company}</span>
            </Item.Meta>
            <Item.Description>
              {props.tracker.description}
            </Item.Description>
          </Item.Content>
        </Item>

      </Grid.Column>


      <Grid.Column>
        <Item>
          <Item.Content>
            <Item.Header>Application Sent: {props.tracker.application_date}</Item.Header>
            <Item.Meta>Follow up Date: {props.tracker.follow_up_date}</Item.Meta>
            <Item.Description>Offer Received?: {props.tracker.offer_received === true ? "YES" : "NO"}</Item.Description>
          </Item.Content>
        </Item>
      </Grid.Column>

    </Grid>
    <Divider vertical />
  </Segment>
)

export default Tracker
