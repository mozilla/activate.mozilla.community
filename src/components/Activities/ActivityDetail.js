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
      <article className="activity-page">
        <header className="post-header row">
          <Col lg={3} md={3} sm={3} xs={12} className="content-center">
            <header className="post-header-image">
              <img src={titleImage} alt="" />
            </header>
          </Col>
          <Col lg={9} md={9} sm={9} xs={12}>
            <Localized id={titleKey}>
              <h1 className="post-title">Activity Title</h1>
            </Localized>

            <Localized id={durationKey}>
              <h3>Activity Duration</h3>
            </Localized>
          </Col>
        </header>

        <div className="post-content">
          {children}
        </div>

      </article>
    );
  }
}

export default ActivityDetail;
