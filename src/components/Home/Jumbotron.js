import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <section className="flex-container">
          <Localized id="activate">
            <h1>Activate</h1>
          </Localized>
          <Localized id="activate-description">
            <p className="lead">
              The Activate Mozilla campaign aims at the grassroots of volunteer contributions. We want to bring more clarity on what are the most important areas to contribute to at Mozilla right now by providing guidance to mobilizers on how to recruit contributors and create community around meaningful Mozilla projects.
            </p>
          </Localized>
        </section>
      </div>
    );
  }
}

export default Jumbotron;
