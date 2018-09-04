import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <section className="flex-container">
          <Localized id="ongoing-campaign">
            <h1>XXX Campaign ongoing!</h1>
          </Localized>
          <Localized id="ongoing-campaign-description">
            <p className="lead">
            </p>
          </Localized>
          <Localized id="ongoing-campaign-learn-more" attrs={{href: true}}>
            <a href="//mozilla.org" className="button button-white">Learn more</a>
          </Localized>
        </section>
      </div>
    );
  }
}

export default Jumbotron;
