import React, { Component } from 'react';
import { connect } from 'react-redux';

import Jumbotron from './Jumbotron.js';
import NewsletterForm from './NewsletterForm.js';
import ActivitiesOverview from './Activities/ActivitiesOverview.js';
import CampaignTileCurrent from './Campaigns/CampaignTileCurrent.js';

import './Home.css';

class Home extends Component {

  existActiveCampaign = () => {
    // campaign must not be false and must not be null.
    const campaignExist = !!this.props.activeCampaign && this.props.activeCampaign !== null ;
    return campaignExist;
  };

  getHomeWhenActiveCampaign = () => {

    const campaign = {...this.props.activeCampaign};

    return (
      <>
        <Jumbotron />
        <CampaignTileCurrent
          titleImage={campaign.titleImage}
          titleKey={campaign.titleKey}
          descriptionKey={campaign.descriptionKey}
          durationKey={campaign.durationKey}
          linkTarget={campaign.linkTarget}
        />
        <ActivitiesOverview />
        <div className="home__illustrated-slice js-newsletter-form-wrapper">
          <NewsletterForm />
        </div>
      </>
    );
  };

  getHomeWithNoCampaign = () => {
    return (
      <>
        <Jumbotron />
        <NewsletterForm />
        <ActivitiesOverview />
        <div className="home__illustrated-slice"></div>
      </>
    );
  };

  render() {
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
  activeCampaign: state.campaign.active,
});

export default connect(mapStateToProps)(Home);
