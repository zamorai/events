import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDetailPage from '../../components/eventDetail/EventDetailPage';
import EventDashboard from '../../components/events/eventDashboard/EventDashboard';
import EventForm from '../../components/events/eventForm/EventForm';
import HomePage from '../../components/home/HomePage';
import NavBar from '../../components/nav/NavBar';
import ModalManager from '../common/modals/ModalManager';

function App() {
  const {pathName} = useLocation()

  return (
    <React.Fragment>
      <ModalManager />
      <Route path='/' exact component={HomePage}  />
      <Route path={'/(.+)'} render={() => (
      <React.Fragment>
        <NavBar />
        <Container className="main">
          <Route exact path='/events' component={EventDashboard}  />
          <Route path='/events/:id' component={EventDetailPage}  />
          <Route path={['/create', '/manage/:id']} component={EventForm} key={pathName} />
        </Container>
      </React.Fragment>
      )}  />
      
    </React.Fragment>
  )
}

export default App;
