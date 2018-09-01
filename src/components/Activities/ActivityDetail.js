import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { Col } from 'react-bootstrap';

import './ActivityDetail.css';

class ActivityDetail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      titleKey,
      titleImage,
      durationKey,
      children,
    } = this.props;

    return (
      <article class="activity-page">
        <header class="post-header row">
          <Col lg={3} md={3} sm={3} xs={12} className="content-center">
            <header class="post-header-image">
              <img src={titleImage} alt="" />
            </header>
          </Col>
          <Col lg={9} md={9} sm={9} xs={12}>
            <Localized id={titleKey}>
              <h1 className="post-title"></h1>
            </Localized>

            <Localized id={durationKey}>
              <h3></h3>
            </Localized>
          </Col>
        </header>

        <div class="post-content">
          {children}
        </div>

      </article>
    );
  }
}

export default ActivityDetail;
