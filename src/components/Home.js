import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Localized } from 'fluent-react/compat';
import { connect } from 'react-redux';
import Jumbotron from './Jumbotron.js';
import NewsletterForm from './NewsletterForm.js';
import ActivitiesOverview from './Activities/ActivitiesOverview.js';
import CampaignTileCurrent from './Campaigns/CampaignTileCurrent.js';
import HomeCTA from './HomeCTA.js';

import './Home.css';
import '../section.css';

class Home extends Component {
  componentDidMount = () => {
    document.body.classList.add('is-header-no-bg');
  };

  componentWillUnmount = () => {
    document.body.classList.remove('is-header-no-bg');
  };

  existActiveCampaign = () => {
    // campaign must not be false and must not be null.
    const campaignExist = !!this.props.activeCampaigns && this.props.activeCampaigns !== null;
    return campaignExist;
  };

  getHomeWhenActiveCampaign = () => {
    return (
      <Localized id="homepage-document-title" attrs={{ title: true }}>
        <DocumentTitle>
          <>
            <Jumbotron />
            { this.props.activeCampaigns.map((campaign, index) => (
              <CampaignTileCurrent
                key={campaign.titleKey}
                titleImage={campaign.titleImage}
                titleKey={campaign.titleKey}
                descriptionKey={campaign.descriptionKey}
                durationKey={campaign.durationKey}
                buttonKey = {campaign.buttonKey}
                linkTarget={campaign.linkTarget}
                isTop={index === 0}
                credit={campaign.credit}
                creditUrl={campaign.creditUrl}
              />
            ))}

            <ActivitiesOverview />
            <div className="home__illustrated-slice home__illustrated-slice--large js-nl-form-wrapper">
              <div className="container">
                <div className="content-contained">
                  <NewsletterForm isInIllustratedSlice/>
                </div>
              </div>
            </div>
            <div className="container">
              <HomeCTA />
            </div>
          </>
        </DocumentTitle>
      </Localized>

    );
  };

  getHomeWithNoCampaign = () => {
    return (
      <Localized id="homepage-document-title" attrs={{ title: true }}>
        <DocumentTitle>
          <>
            <Jumbotron />
            <NewsletterForm />
            <ActivitiesOverview />
            <div className="home__illustrated-slice">
              <div className="container">
                <div className="content-contained">
                  <HomeCTA isInIllustratedSlice/>
                </div>
              </div>
            </div>
          </>
        </DocumentTitle>
      </Localized>
    );
  };

  render () {
    return (
      <section>
        {
          this.existActiveCampaign()
            ? this.getHomeWhenActiveCampaign()
            : this.getHomeWithNoCampaign()
        }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCampaigns: state.campaign.active,
});

export default connect(mapStateToProps)(Home);
