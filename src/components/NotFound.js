import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <section className="not-found content-contained">
        <Localized id="not-found-title">
          <h1 className="title text--centered">404 - Page not found!</h1>
        </Localized>
        <Localized id="not-found-description">
          <p className="text text--centered"></p>
        </Localized>
      </section>
    );
  }
}

export default NotFound;
