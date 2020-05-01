import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormExampleForm = (props) => (
  <Form>
    <Form.Field>
      <label>title</label>
      <input placeholder={props.currentTracker.title} />
    </Form.Field>
    <Form.Field>
      <label>company</label>
      <input placeholder={props.currentTracker.company} />
    </Form.Field>
    <Form.Field>
      <label>description</label>
      <input placeholder={props.currentTracker.description} />
    </Form.Field>
    <Button type='confirm edit'>Submit</Button>
  </Form>
  
)

export default FormExampleForm