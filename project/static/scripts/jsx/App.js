import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class App extends React.Component {
  render() {
    return (
      <div>
        <header>
		  		<h1>App</h1>
		  	</header>
        <Nav bsStyle="tabs" activeKey={1}>
          <NavDropdown eventKey={3} title="Experimentals" id="nav-dropdown" >
            <MenuItem eventKey="3.1">
              <LinkContainer to={ '/home' }><div>Dynamic Search</div></LinkContainer>
            </MenuItem>
            <MenuItem eventKey="3.2">
              <LinkContainer to={ '/menu' }><div>Menu</div></LinkContainer>
            </MenuItem>
          </NavDropdown>
        </Nav>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default App;
