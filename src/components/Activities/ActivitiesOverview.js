import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Grid, Row } from 'react-bootstrap';

import ActivityTileShort from './ActivityTileShort.js';

import './ActivitiesList.css';

class ActivitiesOverview extends Component {
  render() {
    const locale = this.props.currentLocales[0];

    return (
      <section className="container activities">
        <Localized id="activities-homepage-title">
          <h1 className="title text--centered">Activities galore!</h1>
        </Localized>
        <div className="content-contained content-contained--small">
          <Localized id="activities-homepage-description">
            <p className="text text--lead text--centered">While we’re coming up with our next campaign, hone your contribution skills with our activities — they are quite snazzy!</p>
          </Localized>
        </div>
        <div className="activities__listing">
          <Grid>
            <Row className="activity-row">
              <ActivityTileShort
                titleImage="/images/nightly-header.png"
                titleKey="nightly-title"
                tagKey="testing"
                durationKey="nightly-duration"
                linkTarget={`${locale}/nightly`}
              ></ActivityTileShort>
              <ActivityTileShort
                titleImage="/images/techspeakers-header.png"
                titleKey="techspeakers-title"
                tagKey="programming"
                durationKey="techspeakers-duration"
                linkTarget={`${locale}/techspeakers`}
              ></ActivityTileShort>
              <ActivityTileShort
                titleImage="/images/webextensions-header.png"
                titleKey="webextensions-title"
                tagKey="programming"
                durationKey="webextensions-duration"
                linkTarget={`${locale}/webextensions`}
              ></ActivityTileShort>
              <ActivityTileShort
                titleImage="/images/rust-header.png"
                titleKey="rust-title"
                tagKey="programming"
                durationKey="rust-duration"
                linkTarget={`${locale}/rust-hack`}
              ></ActivityTileShort>
              <ActivityTileShort
                titleImage="/images/webvr-header.png"
                titleKey="webvr-title"
                tagKey="programming"
                durationKey="webvr-duration"
                linkTarget={`${locale}/webvr-camp`}
              ></ActivityTileShort>
              <ActivityTileShort
                titleImage="/images/webcompat-header.png"
                titleKey="webcompat-title"
                tagKey="testing"
                durationKey="webcompat-duration"
                linkTarget={`${locale}/webcompat-sprint`}
              ></ActivityTileShort>
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
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesOverview);
