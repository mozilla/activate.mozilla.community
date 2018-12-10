import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import {
  Send
} from "react-feather";

import SelectCountry from './SelectCountry.js';
import SelectLanguage from './SelectLanguage.js';

class NewsletterFooterForm extends Component {

  componentDidMount() {

    /* This Source Code Form is subject to the terms of the Mozilla Public
     * License, v. 2.0. If a copy of the MPL was not distributed with this
     * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

    // From: https://raw.githubusercontent.com/mozilla/basket-example/master/basket-client.js
    // @see: https://github.com/mozilla/basket-example

    // !! this file assumes only one signup form per page !!
    const newsletterForm = document.getElementById('newsletter_footer_form');

    // handle errors
    let errorArray = [];
    let newsletterErrors = document.getElementById('newsletter_footer_errors');

    function newsletterError() {
      let errorList = document.createElement('ul');

      if(errorArray.length) {
        for (let i = 0; i < errorArray.length; i++) {
          let item = document.createElement('li');
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
    function newsletterThanks() {
      let thanks = document.getElementById('newsletter_thanks');
      let newsletterFormWrapper = document.getElementsByClassName('js-newsletter-form-wrapper');
      window.scrollTo({
        top: newsletterFormWrapper[0].offsetTop,
        behavior: "smooth"
      });
      // show thanks message
      thanks.style.display = 'block';
    }

    // XHR subscribe; handle errors; display thanks message on success.
    function newsletterSubscribe(evt) {
      let skipXHR = newsletterForm.getAttribute('data-skip-xhr');
      if (skipXHR) {
        return true;
      }

      evt.preventDefault();
      evt.stopPropagation();

      // new submission, clear old errors
      errorArray = [];
      newsletterErrors.style.display = 'none';
      while (newsletterErrors.firstChild) newsletterErrors.removeChild(newsletterErrors.firstChild);

      let fmt = document.getElementById('fmt-footer').value;
      let email = document.getElementById('email-footer').value;
      let newsletter = document.getElementById('newsletters-footer').value;
      let newsletterLanguage = document.getElementById('newsletter-language-footer').value;
      let newsletterCountry = document.getElementById('newsletter-country-footer').value;
      let privacy = document.querySelector('input[name="privacy-footer"]:checked') ? '&privacy=true' : '';

      let params = 'email=' + encodeURIComponent(email) +
        '&newsletters=' + newsletter +
        privacy +
        '&fmt=' + fmt +
        '&country=' + newsletterCountry +
        '&lang=' + newsletterLanguage +
        '&source_url=' + encodeURIComponent(document.location.href);

      // eslint-disable-next-line no-undef
      let xhr = new XMLHttpRequest();

      xhr.onload = function(r) {
        if (r.target.status >= 200 && r.target.status < 300) {
          // response is null if handled by service worker
          let response = r.target.response;
          if (response === null ) {
            newsletterError();
            return;
          }
          if (response.success === true) {
            newsletterForm.style.display = 'none';
            newsletterThanks();
          }
          else {
            if(response.errors) {
              for (let i = 0; i < response.errors.length; i++) {
                errorArray.push(response.errors[i]);
              }
            }

            newsletterError();
          }
        }
        else {
          newsletterError();
        }
      };

      xhr.onerror = function() {
        newsletterError();
      };

      let url = newsletterForm.getAttribute('action');

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
      xhr.timeout = 5000;
      xhr.ontimeout = newsletterError;
      xhr.responseType = 'json';
      xhr.send(params);

      return false;
    }

    newsletterForm.addEventListener('submit', newsletterSubscribe, false);
  }

  constructor(props)
  {
    super(props);
    this.state = {
      value: 'placeholder'
    };
  }

  render() {
    let classes = ['newsletter--footer', 'js-newsletter--footer'];
    const classString = classes.join(' ');

    return (
      <section className={classString}>
        <div className="newsletter__content">
          <form id="newsletter_footer_form" name="newsletter_footer__form" className="newsletter__form--footer" action="https://www.mozilla.org/en-US/newsletter/" method="post">
            <input type="hidden" id="fmt-footer" name="fmt-footer" value="H" />
            <input type="hidden" id="newsletters-footer" name="newsletters-footer" value="about-mozilla" />

            <div id="newsletter_footer_errors" className="newsletter__errors--footer" />

            <div id="newsletter_email_footer" className="form_group newsletter__email">
              <Localized id="newsletter-email">
                <label htmlFor="email-footer" className="form_label element-invisible">Email</label>
              </Localized>
              <Localized id="newsletter-form-email-placeholder" attrs={{placeholder: true}}>
                <input type="email" id="email-footer" name="email-footer" className="form_input" required placeholder="Enter your e-mail" />
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
              <SelectCountry id="newsletter-footer-country" className="newsletter__select"/>
              <SelectLanguage id="newsletter-footer-language" className="newsletter__select"/>
            </div>

            <div id="newsletter_privacy_footer" className="form_group newsletter__privacy-policy text text--small">
              <input type="checkbox" id="privacy-footer" name="privacy-footer" required />
              <Localized id="newsletter-privacy"
                         privacyLink={<a target="_blank" rel="noopener noreferrer" href="https://www.mozilla.org/privacy/websites/">Privacy Policy</a>}>
                <label htmlFor="privacy-footer">
                  I am okay with Mozilla handling my info as explained in this <a href="https://www.mozilla.org/privacy/websites/">Privacy Policy</a>.
                </label>
              </Localized>
            </div>
          </form>

          <div id="newsletter_thanks_footer" className="newsletter__text-wrapper newsletter__text-wrapper--thanks">
            <Localized id="newsletter-subscribed-title">
              <h2 className="title title--medium text--centered">Thanks!</h2>
            </Localized>
            <Localized id="newsletter-subscribed-text">
              <p className="text">
                If you haven’t previously confirmed a subscription to a Mozilla-related newsletter you may have to do so. Please check your inbox and spam filter for an email from us.
              </p>
            </Localized>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsletterFooterForm;