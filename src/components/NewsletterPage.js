import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsletterForm from './NewsletterForm.js';

import './NewsletterPage.css';

class NewsletterPage extends Component {

  componentDidMount = () => {
    document.body.classList.add('is-header-no-bg');
  };

  componentWillUnmount = () => {
    document.body.classList.remove('is-header-no-bg');
  };

  render() {
    return (
      <div className="newsletter-page">
        <div className="container newsletter-page__inner">
          <div className="content-contained">
            <div className="newsletter-page__newsletter-form-wrapper">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCampaign: state.campaign.active,
});

export default connect(mapStateToProps)(NewsletterPage);
