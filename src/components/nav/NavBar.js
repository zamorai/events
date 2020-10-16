import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function NavBar({setFormOpen}) {
  const history = useHistory();
  const[authenticated, setAuthenticated] = React.useState(false);

  const signOut = () => {
    setAuthenticated(false);
    history.push('/');
  }

  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="./assets/logo.png" alt='logo' style={{marginRight: 15}}/>
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name='Events' />
          {authenticated &&
          <Menu.Item as={NavLink} to="/create">
            <Button  positive inverted content='Create Event'/>
          </Menu.Item> }
          {authenticated ? <SignedInMenu signOut={signOut} /> : <SignedOutMenu setAuthenticated={setAuthenticated} />}
        </Container>
      </Menu>
    </div>
  )
}
