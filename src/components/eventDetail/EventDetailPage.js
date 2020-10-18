import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import EventDetailChat from './EventDetailChat'
import EventDetailHeader from './EventDetailHeader'
import EventDetailInfo from './EventDetailInfo'
import EventDetailSidebar from './EventDetailSidebar'

export default function EventDetailPage(props) {
  const event = useSelector(state => state.events.events.find(e => e.id === props.match.params.id));

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader event={event} />
        <EventDetailInfo event={event} />
        <EventDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailSidebar attendees = {event.attendees} />
      </Grid.Column>
    </Grid>
  )
}
