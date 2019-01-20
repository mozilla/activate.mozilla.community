import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';

import './EventGuide.css';

class EventGuide extends Component {
  render() {
    return (
      <section className="wrapper">
        <Localized id="eg-title">
          <h1 id="activate-event-planning-guide">Activate Event Planning Guide</h1>
        </Localized>

        <Localized id="eg-started">
          <h2 id="get-started">Get Started</h2>
        </Localized>

        <Localized id="eg-started-content">
          <p></p>
        </Localized>

        <ol>
          <Localized id="eg-started-content-1">
            <li></li>
          </Localized>
          <Localized id="eg-started-content-2">
            <li></li>
          </Localized>
          <Localized id="eg-started-content-3">
            <li></li>
          </Localized>
        </ol>

        <Localized id="eg-venue">
          <h2 id="find-a-venue">Find a venue</h2>
        </Localized>

        <Localized id="eg-venue-content">
          <p></p>
        </Localized>

        <Localized id="eg-experience">
          <h2 id="design-a-fun-experience">Design a fun experience</h2>
        </Localized>
        <Localized id="eg-experience-content">
          <p></p>
        </Localized>

        <Localized id="eg-schedule">
          <h2 id="schedule">Schedule</h2>
        </Localized>
        <Localized id="eg-schedule-content"
                   wikiLink={<a href="https://wiki.mozilla.org/ReMo/SOPs/Event_hosting">instructions</a>}
        >
          <p></p>
        </Localized>

        <Localized id="eg-promotion">
          <h2 id="promotion">Promotion</h2>
        </Localized>
        <Localized id="eg-promotion-content">
          <p></p>
        </Localized>

        <p>
          <Localized id="eg-strategy">
            <strong>Recruitment Strategy</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-strategy-content">
            <li></li>
          </Localized>
        </ul>

        <p>
          <Localized id="eg-online-promotion">
            <strong>Online Promotion and Press</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-online-promotion-content-1">
            <li></li>
          </Localized>
          <Localized id="eg-online-promotion-content-2">
            <li></li>
          </Localized>
          <Localized id="eg-online-promotion-content-3">
            <li></li>
          </Localized>
          <Localized id="eg-online-promotion-content-4">
            <li></li>
          </Localized>
          <Localized id="eg-online-promotion-content-5">
            <li></li>
          </Localized>
        </ul>

        <Localized id="eg-tech">
          <h2 id="tech">Tech</h2>
        </Localized>
        <Localized id="eg-tech-content">
          <p></p>
        </Localized>

        <Localized id="eg-equipment">
          <h3 id="equipment">Equipment</h3>
        </Localized>

        <Localized id="eg-equipment-content">
          <p></p>
        </Localized>

        <Localized id="eg-backup">
          <h3 id="back-up-plan">Back-Up Plan</h3>
        </Localized>

        <Localized id="eg-backup-content">
          <p></p>
        </Localized>

        <Localized id="eg-running">
          <h2 id="running-your-event">Running Your event</h2>
        </Localized>

        <Localized id="eg-setup">
          <h3 id="set-up">Set-up</h3>
        </Localized>

        <Localized id="eg-setup-content">
          <p></p>
        </Localized>

        <Localized id="eg-welcome">
          <h3 id="welcome--registration">Welcome &amp; Registration</h3>
        </Localized>
        <Localized id="eg-welcome-content">
          <p></p>
        </Localized>

        <p>
          <Localized id="eg-welcome-welcome">
            <strong>Welcome</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-welcome-welcome-content">
            <li></li>
          </Localized>
        </ul>

        <p>
          <Localized id="eg-signin">
            <strong>Sign-in</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-signin-content">
            <li></li>
          </Localized>
        </ul>

        <Localized id="eg-documentation">
          <h3 id="documentation">Documentation</h3>
        </Localized>
        <Localized id="eg-documentation-content">
          <p></p>
        </Localized>

        <Localized id="eg-wrapup">
          <h3 id="wrap-up">Wrap-Up</h3>
        </Localized>
        <Localized id="eg-wrapup-content">
          <p></p>
        </Localized>

        <p>
          <Localized id="eg-demos">
            <strong>Demos</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-demos-content">
            <li></li>
          </Localized>
        </ul>

        <p>
          <Localized id="eg-feedback">
            <strong>Get Feedback</strong>
          </Localized>
        </p>

        <ul>
          <li>
            <Localized id="eg-feedback-content-1">
              <p></p>
            </Localized>
          </li>
          <li>
            <Localized id="eg-feedback-content-2"
                       feedbackLink={<a href="https://mzl.la/howwasit">feedback form</a>}
            >
              <p></p>
            </Localized>
          </li>
        </ul>

        <p>
          <Localized id="eg-cleanup">
            <strong>Clean-Up</strong>
          </Localized>
        </p>

        <ul>
          <Localized id="eg-cleanup-content">
            <li></li>
          </Localized>
        </ul>
      </section>
    );
  }
}

export default EventGuide;
