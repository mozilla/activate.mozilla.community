import React, { Component } from 'react';
import { connect} from 'react-redux';

import Jumbotron from './Jumbotron.js';
import NewsletterForm from './NewsletterForm.js';
import ActivitiesOverview from './Activities/ActivitiesOverview.js';
import CampaignTileCurrent from './Campaigns/CampaignTileCurrent.js';

import './Home.css';

class Home extends Component {

  existActiveCampaign = () => {
    // campaign must not be falsy and must not be null.
    const campaignExist = !!this.props.activeCampaign && this.props.activeCampaign !== null ;
    return campaignExist;
  }

  getHomeWhenActiveCampaign = () => {

    const campaign = {...this.props.activeCampaign};

    return (
      <>
      <CampaignTileCurrent
        titleImage={campaign.titleImage}
        titleKey={campaign.titleKey}
        descriptionKey={campaign.descriptionKey}
        durationKey={campaign.durationKey}
        linkTarget={campaign.linkTarget}
      />
        <ActivitiesOverview />
        <NewsletterForm />
      </>
    );
  }

  getHomeWithNoCampaign = () => {
    return (
      <>
        <NewsletterForm />
        <ActivitiesOverview />
      </>
    );
  }

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
