import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { Col, Row, Grid } from 'react-bootstrap';

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
      tagKey,
      sidebarContent,
      mainContent,
    } = this.props;

    return (
      <article className="activity-page container">
        <Grid>

          <Row className="show-grid">

            <Col lg={8} md={8} sm={12} xs={12} mdPush={4}>
              <Localized id={titleKey}>
                <h1 className="title title--extra-extra-large activity-page__title">Activity Title</h1>
              </Localized>

              {mainContent}
            </Col>

            <Col lg={4} md={4} sm={12} xs={12} mdPull={8} className="activity-page__sidebar">
              <div className="activity-page__sidebar-content">
                <div className="activity-page__image">
                  <img src={titleImage} alt="" />
                </div>

                <Localized id={tagKey}>
                  <span>Tag</span>
                </Localized>
                <Localized id={durationKey}>
                  <h3>Activity Duration</h3>
                </Localized>

                {sidebarContent}
              </div>
            </Col>
          </Row>
        </Grid>

      </article>
    );
  }
}

export default ActivityDetail;
