import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Localized } from 'fluent-react/compat';

import './Jumbotron.css';

class Jumbotron extends Component {
  render () {
    let jumbotronContent = <div></div>;
    if (this.props.activeCampaigns) {
      jumbotronContent = (<div className="hero">
        <section className="hero__wrapper container">
          <Localized id="jumbotron-campaign-title">
            <h1 className="title color--white hero__title"></h1>
          </Localized>
          <Localized id="jumbotron-campaign-description"
            missionLink={
              <a href="https://www.mozilla.org/mission/"></a>
            }>
            <p className="text text--lead color--white hero__text"></p>
          </Localized>
        </section>
      </div>
      );
    } else {
      jumbotronContent = (<div className="hero">
        <section className="hero__wrapper container">
          <Localized id="jumbotron-no-campaign-title">
            <h1 className="title color--white hero__title"></h1>
          </Localized>
          <Localized id="jumbotron-no-campaign-description">
            <p className="text text--lead color--white hero__text"></p>
          </Localized>
        </section>
      </div>
      );
    }

    return (
      <React.Fragment>
        {jumbotronContent}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCampaigns: state.campaign.active,
});

export default connect(mapStateToProps)(Jumbotron);
