import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { changeLocalesWithURL } from '../actions/language.js';
import NewsletterFooterForm from './NewsletterFooterForm.js';

import './Footer.css';

class Footer extends Component {
  render() {
    const currentLocale = this.props.currentLocales[0];
    return (
      <footer>
        <Grid>
          <Row>
          <Col lg={4} md={4} sm={4} xs={4}>
            <Link to={`/${currentLocale}`} title="Mozilla Activate">
              <img src="/logo.svg" alt="Mozilla Activate logo" className="footer__logo" />
            </Link>
          </Col>
          <Col lg={2} md={2} sm={4} xs={4} className="footer-nav">
            <Localized id="footer-contribute-title">
              <div className="footer-nav__title"></div>
            </Localized>
            <Nav stacked className="footer-nav__menu">
              <li role="presentation" className="page-link">
                <a href={`https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Introduction`}>
                  <Localized id="footer-mozilla-code-base"><span></span></Localized>
                </a>
              </li>
              <li role="presentation" className="page-link">
                <a href={`https://wiki.mozilla.org/Contribute`}>
                  <Localized id="footer-contribute-wiki"><span></span></Localized>
                </a>
              </li>
            </Nav>
          </Col>
          <Col lg={2} md={2} sm={4} xs={4} className="footer-nav">
            <Localized id="footer-nav-title">
              <div className="footer-nav__title"></div>
            </Localized>
            <Nav stacked className="footer-nav__menu">
              <LinkContainer exact className="page-link" to={`/${currentLocale}/campaigns`} activeClassName={"is-active"}>
                <NavItem>
                  <Localized id="nav-campaigns">
                    <span></span>
                  </Localized>
                </NavItem>
              </LinkContainer>
              <LinkContainer exact className="page-link" to={`/${currentLocale}/activities`} activeClassName={"is-active"}>
                <NavItem>
                  <Localized id="nav-activities">
                    <span></span>
                  </Localized>
                </NavItem>
              </LinkContainer>
              <LinkContainer exact className="page-link" to={`/${currentLocale}/faq`} activeClassName={"is-active"}>
                <NavItem>
                  <Localized id="nav-faq">
                    <span></span>
                  </Localized>
                </NavItem>
              </LinkContainer>
              <li role="presentation" className="page-link">
                <a href={`https://github.com/mozilla/activate.mozilla.community/issues`}>
                  <Localized id="footer-github"><span></span></Localized>
                </a>
              </li>
              <li role="presentation" className="page-link">
                <a href={`https://pontoon.mozilla.org/projects/mozilla-activate/`}>
                  <Localized id="footer-pontoon"><span></span></Localized>
                </a>
              </li>
            </Nav>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <NewsletterFooterForm/>
          </Col>
          </Row>
          <Row>
            <Col lg={12} className="footer__attributions">
              <div className="footer__content">
                <Localized id="footer-contibution-2019"
                    mozillaLink={<a rel="license" href="https://www.mozilla.org/foundation/licensing/website-content/"></a>}>
                  <p></p>
                </Localized>
              </div>
              <ul className="footer__terms">
                <li><a href={`https://www.mozilla.org/privacy/websites/`}>
                <Localized id="footer-privacy-note"><span></span></Localized>
                </a></li>
                <li><a href={`https://www.mozilla.org/privacy/websites/#cookies`}>
                <Localized id="footer-cookies"><span></span></Localized></a></li>
                <li>
                  <a href={`https://www.mozilla.org/about/legal/`}>
                    <Localized id="footer-legal"><span></span></Localized>
                  </a>
                </li>
              </ul>
            </Col>
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