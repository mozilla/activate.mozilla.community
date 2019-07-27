import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import {
  Send,
} from 'react-feather';

import SelectCountry from './SelectCountry.js';
import SelectLanguage from './SelectLanguage.js';

class NewsletterFooterForm extends Component {
  componentDidMount () {
    /* This Source Code Form is subject to the terms of the Mozilla Public
     * License, v. 2.0. If a copy of the MPL was not distributed with this
     * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

    // From: https://raw.githubusercontent.com/mozilla/basket-example/master/basket-client.js
    // @see: https://github.com/mozilla/basket-example

    const newsletterForm = document.getElementById('newsletter_footer_form');

    // handle errors
    let errorArray = [];
    const newsletterErrors = document.getElementById('newsletter_footer_errors');

    function newsletterError () {
      const errorList = document.createElement('ul');

      if (errorArray.length) {
        for (let i = 0; i < errorArray.length; i++) {
          const item = document.createElement('li');
          item.appendChild(document.createTextNode(errorArray[i]));
          errorList.appendChild(item);
        }
      } else {
        // no error messages, forward to server for better troubleshooting
        newsletterForm.setAttribute('data-skip-xhr', true);
        newsletterForm.submit();
      }

      newsletterErrors.appendChild(errorList);
      newsletterErrors.style.display = 'block';
    }

    // TODO: Correct offset top according to final markup.
    // show success message
    function newsletterThanks () {
      const thanks = document.getElementById('newsletter_thanks_footer');
      // show thanks message
      thanks.style.display = 'block';
    }

    // XHR subscribe; handle errors; display thanks message on success.
    function newsletterSubscribe (evt) {
      const skipXHR = newsletterForm.getAttribute('data-skip-xhr');
      if (skipXHR) {
        return true;
      }

      evt.preventDefault();
      evt.stopPropagation();

      // new submission, clear old errors
      errorArray = [];
      newsletterErrors.style.display = 'none';
      while (newsletterErrors.firstChild) newsletterErrors.removeChild(newsletterErrors.firstChild);

      const fmt = document.getElementById('fmt-footer').value;
      const email = document.getElementById('em-footer').value;
      const newsletter = document.getElementById('nl-footer').value;
      const newsletterLanguage = document.getElementById('newsletter-language-footer').value;
      const newsletterCountry = document.getElementById('newsletter-country-footer').value;
      const privacy = document.querySelector('input[name="priv-footer"]:checked') ? '&privacy=true' : '';

      const params = 'email=' + encodeURIComponent(email) +
        '&newsletters=' + newsletter +
        privacy +
        '&fmt=' + fmt +
        '&country=' + newsletterCountry +
        '&lang=' + newsletterLanguage +
        '&source_url=' + encodeURIComponent(document.location.href);

      // eslint-disable-next-line no-undef
      const xhr = new XMLHttpRequest();

      xhr.onload = function (r) {
        if (r.target.status >= 200 && r.target.status < 300) {
          // response is null if handled by service worker
          const response = r.target.response;
          if (response === null) {
            newsletterError();
            return;
          }
          if (response.success === true) {
            newsletterForm.style.display = 'none';
            newsletterThanks();
          } else {
            if (response.errors) {
              for (let i = 0; i < response.errors.length; i++) {
                errorArray.push(response.errors[i]);
              }
            }

            newsletterError();
          }
        } else {
          newsletterError();
        }
      };

      xhr.onerror = function () {
        newsletterError();
      };

      const url = newsletterForm.getAttribute('action');

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.timeout = 5000;
      xhr.ontimeout = newsletterError;
      xhr.responseType = 'json';
      xhr.send(params);

      return false;
    }

    newsletterForm.addEventListener('submit', newsletterSubscribe, false);
  }

  constructor (props) {
    super(props);
    this.state = {
      value: 'placeholder',
    };
  }

  render () {
    const classes = ['nl--footer', 'js-nl--footer'];
    const classString = classes.join(' ');

    return (
      <section className={classString}>
        <div className="newsletter__content">
          <form id="newsletter_footer_form" name="newsletter_footer__form" className="newsletter__form--footer" action="https://www.mozilla.org/en-US/newsletter/" method="post">
            <Localized id="footer-newsletter-title">
              <div className="footer-nav__title"></div>
            </Localized>
            <div className="form_group text text--small newsletter__description">
              <Localized id="newsletter-description-subscribe">
                <p></p>
              </Localized>
            </div>
            <input type="hidden" id="fmt-footer" name="fmt-footer" value="H" />
            <input type="hidden" id="nl-footer" name="nl-footer" value="about-mozilla" />

            <div id="newsletter_footer_errors" className="newsletter__errors--footer text text--small color--white" />

            <div id="newsletter_email_footer" className="form_group newsletter__email">
              <Localized id="newsletter-email">
                <label htmlFor="em-footer" className="form_label element-invisible">..</label>
              </Localized>
              <Localized id="newsletter-form-email-placeholder" attrs={{ placeholder: true, 'aria-label': true }}>
                <input aria-label="Enter your e-mail" aria-required="true" type="email" id="em-footer" name="em-footer" className="form_input" required placeholder="Enter your e-mail" />
              </Localized>

              <button type="submit" className="button button--gray button--inline newsletter__subscribe newsletter__subscribe--small newsletter__subscribe--with-icon" >
                <Localized id="newsletter-submit">
                  <span></span>
                </Localized>
                < Send size = {
                  15
                }
                className = "newsletter__subscribe-icon icon" / >
              </button>
            </div>
            <div id="newsletter_details_footer" className="newsletter__details">
              <SelectCountry id="newsletter-country-footer" className="newsletter__select"/>
              <SelectLanguage id="newsletter-language-footer" className="newsletter__select"/>
            </div>

            <div className="form_group text text--small newsletter__description">
              <Localized id="newsletter-language-description">
                <p></p>
              </Localized>
            </div>

            <div id="newsletter_privacy_footer" className="form_group newsletter__privacy-policy text text--small">
              <input type="checkbox" id="priv-footer" name="priv-footer" required />
              <Localized id="newsletter-privacy"
                privacyLink={<a target="_blank" rel="noopener noreferrer" href="https://www.mozilla.org/privacy/websites/"></a>}>
                <label htmlFor="priv-footer">..</label>
              </Localized>
            </div>
          </form>

          <div id="newsletter_thanks_footer" className="newsletter__text-wrapper newsletter__text-wrapper--thanks">
            <Localized id="newsletter-subscribed-title">
              <div className="footer-nav__title"></div>
            </Localized>
            <Localized id="newsletter-subscribed-text">
              <p className="text text--small color--white"></p>
            </Localized>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsletterFooterForm;
