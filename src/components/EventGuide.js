import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { Grid, Row, Col } from 'react-bootstrap';
import { ChevronRight } from 'react-feather';

import './answers.css';

class EventGuide extends Component {
  render () {
    return (
      <section className="wrapper">
        <Localized id="eg-title">
          <h1 id="activate-event-planning-guide" className="title text--centered"></h1>
        </Localized>
        <Grid>
          <Row className="event-row">
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className="event-section">
                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-started">
                    <h2 id="get-started"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
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
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-venue">
                    <h2 id="find-a-venue"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-venue-content">
                    <p></p>
                  </Localized>
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-experience">
                    <h2 id="design-a-fun-experience"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-experience-content">
                    <p></p>
                  </Localized>
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-schedule">
                    <h2 id="schedule"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-schedule-content"
                    wikiLink={<a href="https://wiki.mozilla.org/ReMo/SOPs/Event_hosting"></a>}
                  >
                    <p></p>
                  </Localized>
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-promotion">
                    <h2 id="promotion"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-promotion-content">
                    <p></p>
                  </Localized>

                  <p>
                    <Localized id="eg-strategy">
                      <strong></strong>
                    </Localized>
                  </p>

                  <ul>
                    <Localized id="eg-strategy-content">
                      <li></li>
                    </Localized>
                  </ul>

                  <p>
                    <Localized id="eg-online-promotion">
                      <strong></strong>
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
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-tech">
                    <h2 id="tech"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-tech-content">
                    <p></p>
                  </Localized>
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-equipment">
                    <h2 id="equipment"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-equipment-content">
                    <p></p>
                  </Localized>
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-backup">
                    <h2 id="back-up-plan"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-backup-content">
                    <p></p>
                  </Localized>
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-setup">
                    <h2 id="set-up"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-setup-content">
                    <p></p>
                  </Localized>
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-welcome">
                    <h2 id="welcome--registration"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-welcome-content">
                    <p></p>
                  </Localized>

                  <p>
                    <Localized id="eg-welcome-welcome">
                      <strong></strong>
                    </Localized>
                  </p>

                  <ul>
                    <Localized id="eg-welcome-welcome-content">
                      <li></li>
                    </Localized>
                  </ul>

                  <p>
                    <Localized id="eg-signin">
                      <strong></strong>
                    </Localized>
                  </p>

                  <ul>
                    <Localized id="eg-signin-content">
                      <li></li>
                    </Localized>
                  </ul>
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-documentation">
                    <h2 id="documentation"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-documentation-content">
                    <p></p>
                  </Localized>
                </div>

                <div className="event-sub-section__title">
                  <ChevronRight size={24} className="event-title__icon icon" />
                  <Localized id="eg-wrapup">
                    <h2 id="wrap-up"></h2>
                  </Localized>
                </div>
                <div className="event-sub-section__body">
                  <Localized id="eg-wrapup-content">
                    <p></p>
                  </Localized>

                  <p>
                    <Localized id="eg-demos">
                      <strong></strong>
                    </Localized>
                  </p>

                  <ul>
                    <Localized id="eg-demos-content">
                      <li></li>
                    </Localized>
                  </ul>

                  <p>
                    <Localized id="eg-feedback">
                      <strong></strong>
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
                        feedbackLink={<a href="https://mzl.la/howwasit"></a>}
                      >
                        <p></p>
                      </Localized>
                    </li>
                  </ul>

                  <p>
                    <Localized id="eg-cleanup">
                      <strong></strong>
                    </Localized>
                  </p>

                  <ul>
                    <Localized id="eg-cleanup-content">
                      <li></li>
                    </Localized>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default EventGuide;
