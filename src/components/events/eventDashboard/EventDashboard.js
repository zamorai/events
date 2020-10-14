import React, {useState} from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../eventForm/EventForm'
import EventList from './EventList'
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard({ formOpen, setFormOpen }) {
  const[events, setEvents] = useState(sampleData);


  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={sampleData} />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && 
          <EventForm setFormOpen={setFormOpen} />}
        </Grid.Column>
      </Grid>
    </div>
  )
}
