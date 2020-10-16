import React from 'react'
import EventListItem from './EventListItem'

export default function EventList(props) {

  const renderItems = props.events.map((event) => {
    return (
      <EventListItem key={event.id} deleteEvent={props.deleteEvent} event = {event} selectEvent = {props.selectEvent} />
    )
  })
  
  return (
    <>
      {renderItems} 
    </>
  )
}
