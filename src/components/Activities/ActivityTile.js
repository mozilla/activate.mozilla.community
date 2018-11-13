import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      durationKey,
      linkTarget,
    } = this.props;

    const cardClassNames = [
      'activity-card',
      'activity-card--' + tagKey,
      tagKey,
    ].join(' ');

    return (
      <Col lg={4} md={4} sm={12} xs={12} className={cardClassNames}>
        <Link to={`/${linkTarget}`}>
          <header className="activity-card__header">
            <img src={ titleImage } alt="" />
          </header>

          {/* TODO: add link once activity detail is done */}
          <Localized id={titleKey}>
            <h2 className="activity-card__title title title--medium">Tile Title</h2>
          </Localized>
          <div className="activity-card__content">
            <Localized id={descriptionKey}>
              <p></p>
            </Localized>
          </div>
          <footer>
            <Localized id={tagKey}>
              <div className="activity-card__tags">Testing</div>
            </Localized>
            <div className="activity-card__duration">
              <Localized id={durationKey}>
                <span></span>
              </Localized>
            </div>
          </footer>
        </Link>
      </Col>
    );
  }
}

export default ActivityTile;
