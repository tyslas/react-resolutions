import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import quill from '../../assets/quill-128.png';
import logo from '../../assets/logo.svg';
import gitIcon from '../../assets/github-10-24.png';

const navbar = () => {
  return (
      <Navbar
        className="Nav"
        collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={quill} className="" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text>Reso-Box</Navbar.Text>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              eventKey={1} href="https://github.com/tyslas/react-resolutions"
              target="_blank" >
              <img className="gitLogo" src={gitIcon} />
            </NavItem>
            <NavItem
              eventKey={2}
              href="https://github.com/facebook/react" >
              <img className="App-logo" src={logo} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default navbar;
