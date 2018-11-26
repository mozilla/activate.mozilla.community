import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Grid, Row } from 'react-bootstrap';

import CampaignTile from './CampaignTile.js';
// eslint-disable-next-line
import CampaignTileCurrent from './CampaignTileCurrent.js';

import './CampaignsListing.css';

class CampaignsListing extends Component {

  render() {
    const locale = this.props.currentLocales[0];

    return (
      <React.Fragment>
        <section className="campaign">
          <Localized id="campaign-active">
            <h1 className="title text--centered">Campaigns</h1>
          </Localized>
          <div className="content-contained content-contained--small">
            <Localized id="campaign-active-description">
              <p className="text text--lead text--centered">Lorem ipsum dolor sit
amet campaign</p>
            </Localized>
          </div>
          <CampaignTileCurrent
            titleImage="/images/c1.png"
            titleKey="nightly-title"
            descriptionKey="nightly-description"
            durationKey="nightly-duration"
            linkTarget="https://events.mozilla.org/darkfunnelen"
          ></CampaignTileCurrent>
        </section>
        <section className="campaign-list">
          <Localized id="campaign-archive">
            <h1 className="title title--extra-extra-large text--centered">Previous campaigns</h1>
          </Localized>
          <div className="content-contained content-contained--small">
            <Localized id="campaign-archive-description">
              <p className="text text--lead text--centered">Past, but not forgotten!</p>
            </Localized>
          </div>
        <Grid>
          <Row className="campaign-list__row">
            <CampaignTile
              titleImage="/images/c1.png"
              titleKey="nightly-title"
              descriptionKey="nightly-description"
              durationKey="nightly-duration"
              linkTarget={`${locale}/nightly`}
            ></CampaignTile>
            <CampaignTile
              titleImage="/images/techspeakers-header.png"
              titleKey="techspeakers-title"
              descriptionKey="techspeakers-description"
              tagKey="programming"
              durationKey="techspeakers-duration"
              linkTarget={`${locale}/techspeakers`}
            ></CampaignTile>
          </Row>
        </Grid>
      </section>
    </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLocales: state.language.currentLocales,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsListing);
