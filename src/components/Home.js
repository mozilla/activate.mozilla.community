import React, { Component } from 'react';
import { connect } from 'react-redux';

import Jumbotron from './Jumbotron.js';
import NewsletterForm from './NewsletterForm.js';
import ActivitiesOverview from './Activities/ActivitiesOverview.js';
import CampaignTileCurrent from './Campaigns/CampaignTileCurrent.js';
import HomeCTA from './HomeCTA.js';

import './Home.css';

class Home extends Component {

  componentDidMount = () => {
    document.body.classList.add('is-header-no-bg');
  };

  componentWillUnmount = () => {
    document.body.classList.remove('is-header-no-bg');
  }

  existActiveCampaign = () => {
    // campaign must not be false and must not be null.
    //const campaignExist = !!this.props.activeCampaign && this.props.activeCampaign !== null ;
    const campaignExist = null ;
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
          buttonKey = {campaign.buttonKey}
          linkTarget={campaign.linkTarget}
        />
        <ActivitiesOverview />
        <div className="home__illustrated-slice home__illustrated-slice--large js-newsletter-form-wrapper">
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
    );
  };

  getHomeWithNoCampaign = () => {
    return (
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
