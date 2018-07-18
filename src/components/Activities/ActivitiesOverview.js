import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import ActivityTile from './ActivityTile.js';

import './ActivitiesOverview.css';

class ActivitiesOverview extends Component {
  render() {
    return (
      <Grid>
        <Row className="activity-row">
          <ActivityTile
            titleImage="/images/nightly-header.png"
            titleKey="nightly-title"
            descriptionKey="nightly-description"
            tagKey="testing"
            durationKey="nightly-duration"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/techspeakers-header.png"
            titleKey="techspeakers-title"
            descriptionKey="techspeakers-description"
            tagKey="programming"
            durationKey="techspeakers-duration"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/webextensions-header.png"
            titleKey="webextensions-title"
            descriptionKey="webextensions-description"
            tagKey="programming"
            durationKey="webextensions-duration"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/rust-header.png"
            titleKey="rust-title"
            descriptionKey="rust-description"
            tagKey="programming"
            durationKey="rust-duration"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/webvr-header.png"
            titleKey="webvr-title"
            descriptionKey="webvr-description"
            tagKey="programming"
            durationKey="webvr-duration"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/webcompat-header.png"
            titleKey="webcompat-title"
            descriptionKey="webcompat-description"
            tagKey="testing"
            durationKey="webcompat-duration"
          ></ActivityTile>
        </Row>
      </Grid>
    );
  }
}

export default ActivitiesOverview;
