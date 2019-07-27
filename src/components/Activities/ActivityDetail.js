import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { Col, Row, Grid } from 'react-bootstrap';
import { Sidebar } from './../Sidebar.js';

import './ActivityDetail.css';

class ActivityDetail extends Component {
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render () {
    const {
      titleKey,
      titleImage,
      durationKey,
      tagKey,
      sidebarContent,
      mainContentTop,
      mainContentToggleItems,
    } = this.props;

    const cardClassNames = [
      'activity-page',
      'activity--' + tagKey,
      'container',
    ].join(' ');

    return (
      <article className={cardClassNames}>
        <Grid>

          <Row className="show-grid">

            <Col lg={8} md={8} sm={12} xs={12} mdPush={4}>
              <Localized id={titleKey}>
                <h1 className="title title--extra-extra-large activity-page__title"></h1>
              </Localized>
              <div className="activity-page__content-top">
                {mainContentTop}
              </div>

              {mainContentToggleItems}

            </Col>

            <Col lg={4} md={4} sm={12} xs={12} mdPull={8} className="activity-page__sidebar">
              <Sidebar imgSrc={titleImage} tagKey={tagKey} durationKey={durationKey}>
                {sidebarContent}
              </Sidebar>
            </Col>
          </Row>
        </Grid>

      </article>
    );
  }
}

export default ActivityDetail;
