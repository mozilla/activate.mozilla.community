import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper container">
          <a className="site-title" href="/">
            <img src="/activate.png" alt="Logo" class="brand" />
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
            <a className="page-link" href="/activities/">Activities</a>
            <a className="page-link" href="/eventguide/">Event Guide</a>
            <a className="page-link" href="/faq/">FAQ</a>
            <a className="page-link" href="/impact/">Impact</a>
            <a className="page-link" href="/howwasit/">Impact Form</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
