import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './CampaignTile.css';

class CampaignTileCurrent extends Component {
  render() {
    const {
      titleImage,
      titleKey,
      durationKey,
      buttonKey,
      linkTarget,
    } = this.props;

    const cardClassNames = [
      'campaign-card',
      'campaign-card--active',
      'campaign-card__container',
      'content-contained'
    ].join(' ');

    return (
      <article className={cardClassNames}>
        <div className="campaign-card__col">
          <img src={ titleImage } alt="" />
        </div>
        <div className="campaign-card__col campaign-card__spaced-content">
          <Localized id={titleKey}>
            <h2 className="title title--extra-large color--slate-grey campaign-card__title">Tile Title</h2>
          </Localized>
          <div className="campaign-card__duration color--dark-grey-blue">
            <Localized id={durationKey}><span></span></Localized>
          </div>
          <Localized id={buttonKey}>
            <a href={linkTarget} className="button campaign-card__button">Learn more...</a>
          </Localized>
        </div>
      </article>
    );
  }
}

export default CampaignTileCurrent;
