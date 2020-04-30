import React from 'react'
// import ProgressBar from './ProgressBar'
import { Item, Segment, Divider } from 'semantic-ui-react'

const Tracker = (props) => (
  <Segment>

    <Item>
      <Item.Content>
        <Item.Header as='a'>{props.tracker.title}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{props.tracker.company}</span>
        </Item.Meta>
        <Item.Description>{props.tracker.description}</Item.Description>
      </Item.Content>
    </Item>

    <Divider vertical />


  </Segment>
)

export default Tracker