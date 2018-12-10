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
    const campaignExist = !!this.props.activeCampaign && this.props.activeCampaign !== null ;
    return campaignExist;
  };

  getHomeWhenActiveCampaign = () => {

    const campaign = {...this.props.activeCampaign};

    return (

      <Localized id="homepage-document-title" attrs={{title: true}}>
        <DocumentTitle>
          <>
            <Jumbotron />
            <CampaignTileCurrent
              titleImage={campaign.titleImage}
              titleKey={campaign.titleKey}
              descriptionKey={campaign.descriptionKey}
              durationKey={campaign.durationKey}
              buttonKey = {campaign.buttonKey}
              linkTarget={campaign.linkTarget}
              visibleOnHomepage = {
                (this.existActiveCampaign() ? true : false)
              }
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
        </DocumentTitle>
      </Localized>

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
