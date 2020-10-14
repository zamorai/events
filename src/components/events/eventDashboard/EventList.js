import React from 'react'
import EventListItem from './EventListItem'

export default function EventList(props) {

  const renderItems = props.events.map((event) => {
    return (
      <EventListItem key={event.id} event = {event} />
    )
  })
  
  return (
    <>
      {renderItems} 
    </>
  )
}
