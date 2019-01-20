import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Localized } from 'fluent-react/compat';

import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    let jumbotronContent = <div></div>;
    if (this.props.activeCampaign) {
      jumbotronContent = (<div className="hero">
        <section className="hero__wrapper container">
          <Localized id="jumbotron-campaign-title">
            <h1 className="title color--white hero__title">Engage in 5… 4…</h1>
          </Localized>
          <Localized id="jumbotron-campaign-description">
            <p className="text text--lead color--white hero__text"></p>
          </Localized>
        </section>
      </div>
      )
    }
    else {
      jumbotronContent = (<div className="hero">
        <section className="hero__wrapper container">
          <Localized id="jumbotron-no-campaign-title">
            <h1 className="title color--white hero__title">Campaign incoming!</h1>
          </Localized>
          <Localized id="jumbotron-no-campaign-description">
            <p className="text text--lead color--white hero__text"></p>
          </Localized>
        </section>
      </div>
      )
    }

    return (
      <React.Fragment>
         {jumbotronContent}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCampaign: state.campaign.active,
});

export default connect(mapStateToProps)(Jumbotron);