import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Navbar, Nav } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
  render() {
    const currentLocale = this.props.currentLocales[0];

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
              <Link to={`/${currentLocale}/activities/`}>
                <Localized id="nav-activities">
                  <span>Activities</span>
                </Localized>
              </Link>
            </li>
            <li className="page-link">
              <Link to={`/${currentLocale}/eventguide/`}>
                <Localized id="nav-event-guide">
                  <span>Event Guide</span>
                </Localized>
              </Link>
            </li>
            <li className="page-link">
              <Link to={`/${currentLocale}/faq/`}>
                <Localized id="nav-faq">
                  <span>FAQ</span>
                </Localized>
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLocales: state.currentLocales,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
