import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Localized } from 'fluent-react/compat';
import { Navbar, Nav } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`/`}>
              <img src="/activate.png" alt="" className="brand" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <li className="page-link">
              <Link to={`/activities/`}>
                <Localized id="nav-activities">
                  <span>Activities</span>
                </Localized>
              </Link>
            </li>
            <li className="page-link">
              <Link to={`/eventguide/`}>
                <Localized id="nav-event-guide">
                  <span>Event Guide</span>
                </Localized>
              </Link>
            </li>
            <li className="page-link">
              <Link to={`/faq/`}>
                <Localized id="nav-faq">
                  <span>FAQ</span>
                </Localized>
              </Link>
            </li>
            <li className="page-link">
              <Link to={`/impact/`}>
                <Localized id="nav-impact">
                  <span>Impact</span>
                </Localized>
              </Link>
            </li>
            <li className="page-link">
              <Link to={`/howwasit/`}>
                <Localized id="nav-impact-form">
                  <span>Impact Form</span>
                </Localized>
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
