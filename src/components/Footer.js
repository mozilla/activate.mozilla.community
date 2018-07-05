import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper container row">
          <div className="icons">
            <div className="icon-container">
              <div className="icon">
                <img src="/icons/icon-twitter.svg" alt="" className="footer-icon" />
                <Localized id="twitter">
                  <a href="https://twitter.com/MozParticipate" rel="noopener noreferrer" target="_blank">Twitter</a>
                </Localized>
              </div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src="/icons/icon-irc.svg" alt="" className="footer-icon" />
                <Localized id="discussion">
                  <a href="https://discourse.mozilla-community.org/c/participation-leaders" rel="noopener noreferrer" target="_blank">Discussion</a>
                </Localized>
                </div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src="/icons/icon-code.svg" alt="" className="footer-icon" />
                <Localized id="contribute">
                  <a href="https://github.com/mozilla/activate.mozilla.community" rel="noopener noreferrer" target="_blank">Contribute</a>
                </Localized>
              </div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src="/icons/icon-terms.svg" alt="" className="footer-icon" />
                <Localized id="legal">
                  <a href="https://www.mozilla.org/en-US/about/legal.html" rel="noopener noreferrer" target="_blank">Legal</a>
                </Localized>
              </div>
            </div>
          </div>

          <div className="footer-content">
            <a href="https://www.mozilla.org/" className="logo" rel="noopener noreferrer" target="_blank">
              <img src="/mozilla-wordmark.svg" alt="Mozilla Logo" height="30" width="105" />
            </a>
            <Localized id="footer-description"
                       mozillaLink={<a target="_blank" rel="noopener noreferrer" href="//mozilla.org"></a>}>
              <p>
                Mozilla is a global non-profit dedicated to putting you in control of your online
                experience and shaping the future of the web for the public good. Visit us
                at <a target="_blank" rel="noopener noreferrer" href="//mozilla.org">mozilla.org</a>
              </p>
            </Localized>
            <form className="languages" id="lang_form">
              <select id="language-select"
                      name="lang"
                      defaultValue="{this.props.currentLocales[0]}"
                      className="form-control"
                      onChange={this.props.handleLocaleChange}
              >
                {
                  this.props.availableLocales.map((locale) => {
                    return (
                      <option key={locale} value={locale}>{locale}</option>
                    )
                  })
                }
              </select>
            </form>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
