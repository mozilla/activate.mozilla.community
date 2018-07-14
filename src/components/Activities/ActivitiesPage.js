import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import ActivitiesOverview from './ActivitiesOverview.js';

import './ActivitiesPage.css';

class ActivitiesPage extends Component {
  render() {
    return (
      <section className="wrapper">
        <Localized id="activities-intro">
          <p>These activities were designed with 2 things in mind:</p>
        </Localized>

        <ol>
          <Localized id="activities-goals-1">
            <li>That they have the potential to have a direct impact on Mozilla’s work right now</li>
          </Localized>
          <Localized id="activities-goals-2">
            <li>That they bring value to you and your community. While we have specific metrics for each activity, one of the main overall goals is that we all get better at mobilising and building communities.</li>
          </Localized>
        </ol>

        <Localized id="activities-community">
          <p>Before you jump right in: Look at your goals for the year, what do you and your community want to accomplish in each of the impact areas? Which of the following activities best map to those goal? And very importantly, ask yourself if by doing these activities you can expose new people to the work that Mozilla is doing and we can build new communities around them.</p>
        </Localized>

        <ActivitiesOverview></ActivitiesOverview>
      </section>
    );
  }
}

export default ActivitiesPage;
