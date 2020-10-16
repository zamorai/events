import React, {useState} from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';

export default function EventForm({setFormOpen, updateEvent, setEvents, selectedEvent, createEvent}) {
  const initalValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
  }
  const[values, setValues] = useState(initalValues);

  const handleFormSubmit = () => {

    selectedEvent ? updateEvent({...selectedEvent, ...values}) :
    createEvent({...values, id: cuid(), hostedBy: 'Bob', attendees: [], hostPhotoURL: '/assets/user.png'});
    setFormOpen(false);
  }

  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setValues({...values, [name]: value})
  }

  return (
    <Segment clearing>
      <Header content ={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input name='title' type="text" placeholder='Event Title' value={values.title} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input name='category' type="text" placeholder='Category' value={values.category} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input name='description' type="text" placeholder='Description' value={values.description} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input name='city' type="text" placeholder='City' value={values.city} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input name='venue' type="text" placeholder='Venue' value={values.venue} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input name='date' type="date" placeholder='Date' value={values.date} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Button type="submit" floated = 'right' positive content='Submit'></Button>
        <Button as={Link} to='/events' type="submit" floated = 'right' content='Cancel'></Button>
      </Form>
    </Segment>
  )
}
 