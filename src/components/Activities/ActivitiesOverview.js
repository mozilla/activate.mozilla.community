import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Grid, Row } from 'react-bootstrap';

import ActivityTileShort from './ActivityTileShort.js';

import './ActivitiesList.css';

class ActivitiesOverview extends Component {
  render () {
    const locale = this.props.currentLocales[0];

    return (
      <section className="container activities">
        <Localized id="activities-homepage-title">
          <h1 className="title text--centered"></h1>
        </Localized>
        <div className="content-contained content-contained--small">
          <Localized id="activities-homepage-description">
            <p className="text text--lead text--centered"></p>
          </Localized>
        </div>
        <div className="activities__listing">
          <Grid>
            <Row className="activity-row">
              <ActivityTileShort
                titleImage="/images/commonvoice-header.png"
                titleKey="commonvoice-title"
                tagKey="contribution"
                durationKey="commonvoice-duration"
                linkTarget={`/${locale}/commonvoice`}
              />
              <ActivityTileShort
                titleImage="/images/nightly-header.png"
                titleKey="nightly-title"
                tagKey="testing"
                durationKey="nightly-duration"
                linkTarget={`/${locale}/nightly`}
              />
              <ActivityTileShort
                titleImage="/images/webextensions-header.png"
                titleKey="webext-title"
                tagKey="programming"
                durationKey="webext-duration"
                linkTarget={`/${locale}/webextensions`}
              />
              <ActivityTileShort
                titleImage="/images/rust-header.png"
                titleKey="rust-title"
                tagKey="programming"
                durationKey="rust-duration"
                linkTarget={`/${locale}/rust-hack`}
              />
              <ActivityTileShort
                titleImage="/images/webvr-header.png"
                titleKey="webvr-title"
                tagKey="programming"
                durationKey="webvr-duration"
                linkTarget={`/${locale}/webvr-camp`}
              />
              <ActivityTileShort
                titleImage="/images/webcompat-header.png"
                titleKey="webcompat-title"
                tagKey="testing"
                durationKey="webcompat-duration"
                linkTarget={`/${locale}/webcompat-sprint`}
              />
              <ActivityTileShort
                titleImage="/images/coding-header.png"
                titleKey="coding-title"
                tagKey="programming"
                durationKey="coding-duration"
                linkTarget="https://developer.mozilla.org/docs/Mozilla/Developer_guide/Introduction"
              />
            </Row>
          </Grid>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLocales: state.language.currentLocales,
});

export default connect(mapStateToProps)(ActivitiesOverview);
