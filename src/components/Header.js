import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
            <NavItem className="page-link" href={`/${currentLocale}/campaigns/`}>
              <Localized id="nav-campaigns">
                <span>Campaigns</span>
              </Localized>
            </NavItem>
            <NavItem className="page-link" href={`/${currentLocale}/activities/`}>
              <Localized id="nav-activities">
                <span>Activities</span>
              </Localized>
            </NavItem>
            <NavItem className="page-link" href={`/${currentLocale}/faq/`}>
              <Localized id="nav-faq">
                <span>FAQ</span>
              </Localized>
            </NavItem>
            <NavItem className="language-selector">
              <form className="language-selector__form" id="lang_form">
                <select id="language-select"
                        name="lang"
                        value={currentLocales[0]}
                        className="form-control"
                        onChange={(event) => changeLocalesWithURL(currentLocales[0], [event.target.value])}
                >
                  {
                    availableLocales.map((locale) => {
                      return (
                        <option key={locale} value={locale}>{locale}</option>
                      )
                    })
                  }
                </select>
              </form>
            </NavItem>
          </Nav>
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
