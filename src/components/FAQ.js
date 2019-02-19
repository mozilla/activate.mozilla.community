import React, { Component } from "react";
import { Localized } from "fluent-react/compat";
import DocumentTitle from 'react-document-title';
import { Grid, Row, Col } from "react-bootstrap";
import { ChevronRight } from "react-feather";

import "./FAQ.css";

class FAQ extends Component {
  render() {
    return (
      <Localized id="faq-document-title" attrs={{title: true}}>
      <DocumentTitle>
      <section className="wrapper faq-wrapper">
        <Localized id="faq-title">
          <h1 className="title text--centered">Frequently Asked Questions</h1>
        </Localized>
        <Localized id="faq-description">
          <p className="text text--lead text--centered"></p>
        </Localized>
        <Grid>
          <Row className="faq-row">
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="faq-section">
                <Localized id="faq-about-activate">
                  <h2 className="faq-section__title text--centered color--dark-blue-grey">
                    What is Activate Mozilla?
                  </h2>
                </Localized>
                <div className="faq-sub-section__title">
                  <ChevronRight size={24} className="faq-title__icon icon" />
                  <Localized id="faq-what-title">
                    <h2>What is Activate Mozilla?</h2>
                  </Localized>
                </div>
                <div className="faq-sub-section__body">
                  <Localized id="faq-what-answer-2">
                    <p></p>
                  </Localized>
                </div>
                <div className="faq-sub-section__title">
                  <ChevronRight size={24} className="faq-title__icon icon" />
                  <Localized id="faq-who-title">
                    <h2>Who can be involved in the activities?</h2>
                  </Localized>
                </div>
                <div className="faq-sub-section__body">
                  <Localized id="faq-who-answer-2"
                    cpgLink={
                      <a href="https://www.mozilla.org/about/governance/policies/participation/"></a>
                    }>
                    <p></p>
                  </Localized>
                </div>
                <div className="faq-sub-section__title">
                  <ChevronRight size={24} className="faq-title__icon icon" />
                  <Localized id="faq-how-title">
                    <h2>How do I get involved?</h2>
                  </Localized>
                </div>
                <div className="faq-sub-section__body">
                  <Localized id="faq-how-answer-2">
                    <p></p>
                  </Localized>
                </div>

                <div className="faq-sub-section__title">
                  <ChevronRight size={24} className="faq-title__icon icon" />
                  <Localized id="faq-why-title">
                    <h2>Why should I get involved?</h2>
                  </Localized>
                </div>
                <div className="faq-sub-section__body">
                  <Localized id="faq-why-answer-2">
                    <p></p>
                  </Localized>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className="faq-section">
                <Localized id="faq-activaties">
                  <h2 className="faq-section__title text--centered color--dark-blue-grey">
                    Activities
                  </h2>
                </Localized>
                <div className="faq-sub-section__title">
                  <ChevronRight size={24} className="faq-title__icon icon" />
                  <Localized id="faq-questions-title">
                    <h2>What should I do if I have questions?</h2>
                  </Localized>
                </div>
                <div className="faq-sub-section__body">
                  <Localized
                    id="faq-questions-answer"
                    leadersLink={
                      <a href="https://discourse.mozilla-community.org/c/participation-leaders">
                        Participation Leaders forum
                      </a>
                    }
                  >
                    <p></p>
                  </Localized>
                </div>
                <div className="faq-sub-section__title">
                  <ChevronRight size={24} className="faq-title__icon icon" />
                  <Localized id="faq-budget-title">
                    <h2>Can I request budget for these activities?</h2>
                  </Localized>
                </div>
                <div className="faq-sub-section__body">
                  <Localized id="faq-budget-answer">
                    <p></p>
                  </Localized>
                  <ul>
                    <Localized id="faq-budget-answer-2">
                      <li></li>
                    </Localized>
                    <Localized id="faq-budget-answer-3">
                      <li></li>
                    </Localized>
                    <Localized id="faq-budget-answer-4">
                      <li></li>
                    </Localized>
                    <Localized id="faq-budget-answer-5">
                      <li></li>
                    </Localized>
                  </ul>
                  <Localized id="faq-budget-answer-6">
                    <p></p>
                  </Localized>
                  <Localized id="faq-budget-answer-7">
                    <p></p>
                  </Localized>
                </div>
                <div className="faq-sub-section__title">
                  <ChevronRight size={24} className="faq-title__icon icon" />
                  <Localized id="faq-swag-title">
                    <h2>Can I request swag for these activities?</h2>
                  </Localized>
                </div>
                <div className="faq-sub-section__body">
                  <Localized
                    id="faq-swag-answer"
                    produceLink={
                      <a href="https://wiki.mozilla.org/Participation/Projects/Activate_mozilla/Local_Swag">
                        produce on your own
                      </a>
                    }
                    formLink={
                      <a href="https://bugzilla.mozilla.org/form.reps.swag">
                        swag request form
                      </a>
                    }
                  >
                    <p></p>
                  </Localized>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
      </DocumentTitle>
      </Localized>
    );
  }
}

export default FAQ;
