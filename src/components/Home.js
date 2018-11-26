import React, { Component } from 'react';
import Jumbotron from './Jumbotron.js';
import NewsletterForm from './NewsletterForm.js';
import ActivitiesOverview from './Activities/ActivitiesOverview.js';

import './Home.css';

class Home extends Component {
  render() {


    return (
      <section>
        <Jumbotron ></Jumbotron>
        <ActivitiesOverview></ActivitiesOverview>
        <div className="home__illustrated-slice js-newsletter-form-wrapper">
          <NewsletterForm></NewsletterForm>
        </div>
      </section>
    );
  }
}

export default Home;
