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
        <NewsletterForm></NewsletterForm>
        <ActivitiesOverview></ActivitiesOverview>
      </section>
    );
  }
}

export default Home;
