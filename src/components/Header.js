import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Navbar, Nav, NavItem, FormGroup, FormControl, ControlLabel, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { changeLocalesWithURL } from '../actions/language.js';

import './Header.css';

class Header extends Component {
  render() {

    const {
      availableLocales,
      currentLocales,
      changeLocalesWithURL,
    } = this.props;

    const currentLocale = this.props.currentLocales[0];

    return (
      <Navbar className="header">
        <Navbar.Header className="header_logo">
          <Navbar.Brand >
            <Link to={`/${currentLocale}`}>
              <img src="/logo.svg" alt="Mozilla Activate logo" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="header__menu">
          <Nav>
            <LinkContainer exact className="page-link" to={`/${currentLocale}/campaigns`}>
              <NavItem>
                <Localized id="nav-campaigns">
                  <span>Campaigns</span>
                </Localized>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact className="page-link" to={`/${currentLocale}/activities`}>
              <NavItem>
                <Localized id="nav-activitiesfaq">
                  <span>Activities</span>
                </Localized>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact className="page-link" to={`/${currentLocale}/faq`}>
              <NavItem>
                <Localized id="nav-faq">
                  <span>FAQ</span>
                </Localized>
              </NavItem>
            </LinkContainer>
          </Nav>
          <Navbar.Form className="language-selector" >
            <FormGroup controlId="language-select">
              <ControlLabel className='visually-hidden'>Select</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder={currentLocales[0]}
                onChange={(event) => changeLocalesWithURL(currentLocales[0], [event.target.value])}
                value={currentLocales[0]}
              >
                {
                  availableLocales.map((locale) => {
                    return (
                      <option key={locale} value={locale}>{locale}</option>
                    )
                  })
                }
              </FormControl>
            </FormGroup>

          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLocales: state.language.currentLocales,
  availableLocales: state.language.availableLocales,
});
const mapDispatchToProps = {
  changeLocalesWithURL,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
