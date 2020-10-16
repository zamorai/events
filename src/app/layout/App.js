import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDetailPage from '../../components/eventDetail/EventDetailPage';
import EventDashboard from '../../components/events/eventDashboard/EventDashboard';
import EventForm from '../../components/events/eventForm/EventForm';
import HomePage from '../../components/home/HomePage';
import NavBar from '../../components/nav/NavBar';

function App() {

  return (
    <React.Fragment>
      <Route path='/' exact component={HomePage}  />
      <Route path={'/(.+)'} render={() => (
      <React.Fragment>
        <NavBar />
        <Container className="main">
          <Route exact path='/events' component={EventDashboard}  />
          <Route path='/events/:id' component={EventDetailPage}  />
          <Route path={['/create', '/manage/:id']} component={EventForm}  />
        </Container>
      </React.Fragment>
      )}  />
      
    </React.Fragment>
  )
}

export default App;
