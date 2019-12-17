import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './CampaignTile.css';

class CampaignTileCurrent extends Component {
  render () {
    const {
      titleImage,
      titleKey,
      durationKey,
      descriptionKey,
      buttonKey,
      linkTarget,
      isTop,
      credit,
      creditUrl,
    } = this.props;

    const cardClassNames = [
      'campaign-card',
      'campaign-card--active',
      'campaign-card__container',
      (isTop ? 'section--pull-up' : 'spacing-top'),
    ].join(' ');

    return (
      <div className="content-contained">
        <article className={cardClassNames}>
          <div className="campaign-card__col">
            <a href={linkTarget}>
              <img src={ titleImage } alt="" />
            </a>
            <a href={creditUrl} className="campaign-card__credit">{credit}</a>
          </div>
          <div className="campaign-card__col campaign-card__spaced-content">
            <Localized id={titleKey}>
              <h2 className="title title--extra-large color--slate-grey campaign-card__title"></h2>
            </Localized>
            <div className="campaign-card__duration color--dark-grey-blue">
              <Localized id={durationKey}><span></span></Localized>
            </div>
            <Localized id={descriptionKey}>
              <p className="text campaign-card__text color--slate-grey"></p>
            </Localized>
            <Localized id={buttonKey}>
              <a href={linkTarget} className="button campaign-card__button"></a>
            </Localized>
          </div>
        </article>
      </div>
    );
  }
}

export default CampaignTileCurrent;
