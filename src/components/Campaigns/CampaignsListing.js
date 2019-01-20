import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { Localized } from 'fluent-react/compat';
import { Grid, Row } from 'react-bootstrap';

import CampaignTile from './CampaignTile.js';
import CampaignTileCurrent from './CampaignTileCurrent.js';

import './CampaignsListing.css';

class CampaignsListing extends Component {

  render() {

    let activeCampaign = <div></div>;
    if (this.props.activeCampaign) {

      const campaign = {...this.props.activeCampaign};

      activeCampaign =  (<section className="campaign">
        <Localized id="campaign-active">
          <h1 className="title text--centered">Current campaign</h1>
        </Localized>
        <CampaignTileCurrent
          titleImage={campaign.titleImage}
          titleKey={campaign.titleKey}
          descriptionKey={campaign.descriptionKey}
          durationKey={campaign.durationKey}
          buttonKey = {campaign.buttonKey}
          linkTarget={campaign.linkTarget}
        />
      </section>
      )
    }

    return (
      <Localized id="campaigns-document-title" attrs={{title: true}}>
      <DocumentTitle>
      <React.Fragment>
        {activeCampaign}
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
              titleImage="/images/dark-funnel.jpg"
              titleKey="current-campaign"
              descriptionKey="current-campaign-description"
              durationKey="current-campaign-duration"
              linkTarget="https://events.mozilla.org/darkfunnelEN"
            ></CampaignTile>
          </Row>
        </Grid>
      </section>
    </React.Fragment>
    </DocumentTitle>
    </Localized>
    );
  }
}

const mapStateToProps = (state) => ({
  currentLocales: state.language.currentLocales,
  activeCampaign: state.campaign.active,
});

export default connect(mapStateToProps)(CampaignsListing);
