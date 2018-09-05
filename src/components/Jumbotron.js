import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <section className="flex-container">
          <Localized id="ongoing-campaign">
            <h1>Become a Dark Funnel Detective!</h1>
          </Localized>
          <Localized id="ongoing-campaign-description">
            <p className="lead">
              Shed light on the Dark Funnel by searching for and reporting websites that have unauthorized download buttons as part of the Dark Funnel Campaign!
            </p>
          </Localized>
          <Localized id="ongoing-campaign-learn-more" attrs={{href: true}}>
            <a href="https://events.mozilla.org/darkfunnelEN" className="button button-white">Learn more...</a>
          </Localized>
        </section>
      </div>
    );
  }
}

export default Jumbotron;
