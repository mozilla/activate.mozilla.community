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
      tagKey,
    ].join(' ');

    return (
      <Col lg={4} md={4} sm={12} xs={12} className={cardClassNames}>
        <Link to={`/${linkTarget}`}>
          <header className="item-header">
            <img src={ titleImage } alt="" />
          </header>

          {/* TODO: add link once activity detail is done */}
          <Localized id={titleKey}>
            <h2>Tile Title</h2>
          </Localized>

          <div className="item-content">
            <Localized id={descriptionKey}>
              <p></p>
            </Localized>
          </div>
          <footer>
            <Localized id={tagKey}>
              <div className="tags">Testing</div>
            </Localized>
            <div className="duration">
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
