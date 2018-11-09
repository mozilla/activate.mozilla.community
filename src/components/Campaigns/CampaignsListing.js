import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Grid, Row } from 'react-bootstrap';

import CampaignTile from './CampaignTile.js';

import './CampaignsListing.css';

class CampaignsListing extends Component {
  render() {
    const locale = this.props.currentLocales[0];

    return (
      <section className="campaigns">
        <Localized id="campaigns">
          <h1>Campaigns</h1>
        </Localized>
        <section className="full-width">
          <Localized id="campaign-activate-description">
            <p className="lead">
            </p>
          </Localized>
        </section>
        <Grid>
          <Row className="campaign-row">
            <CampaignTile
              titleImage="/images/nightly-header.png"
              titleKey="nightly-title"
              descriptionKey="nightly-description"
              tagKey="testing"
              durationKey="nightly-duration"
              linkTarget={`${locale}/nightly`}
            ></CampaignTile>
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

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsListing);

