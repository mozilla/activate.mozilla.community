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
            durationInHours="1-3"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/techspeakers-header.png"
            titleKey="techspeakers-title"
            descriptionKey="techspeakers-description"
            tagKey="programming"
            durationInHours="1-2"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/webextensions-header.png"
            titleKey="webextensions-title"
            descriptionKey="webextensions-description"
            tagKey="programming"
            durationInHours="1-3"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/rust-header.png"
            titleKey="rust-title"
            descriptionKey="rust-description"
            tagKey="programming"
            durationInHours="2-3"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/webvr-header.png"
            titleKey="webvr-title"
            descriptionKey="webvr-description"
            tagKey="programming"
            durationInHours="3-4"
          ></ActivityTile>
          <ActivityTile
            titleImage="/images/webcompat-header.png"
            titleKey="webcompat-title"
            descriptionKey="webcompat-description"
            tagKey="testing"
            durationInHours="2-3"
          ></ActivityTile>
        </Row>
      </Grid>
    );
  }
}

export default ActivitiesOverview;
