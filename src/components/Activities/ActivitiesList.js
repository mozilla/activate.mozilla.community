import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Grid, Row } from 'react-bootstrap';

import ActivityTile from './ActivityTile.js';

import './ActivitiesList.css';

class ActivitiesList extends Component {
  render() {
    const locale = this.props.currentLocales[0];

    return (
      <section className="activities">
        <Localized id="activities">
          <h1>Activities</h1>
        </Localized>
        <section className="full-width">
          <Localized id="activate-description">
            <p className="lead">
            </p>
          </Localized>
        </section>
        <Grid>
          <Row className="activity-row">
            <ActivityTile
              titleImage="/images/nightly-header.png"
              titleKey="nightly-title"
              descriptionKey="nightly-description"
              tagKey="testing"
              durationKey="nightly-duration"
              linkTarget={`${locale}/nightly`}z
            ></ActivityTile>
            <ActivityTile
              titleImage="/images/techspeakers-header.png"
              titleKey="techspeakers-title"
              descriptionKey="techspeakers-description"
              tagKey="programming"
              durationKey="techspeakers-duration"
              linkTarget={`${locale}/techspeakers`}
            ></ActivityTile>
            <ActivityTile
              titleImage="/images/webextensions-header.png"
              titleKey="webextensions-title"
              descriptionKey="webextensions-description"
              tagKey="programming"
              durationKey="webextensions-duration"
              linkTarget={`${locale}/webextensions`}
            ></ActivityTile>
            <ActivityTile
              titleImage="/images/rust-header.png"
              titleKey="rust-title"
              descriptionKey="rust-description"
              tagKey="programming"
              durationKey="rust-duration"
              linkTarget={`${locale}/rust-hack`}
            ></ActivityTile>
            <ActivityTile
              titleImage="/images/webvr-header.png"
              titleKey="webvr-title"
              descriptionKey="webvr-description"
              tagKey="programming"
              durationKey="webvr-duration"
              linkTarget={`${locale}/webvr-camp`}
            ></ActivityTile>
            <ActivityTile
              titleImage="/images/webcompat-header.png"
              titleKey="webcompat-title"
              descriptionKey="webcompat-description"
              tagKey="testing"
              durationKey="webcompat-duration"
              linkTarget={`${locale}/webcompat-sprint`}
            ></ActivityTile>
          </Row>
        </Grid>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLocales: state.currentLocales,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesList);

