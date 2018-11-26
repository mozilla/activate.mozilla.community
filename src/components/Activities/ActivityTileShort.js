import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Localized } from 'fluent-react/compat';
import { Col } from 'react-bootstrap';

import './ActivityTile.css';

class ActivityTileShort extends Component {
  render() {
    const {
      titleImage,
      titleKey,
      tagKey,
      durationKey,
      linkTarget,
    } = this.props;

    const cardClassNames = [
      'activity-card',
      'activity-card--short',
      'activity-card--' + tagKey,
      tagKey,
    ].join(' ');

    return (
      <Col lg={4} md={4} sm={12} xs={12} className={cardClassNames}>
        <Link to={`/${linkTarget}`}>
          <header className="activity-card__item-header">
            <img src={ titleImage } alt="" />
          </header>

          {/* TODO: add link once activity detail is done */}
          <Localized id={titleKey}>
            <h2 className="activity-card__title title title--medium">Tile Title</h2>
          </Localized>
          <footer>
            <div className="activity-card__tags">
              <svg className="activity-card__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="activity-card__tags-icon" d="M20.243 11.558l-7.307-7.3a.964.964 0 0 0-.269-.198.787.787 0 0 0-.329-.06H3.836c-.252 0-.454.076-.607.229C3.076 4.38 3 4.59 3 4.855v8.473c0 .133.02.245.06.338.04.093.1.18.179.259l7.307 7.3c.266.251.558.444.877.576a2.284 2.284 0 0 0 1.872 0c.291-.132.57-.325.836-.577l6.112-6.106c.505-.504.757-1.097.757-1.78s-.252-1.276-.757-1.78zm-1.194 2.367l-6.113 6.106a.821.821 0 0 1-1.195 0l-7.049-7.04v-7.3H12l7.049 7.04a.82.82 0 0 1 .259.597.82.82 0 0 1-.26.597zM7.5 8.495a.963.963 0 0 0-.2.269.784.784 0 0 0-.059.328c0 .132.02.242.06.328.04.086.106.176.199.268.08.08.166.143.259.19.093.046.206.069.338.069.12 0 .226-.023.319-.07a1.38 1.38 0 0 0 .279-.189c.08-.092.14-.182.179-.268a.784.784 0 0 0 .06-.328.784.784 0 0 0-.06-.328 1.18 1.18 0 0 0-.18-.269.821.821 0 0 0-1.194 0z" fill="#4422A3" fillRule="evenodd"/>
              </svg>
              <Localized id={tagKey}>
                <span></span>
              </Localized>
            </div>
            <div className="activity-card__duration">
              <svg className="activity-card__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="activity-card__duration-icon" d="M19 12c0-.95-.184-1.836-.553-2.656a7.441 7.441 0 0 0-1.468-2.168l-.247-2.91a2.748 2.748 0 0 0-.8-1.602C15.485 2.221 14.94 2 14.291 2h-3.584c-.61 0-1.147.221-1.61.664a2.68 2.68 0 0 0-.83 1.602l-.247 2.91a6.605 6.605 0 0 0-1.468 2.138A6.61 6.61 0 0 0 6 12c0 .964.184 1.865.553 2.705.368.84.858 1.553 1.468 2.139l.247 2.91c.09.625.366 1.156.83 1.592.463.436 1 .654 1.61.654h3.508c.648 0 1.194-.218 1.639-.654.445-.436.711-.967.8-1.592l.23-2.832a6.79 6.79 0 0 0 1.553-2.207A6.628 6.628 0 0 0 19 12zM9.889 4.422c0-.208.085-.384.257-.527a.859.859 0 0 1 .562-.215h3.584c.203 0 .39.071.562.215a.662.662 0 0 1 .257.527l.153 1.504c-.445-.17-.896-.31-1.353-.42A5.977 5.977 0 0 0 12.5 5.34c-.483 0-.95.055-1.401.166-.451.11-.88.25-1.287.42l.077-1.504zM7.62 12c0-.677.127-1.322.381-1.934A4.915 4.915 0 0 1 9.05 8.475c.445-.45.966-.804 1.563-1.065A4.398 4.398 0 0 1 12.5 7c.674 0 1.303.137 1.887.41.597.26 1.118.615 1.563 1.065.445.449.794.98 1.049 1.591.254.612.38 1.257.38 1.934 0 .69-.126 1.341-.38 1.953a5.089 5.089 0 0 1-1.049 1.582 4.894 4.894 0 0 1-1.563 1.074c-.584.26-1.213.391-1.887.391-.674 0-1.303-.13-1.887-.39a4.894 4.894 0 0 1-1.563-1.075A5.089 5.089 0 0 1 8 13.953 5.041 5.041 0 0 1 7.621 12zm7.491 7.598a.662.662 0 0 1-.257.527.859.859 0 0 1-.562.215h-3.584a.723.723 0 0 1-.524-.215 1.08 1.08 0 0 1-.295-.527l-.153-1.504c.407.208.832.358 1.277.449.445.091.915.137 1.41.137.484 0 .95-.056 1.402-.166.45-.111.88-.251 1.286-.42v1.504zm-1.963-5.762a.784.784 0 0 0 .296.195c.108.04.2.059.276.059.076 0 .168-.02.276-.059a.784.784 0 0 0 .296-.195.814.814 0 0 0 0-1.172l-.972-.996V9.5c0-.247-.077-.446-.23-.596a.808.808 0 0 0-.59-.224.808.808 0 0 0-.59.224c-.153.15-.23.349-.23.596V12c0 .13.023.24.067.332a.976.976 0 0 0 .181.254l1.22 1.25z" fill="#4422A3" fillRule="evenodd"/>
              </svg>
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

export default ActivityTileShort;
