import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Navbar, Nav, NavItem, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
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
      <Navbar
        className="header js-header is-closed"
        collapseOnSelect
        onToggle={
          (event) => {
            document.getElementsByClassName("js-header")[0].classList.toggle("is-closed");
            document.getElementsByClassName("js-header")[0].classList.toggle("is-open");
          }
        }
      >
        <Navbar.Header className="header_logo">
          <Navbar.Brand>
            <Link to={`/${currentLocale}`} title="Mozilla Activate">
              <img src="/logo.svg" alt="Mozilla Activate logo" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle data-toggle="collapse" data-target=".header_logo" />
        </Navbar.Header>
        <Navbar.Collapse className="header__menu" >
          <Navbar.Form className="language-selector" pullRight id="lang_form">
            <FormGroup controlId="language-select">
              <div className="header__select">

                <ControlLabel className='element-invisible'>
                  <Localized id="nav-select-language">
                    Select Language
                  </Localized>
                </ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder={currentLocales[0]}
                  onBlur={(event) => changeLocalesWithURL(currentLocales[0], [event.target.value])}
                  name="lang"
                  defaultValue={currentLocales[0]}
                  id="language-select"
                >
                  {
                    availableLocales.map((locale) => {
                      return (
                        <option key={locale} value={locale}>{locale}</option>
                      )
                    })
                  }
                </FormControl>
                <div className="header__select-arrow"></div>
              </div>
            </FormGroup>
          </Navbar.Form>
          <Nav pullRight>
            <LinkContainer exact className="page-link" to={`/${currentLocale}/campaigns`} activeClassName={"is-active"}
            >
              <NavItem>
                <Localized id="nav-campaigns">
                  <span>Campaigns</span>
                </Localized>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact className="page-link" to={`/${currentLocale}/activities`} activeClassName={"is-active"}>
              <NavItem>
                <Localized id="nav-activities">
                  <span>Activities</span>
                </Localized>
              </NavItem>
            </LinkContainer>
            <LinkContainer exact className="page-link" to={`/${currentLocale}/faq`} activeClassName={"is-active"}>
              <NavItem>
                <Localized id="nav-faq">
                  <span>FAQ</span>
                </Localized>
              </NavItem>
            </LinkContainer>
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

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Header);
