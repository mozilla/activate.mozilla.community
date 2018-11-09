import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
  render() {
    const currentLocale = this.props.currentLocales[0];

    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`/${currentLocale}`}>
              <img src="/activate.svg" alt="" className="brand" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem className="page-link" href={`/${currentLocale}/eventguide/`}>
              <Localized id="nav-event-guide">
                <span>Event Guide</span>
              </Localized>
            </NavItem>
            <NavItem className="page-link" href={`/${currentLocale}/faq/`}>
              <Localized id="nav-faq">
                <span>FAQ</span>
              </Localized>
            </NavItem>
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
