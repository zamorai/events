import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../components/events/eventDashboard/EventDashboard';
import NavBar from '../../components/nav/NavBar';

function App() {
  const[formOpen, setFormOpen] = useState(false);

  return (
    <React.Fragment>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
       <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </React.Fragment>
  )
}

export default App;
