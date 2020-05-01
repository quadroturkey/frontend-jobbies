import React from 'react'
// import ProgressBar from './ProgressBar'
import { Item, Segment, Divider, Grid, Button } from 'semantic-ui-react'

const Tracker = props => (
  <Segment>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>

        <Item>
          <Item.Content>
            <Item.Header as='a'>{props.tracker.title}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{props.tracker.company}</span>
            </Item.Meta>
            <Item.Description>{props.tracker.description}</Item.Description>
          </Item.Content>
        </Item>

      </Grid.Column>


      <Grid.Column>
        <Button onClick={() => props.handleExpand(props.tracker)} >Expand</Button>
      </Grid.Column>

    </Grid>
      <Divider vertical />
  </Segment>
)

export default Tracker
