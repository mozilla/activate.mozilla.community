import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <img src="/activate.png" alt="" className="brand" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Localized id="nav-activities">
              <NavItem className="page-link" href="/activities/">
                Activities
              </NavItem>
            </Localized>
            <Localized id="nav-event-guide">
              <NavItem className="page-link" href="/eventguide/">
                Event Guide
              </NavItem>
            </Localized>
            <Localized id="nav-faq">
              <NavItem className="page-link" href="/faq/">
                FAQ
              </NavItem>
            </Localized>
            <Localized id="nav-impact">
              <NavItem className="page-link" href="/impact/">
                Impact
              </NavItem>
            </Localized>
            <Localized id="nav-impact-form">
              <NavItem className="page-link" href="/howwasit/">
                Impact Form
              </NavItem>
            </Localized>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
