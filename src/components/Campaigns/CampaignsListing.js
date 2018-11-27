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
  activeCampaign: state.campaign.active,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsListing);
