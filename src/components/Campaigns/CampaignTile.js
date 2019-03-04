import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { Col } from 'react-bootstrap';


import './CampaignTile.css';

class CampaignTile extends Component {
  render() {
    const {
      titleImage,
      titleKey,
      descriptionKey,
      durationKey,
      linkTarget,
    } = this.props;

    const cardClassNames = [
      'campaign-card',
      'campaign-card--archive',
    ].join(' ');

    return (
      <Col lg={6} md={6} sm={6} xs={12} className="campaign-list__row-item">
        <article className={cardClassNames}>
        <div className="campaign-card__container">
            <div className="campaign-card__col campaign-card__col--small">
              <img className="campaign-card__image" src={ titleImage } alt="" />
            </div>
            <div className="campaign-card__col campaign-card__col--small">
              <h2 className="title title--large color--slate-grey campaign-card__title">
                <Localized id={titleKey}>
                  <a href={linkTarget}></a>
                </Localized>
              </h2>
              <div className="campaign-card__duration color--dark-grey-blue">
                <Localized id={durationKey}><span></span></Localized>
              </div>
            </div>
          </div>
          <div className="text campaign-card__text color--slate-grey">
            <Localized id={descriptionKey}>
              <p></p>
            </Localized>
          </div>
        </article>
      </Col>

    );
  }
}

export default CampaignTile;
