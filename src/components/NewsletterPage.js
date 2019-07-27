import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { Localized } from 'fluent-react/compat';

import NewsletterForm from './NewsletterForm.js';

import './NewsletterPage.css';

class NewsletterPage extends Component {
  componentDidMount = () => {
    document.body.classList.add('is-header-no-bg');
  };

  componentWillUnmount = () => {
    document.body.classList.remove('is-header-no-bg');
  };

  render () {
    return (
      <Localized id="newsletter-document-title" attrs={{ title: true }}>
        <DocumentTitle>
          <div className="newsletter-page">
            <div className="container newsletter-page__inner">
              <div className="content-contained">
                <div className="row">
                  <div className="newsletter-page__newsletter-form-wrapper">
                    <NewsletterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DocumentTitle>
      </Localized>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCampaign: state.campaign.active,
});

export default connect(mapStateToProps)(NewsletterPage);
