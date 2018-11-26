import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './NewsletterForm.css';

class NewsletterForm extends Component {
  componentDidMount() {
    /* This Source Code Form is subject to the terms of the Mozilla Public
    * License, v. 2.0. If a copy of the MPL was not distributed with this
    * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

    // From: https://raw.githubusercontent.com/mozilla/basket-example/master/basket-client.js
    // @see: https://github.com/mozilla/basket-example
    // !! this file assumes only one signup form per page !!
    var newsletterForm = document.getElementById('newsletter_form');

    // handle errors
    var errorArray = [];
    var newsletterErrors = document.getElementById('newsletter_errors');

    function newsletterError() {
      var errorList = document.createElement('ul');

      if(errorArray.length) {
        for (var i = 0; i < errorArray.length; i++) {
          var item = document.createElement('li');
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

    // Hide newsletter header
    function newsletterHeader() {
      var header = document.getElementsByClassName('js-newsletter-header');
      // Hide newsletter header.
      header[0].style.display = 'none';
    }

    // show sucess message
    function newsletterThanks() {
      var thanks = document.getElementById('newsletter_thanks');
      var newsletterForm = document.getElementsByClassName('js-newsletter');
      window.scrollTo({
        top: newsletterForm[0].offsetTop,
        behavior: "smooth"
      })
      // show thanks message
      thanks.style.display = 'block';
    }

    // XHR subscribe; handle errors; display thanks message on success.
    function newsletterSubscribe(evt) {
      var skipXHR = newsletterForm.getAttribute('data-skip-xhr');
      if (skipXHR) {
        return true;
      }

      evt.preventDefault();
      evt.stopPropagation();

      // new submission, clear old errors
      errorArray = [];
      newsletterErrors.style.display = 'none';
      while (newsletterErrors.firstChild) newsletterErrors.removeChild(newsletterErrors.firstChild);

      var fmt = document.getElementById('fmt').value;
      var email = document.getElementById('email').value;
      var newsletter = document.getElementById('newsletters').value;
      var privacy = document.querySelector('input[name="privacy"]:checked') ? '&privacy=true' : '';
      var params = 'email=' + encodeURIComponent(email) +
        '&newsletters=' + newsletter +
        privacy +
        '&fmt=' + fmt +
        '&source_url=' + encodeURIComponent(document.location.href);

      var xhr = new XMLHttpRequest();

      xhr.onload = function(r) {
        if (r.target.status >= 200 && r.target.status < 300) {
          // response is null if handled by service worker
          var response = r.target.response;
          if (response === null ) {
            newsletterError();
            return;
          }
          if (response.success === true) {
            newsletterForm.style.display = 'none';
            newsletterHeader();
            newsletterThanks();
          }
          else {
            if(response.errors) {
              for (var i = 0; i < response.errors.length; i++) {
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

      var url = newsletterForm.getAttribute('action');

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

  render() {
    return (
      <section className="newsletter js-newsletter">
        <div className="newsletter__content content-contained">
          <div className="newsletter__header js-newsletter-header">
            <Localized id="newsletter-title">
              <h1 className="title text--centered">Keep up to date</h1>
            </Localized>

            <Localized id="newsletter-description-subscribe">
              <p className="text text--large text--centered">Stay in the loop by subscribing to
                the campaigners’ mailing list</p>
            </Localized>
          </div>
          <form id="newsletter_form" name="newsletter__form" action="https://www.mozilla.org/en-US/newsletter/" method="post">
            <input type="hidden" id="fmt" name="fmt" value="H" />
            <input type="hidden" id="newsletters" name="newsletters" value="about-mozilla" />

            <div id="newsletter_errors" className="newsletter__errors" />

            <div id="newsletter_email" className="form_group newsletter__email content-contained content-contained--small">
              <Localized id="newsletter-email">
                <label htmlFor="email" className="form_label element-invisible">Email</label>
              </Localized>
              <Localized id="newsletter-form-email-placeholder" attrs={{placeholder: true}}>
                <input type="email" id="email" name="email" className="form_input" required placeholder="Enter your e-mail" />
              </Localized>

              <button type="submit" className="button button--inline newsletter__subscribe" >
                <Localized id="newsletter-submit">
                  <span></span>
                </Localized>
                <img src="/icons/icon-subscribe.svg" alt="" className="newsletter__subscribe-icon" />
              </button>
            </div>

            <div id="newsletter_privacy" className="form_group newsletter__privacy-policy">
              <input type="checkbox" id="privacy" name="privacy" required />
              <Localized id="newsletter-privacy"
                privacyLink={<a target="_blank" rel="noopener noreferrer" href="https://www.mozilla.org/privacy/websites/">Privacy Policy</a>}>
                <label htmlFor="privacy">
                    I'm okay with Mozilla handling my info as explained in this <a href="https://www.mozilla.org/privacy/websites/">Privacy Policy</a>.
                </label>
              </Localized>
            </div>
          </form>

          <div id="newsletter_thanks" className="newsletter__thanks">
            <Localized id="newsletter-subscribed-title">
              <h2 className="title text--centered">Thanks!</h2>
            </Localized>
            <Localized id="newsletter-subscribed-text">
              <p className="text text--large text--centered">
                If you haven’t previously confirmed a subscription to a Mozilla-related newsletter you may have to do so. Please check your inbox and spam filter for an email from us.
              </p>
            </Localized>
          </div>
        </div>
      </section>
    );
  }
}

export default NewsletterForm;
