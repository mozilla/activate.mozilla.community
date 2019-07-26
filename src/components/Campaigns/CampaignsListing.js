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

      activeCampaign =  (
        <section className="campaign">
          <Localized id="campaign-active">
            <h1 className="title text--centered"></h1>
          </Localized>
          <Localized id="campaign-active-description">
            <p className="text text--lead text--centered"></p>
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
      );
    }

    let upcomingCampaigns = <div></div>;
    if (this.props.upcomingCampaigns && this.props.upcomingCampaigns.length > 0) {
      upcomingCampaigns = (
        <section className="campaign-list">
          <Localized id="campaign-upcoming">
            <h1 className="title title--extra-extra-large text--centered"></h1>
          </Localized>
          <div className="content-contained content-contained--small">
            <Localized id="campaign-upcoming-description">
              <p className="text text--lead text--centered"></p>
            </Localized>
          </div>
          <Grid>
            <Row className="campaign-list__row">

              { this.props.upcomingCampaigns && this.props.upcomingCampaigns.map((campaign) => (
                <CampaignTileCurrent
                    key={campaign.titleKey}
                    titleImage={campaign.titleImage}
                    titleKey={campaign.titleKey}
                    descriptionKey={campaign.descriptionKey}
                    durationKey={campaign.durationKey}
                    buttonKey = {campaign.buttonKey}
                    linkTarget={campaign.linkTarget}
                  />
              ))}

            </Row>
          </Grid>
        </section>
      );
    }

    return (
      <Localized id="campaigns-document-title" attrs={{title: true}}>
        <DocumentTitle>
          <React.Fragment>
            {activeCampaign}
            {upcomingCampaigns}
            <section className="campaign-list">
              <Localized id="campaign-archive">
                <h1 className="title title--extra-extra-large text--centered"></h1>
              </Localized>
              <div className="content-contained content-contained--small">
                <Localized id="campaign-archive-description">
                  <p className="text text--lead text--centered"></p>
                </Localized>
              </div>
              <Grid>
                <Row className="campaign-list__row">
                <CampaignTile
                  titleImage="/images/firefoxforgood.png"
                  titleKey="firefoxforgood-sprint-title"
                  descriptionKey="firefoxforgood-sprint-description"
                  durationKey="firefoxforgood-sprint-duration"
                  linkTarget="https://events.mozilla.org/firefoxforgood-surfacingqualitycontentandconversat"
                ></CampaignTile>
                <CampaignTile
                  titleImage="/images/ff-preview.png"
                  titleKey="ff-preview-title"
                  descriptionKey="ff-preview-description"
                  durationKey="ff-preview-duration"
                  linkTarget="https://events.mozilla.org/becomeabetatestingbughunter"
                ></CampaignTile>
                <CampaignTile
                  titleImage="/images/cv-100.jpg"
                  titleKey="cv-100-sprint-title"
                  descriptionKey="cv-100-sprint-description"
                  durationKey="cv-100-sprint-duration"
                  linkTarget="https://events.mozilla.org/commonvoice100"
                ></CampaignTile>
                <CampaignTile
                  titleImage="/images/sumo-firefox-66.png"
                  titleKey="firefox66-sumo-sprint-title"
                  descriptionKey="firefox66-sumo-sprint-description"
                  durationKey="firefox66-sumo-sprint-duration"
                  linkTarget="https://events.mozilla.org/firefox66supportsprint"
                ></CampaignTile>
                <CampaignTile
                  titleImage="/images/firefox-fights.jpg"
                  titleKey="firefox-fights-title"
                  descriptionKey="firefox-fights-description"
                  durationKey="firefox-fights-duration"
                  linkTarget="https://events.mozilla.org/firefoxfightsforyoucampaign"
                ></CampaignTile>
                <CampaignTile
                    titleImage="/images/dark-funnel.png"
                    titleKey="dark-funnel-title"
                    descriptionKey="dark-funnel-description"
                    durationKey="dark-funnel-duration"
                    linkTarget="https://events.mozilla.org/darkfunnelEN"
                  ></CampaignTile>
                  <CampaignTile
                    titleImage="/images/firefox-addons.jpg"
                    titleKey="firefox-addons-title"
                    descriptionKey="firefox-addons-description"
                    durationKey="firefox-addons-duration"
                    linkTarget="https://discourse.mozilla.org/t/the-add-on-localization-campaign-is-happening-join-us/29432"
                  ></CampaignTile>
                  <CampaignTile
                    titleImage="/images/firefox-support.jpg"
                    titleKey="firefox-support-title"
                    descriptionKey="firefox-support-description"
                    durationKey="firefox-support-duration"
                    linkTarget="https://supportsprint.mozilla.community/"
                  ></CampaignTile>
                  <CampaignTile
                    titleImage="/images/common-voice.jpg"
                    titleKey="common-voice-title"
                    descriptionKey="common-voice-description"
                    durationKey="common-voice-duration"
                    linkTarget="https://voice-sprint.mozilla.community/"
                  ></CampaignTile>
                  <CampaignTile
                    titleImage="/images/adhaar.jpg"
                    titleKey="adhaar-title"
                    descriptionKey="adhaar-description"
                    durationKey="adhaar-duration"
                    linkTarget="https://foundation.mozilla.org/en/campaigns/aadhaar/"
                  ></CampaignTile>
                  <CampaignTile
                    titleImage="/images/new-firefox.jpg"
                    titleKey="new-firefox-title"
                    descriptionKey="new-firefox-description"
                    durationKey="new-firefox-duration"
                    linkTarget="https://newfirefox.mozilla.community/"
                  ></CampaignTile>
                  <CampaignTile
                    titleImage="/images/quantum-sprint.jpg"
                    titleKey="quantum-sprint-title"
                    descriptionKey="quantum-sprint-description"
                    durationKey="quantum-sprint-duration"
                    linkTarget="https://firefoxsprint.mozilla.community/"
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
  upcomingCampaigns: state.campaign.upcoming,
});

export default connect(mapStateToProps)(CampaignsListing);
