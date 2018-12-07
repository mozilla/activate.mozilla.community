import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Localized } from "fluent-react/compat";
import { Col } from "react-bootstrap";
import {
  Watch, Tag
} from "react-feather";

import "./ActivityTile.css";

class ActivityTile extends Component {
  render() {
    const {
      titleImage,
      titleKey,
      descriptionKey,
      tagKey,
      durationKey,
      linkTarget
    } = this.props;

    const cardClassNames = [
      "activity-card",
      "activity-card--" + tagKey,
      tagKey
    ].join(" ");

    return (
      <Col lg={4} md={4} sm={12} xs={12} className={cardClassNames}>
        <Link to={`/${linkTarget}`}>
          <header className="activity-card__header">
            <img src={titleImage} alt="" />
          </header>

          {/* TODO: add link once activity detail is done */}
          <Localized id={titleKey}>
            <h2 className="activity-card__title title title--medium">
              Tile Title
            </h2>
          </Localized>
          <div className="activity-card__content text">
            <Localized id={descriptionKey}>
              <p />
            </Localized>
          </div>
          <footer className="activity-card__footer">
            <div className="activity-card__tags">
              <Tag size = {
                18
              }
              className = "activity-card__icon icon" />
              <Localized id={tagKey}>
                <span />
              </Localized>
            </div>
            <div className="activity-card__duration">
              < Watch size = {
                18
              }
              className = "activity-card__icon icon" / >
              <Localized id={durationKey}>
                <span />
              </Localized>
            </div>
          </footer>
        </Link>
      </Col>
    );
  }
}

export default ActivityTile;
