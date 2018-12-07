import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { changeLocalesWithURL } from '../actions/language.js';

import './Footer.css';

class Footer extends Component {
  render() {
    const currentLocale = this.props.currentLocales[0];
    return (
      <footer>
        <Grid>
          <Row>
          <Col lg={5} md={4} sm={3} xs={6}>
            <Link to={`/${currentLocale}`} title="Mozilla Activate">
              <img src="/logo.svg" alt="Mozilla Activate logo" className="footer__logo" />
            </Link></Col>
          <Col lg={3} md={3} sm={3} xs={6} className="footer-nav">
            <Localized id="footer-nav-title">
              <div className="footer-nav__title">Navigate</div>
            </Localized>
            <Nav stacked className="footer-nav__menu">
              <LinkContainer exact className="page-link" to={`/${currentLocale}/campaigns`} activeClassName={"is-active"}>
                <NavItem>
                  <Localized id="nav-campaigns">
                    <span>Campaigns</span>
                  </Localized>
                </NavItem>
              </LinkContainer>
              <LinkContainer exact className="page-link" to={`/${currentLocale}/activities`} activeClassName={"is-active"}>
                <NavItem>
                  <Localized id="nav-activitiesfaq">
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
          </Col>
          <Col lg={4} md={5} sm={6} xs={12}>c</Col>
          </Row>
          <Row>
            <div className="footer__attributions">
              <div className="footer__content">
                <Localized id="footer-contibution"
                    mozillaLink={<a rel="license" href="https://www.mozilla.org/foundation/licensing/website-content/">Creative Commons license</a>}>
                  <p>
                  Portions of this content are ©1998–2018 by individual mozilla.org contributors. Content available under a <a rel="license" href="https://www.mozilla.org/foundation/licensing/website-content/">Creative Commons license</a>.
                  </p>
                </Localized>
              </div>
              <ul className="footer__terms">
                <li><a href={`https://www.mozilla.org/${currentLocale}/privacy/websites/`}>
                <Localized id="footer-privacy-note"><span>Website Privacy Notice</span></Localized>
                </a></li>
                <li><a href={`https://www.mozilla.org/${currentLocale}/privacy/websites/#cookies`}>
                <Localized id="footer-cookies"><span>Cookies</span></Localized></a></li>
                <li>
                  <a href={`https://www.mozilla.org/${currentLocale}/about/legal/`}>
                    <Localized id="footer-legal"><span>Legal</span></Localized>
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Grid>
      </footer>
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

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Footer);