import React, {useState} from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard() {
  const[events, setEvents] = useState(sampleData);


  // function handleCreateEvent(event) {
  //   setEvents([...events, event])
  // }

  // const handleUpdateEvent = (updatedEvent) => {
  //   setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent: event))

  // }

  function handleDeleteEvent (eventId) {
    setEvents(events.filter(event => event.id !== eventId))
  }

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Event Filters</h2>
        </Grid.Column>
      </Grid>
    </div>
  )
}
 