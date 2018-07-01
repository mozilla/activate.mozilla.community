import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper container row">
          <div className="icons">
            <div className="icon-container">
              <div className="icon">
                <img src="/icons/icon-twitter.svg" class="footer-icon" />
                <a href="https://twitter.com/MozParticipate" target="_blank">Twitter</a>
              </div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src="/icons/icon-irc.svg" class="footer-icon" />
                <a href="https://discourse.mozilla-community.org/c/participation-leaders" target="_blank">Discussion</a>
              </div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src="/icons/icon-code.svg" class="footer-icon" />
                <a href="https://github.com/mozilla/activate.mozilla.community" target="_blank">Contribute</a>
              </div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src="/icons/icon-terms.svg" class="footer-icon" />
                <a href="https://www.mozilla.org/en-US/about/legal.html" target="_blank">Legal</a>
              </div>
            </div>
          </div>

          <div className="footer-content">
            <a href="https://www.mozilla.org/" class="logo" target="_blank">
              <img src="/mozilla-wordmark.svg" height="30" width="105" />
            </a>
            <p>
              Mozilla is a global non-profit dedicated to putting you in control of your online
              experience and shaping the future of the web for the public good. Visit us
              at <a target="_blank" href="//mozilla.org">mozilla.org</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
