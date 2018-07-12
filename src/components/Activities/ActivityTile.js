import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { Col } from 'react-bootstrap';


import './ActivityTile.css';

class ActivityTile extends Component {
  render() {
    const {
      titleImage,
      titleKey,
      descriptionKey,
      tagKey,
      durationInHours,
    } = this.props;

    const cardClassNames = [
      'activity-card',
      tagKey,
    ].join(' ');

    return (
      <Col lg={4} md={4} sm={12} xs={12} className={cardClassNames}>
        <header className="item-header">
          <img src={ titleImage } alt="" />
        </header>

        {/* TODO: add link once activity detail is done */}
        <Localized id={titleKey}>
          <h2></h2>
        </Localized>

        <div className="item-content">
          <Localized id={descriptionKey}>
            <p></p>
          </Localized>
          {/* TODO: add link once activity detail is done */}
          <Localized id="learn-more">
            <p>Find out more</p>
          </Localized>
        </div>
        <footer>
          <Localized id={tagKey}>
            <div className="tags">Testing</div>
          </Localized>
          <div className="duration">
            <span>{durationInHours}&nbsp;</span>
            <Localized id="hours">
              <span>hours</span>
            </Localized>
          </div>
        </footer>
      </Col>
    );
  }
}

export default ActivityTile;
