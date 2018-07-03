import 'babel-polyfill';
import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <a className="site-title" href="/">
            <img src="/activate.png" alt="" className="brand" />
          </a>

          <button className="navbar-toggle collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#CollapsingNavbar"
                  aria-controls="CollapsingNavbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            &#9776;
          </button>

          <div className="trigger collapse navbar-collapse" id="CollapsingNavbar">
            <Localized id="nav-activities">
              <a className="page-link" href="/activities/">Activities</a>
            </Localized>
            <Localized id="nav-event-guide">
              <a className="page-link" href="/eventguide/">Event Guide</a>
            </Localized>
            <Localized id="nav-faq">
              <a className="page-link" href="/faq/">FAQ</a>
            </Localized>
            <Localized id="nav-impact">
              <a className="page-link" href="/impact/">Impact</a>
            </Localized>
            <Localized id="nav-impact-form">
              <a className="page-link" href="/howwasit/">Impact Form</a>
            </Localized>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
