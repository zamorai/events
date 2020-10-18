import React from 'react'
import { Button, Header, Segment} from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {createEvent, updateEvent} from '../../actions';
import { Formik, Form, Field} from "formik";
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import MyDateInput from '../../../app/common/form/MyDateInput';
import { categoryData } from '../../../app/api/categoryOptions';

export default function EventForm({match, history}) {
  const dispatch = useDispatch();

  const selectedEvent = useSelector(state => state.events.events.find(e => e.id === match.params.id));

  const initalValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: ""
  }

  let validation = Yup.object({
    title: Yup.string().required('Title is required'),
    category: Yup.string().required('Need to input category'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required()
  })

  return (
    <Segment clearing>
     <Formik
        initialValues={initalValues} 
        validationSchema={validation}
        onSubmit={(values) => {
          selectedEvent ? dispatch(updateEvent({...selectedEvent, ...values})) :
          dispatch(createEvent({...values, id: cuid(), hostedBy: 'Bob', attendees: [], hostPhotoURL: '/assets/user.png'}));
          history.push('/events')
        }}
      >
        {({isSubmitting, isValid, dirty}) => (
          <Form className="ui form">

            <Header sub color="teal" content ='Event details' />
            <MyTextInput name='title' placeholder="Enter event title..." />
            <MySelectInput label="Category" name='category' options={categoryData} placeholder="Category" />
            <MyTextArea name='description' placeholder="description" rows={3} />
            <Header sub color="teal" content ='Event location detials' />
            <MyTextInput name='city' placeholder="city" />
            <MyTextInput name='venue' placeholder="venue" />
            <MyDateInput name='date' placeholderText="date" timeFormat='HH:mm' showTimeSelect timeCaption="time" dateFormat="MMMM d, yyyy h:mm a" />

            <Button loading={isSubmitting} disabled={!isValid || !dirty || isSubmitting} type="submit" floated = 'right' positive content='Submit' />
            <Button disabled={isSubmitting} as={Link} to='/events' type="submit" floated = 'right' content='Cancel' />
            
          </Form>
        )}

      </Formik>
    </Segment>
  )
}
 

