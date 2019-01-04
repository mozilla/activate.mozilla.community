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
          <p className="text text--centered">The page you are looking for could not be found. It may have been removed in the meantime or the URL might be wrong.</p>
        </Localized>
      </section>
    );
  }
}

export default NotFound;
