import React, { Component } from 'react';
import { Localized } from 'fluent-react/compat';
import { Grid, Row, Col } from 'react-bootstrap';
import { ChevronRight } from 'react-feather';

import './FAQ.css';

class FAQ extends Component {
  render() {
    return (
      <section className="wrapper faq-wrapper">
        <Localized id="faq-title">
          <h1 className="title text--centered">Frequently Asked Questions</h1>
        </Localized>
        <Localized id="faq-description">
          <p className="text text--lead text--centered">You have questions? We have answers!</p>
        </Localized>
        <Grid>
            <Row className="faq-row">
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="faq-section">
                  <Localized id="faq-about-activate">
                    <h2 className="faq-section__title text--centered color--dark-blue-grey" >What is Activate Mozilla?</h2>
                  </Localized>
                  <div className="faq-sub-section__title">
                    <ChevronRight size={24} className="faq-title__icon icon" />
                    <Localized id="faq-what-title">
                      <h2>What is Activate Mozilla?</h2>
                    </Localized>
                  </div>
                  <div className="faq-sub-section__body">
                  <Localized id="faq-what-answer">
                    <p>Activate Mozilla is a campaign for Mozillians around the world to have impact in areas key to Mozilla’s mission. We want to bring more clarity on what are the most important areas to contribute to at Mozilla right now, and provide clear steps on how to get involved right away. These will be presented in the form of activities.</p>
                  </Localized>
                  </div>
                  <div className="faq-sub-section__title">
                    <ChevronRight size={24} className="faq-title__icon icon" />
                    <Localized id="faq-who-title">
                      <h2>Who can be involved in the activities?</h2>
                    </Localized>
                  </div>
                  <div className="faq-sub-section__body">
                  <Localized id="faq-who-answer">
                    <p>Anyone who wants to support Mozilla.</p>
                  </Localized>
                  </div>

                  <div className="faq-sub-section__title">
                    <ChevronRight size={24} className="faq-title__icon icon" />
                    <Localized id="faq-how-title">
                      <h2>How do I get involved?</h2>
                    </Localized>
                  </div>
                  <div className="faq-sub-section__body">
                  <Localized id="faq-how-answer">
                    <p>Just navigate the site and read the different areas and activities described. There you will find more information on why the activities have been chosen, and concrete instructions on how to contribute to each of them.</p>
                  </Localized>
                  </div>

                  <div className="faq-sub-section__title">
                    <ChevronRight size={24} className="faq-title__icon icon" />
                    <Localized id="faq-why-title">
                      <h2>Why should I get involved?</h2>
                    </Localized>
                  </div>
                  <div className="faq-sub-section__body">
                  <Localized id="faq-why-answer">
                    <p>The areas and activity described in this site are a result of a joint effort from the Mozilla Participation team and other teams to surface what is imporant for the organization right now. If you want to support Mozilla and you are unsure about what to do, this campaign is for you.</p>
                  </Localized>
                  </div>
                  <div className="faq-sub-section__title">
                    <ChevronRight size={24} className="faq-title__icon icon" />
                    <Localized id="faq-goals-title">
                      <h2>What are the goals of the campaign?</h2>
                    </Localized>
                  </div>
                  <div className="faq-sub-section__body">
                  <Localized id="faq-goals-answer">
                    <p>The goal is providing guidance to mobilizers on how to recruit contributors and create community around meaningful Mozilla projects.</p>
                  </Localized>
                  </div>
                  </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="faq-section">
                  <Localized id="faq-activaties">
                    <h2 className="faq-section__title text--centered color--dark-blue-grey">Activities</h2>
                  </Localized>
                  <div className="faq-sub-section__title">
                  <ChevronRight size={24} className="faq-title__icon icon" />
                  <Localized id="faq-questions-title">
                    <h2>What should I do if I have questions?</h2>
                  </Localized>
                  </div>
                  <div className="faq-sub-section__body">
                  <Localized id="faq-questions-answer"
                            leadersLink={<a href="https://discourse.mozilla-community.org/c/participation-leaders">Participation Leaders forum</a>}
                  >
                    <p>You can ask directly creating a new topic at the <a href="https://discourse.mozilla-community.org/c/participation-leaders">Participation Leaders forum</a>.</p>
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
                    <p>We encourage you to run these as lean as possible, but realise that sometimes there can be some costs incurred for logistics or refreshments. If your event meets the requirements laid out in the activity, there is a fund available of up to $150 USD per event. This can be used for only the following items/services:</p>
                  </Localized>
                  <ul>
                    <Localized id="faq-budget-answer-2">
                      <li>Locally produced stickers and/or other small items (only for an event for over 50 people)</li>
                    </Localized>
                    <Localized id="faq-budget-answer-3">
                      <li>Food for participants for an event over than 5 hours</li>
                    </Localized>
                    <Localized id="faq-budget-answer-4">
                      <li>Venue rental (in the case of the no other alternative)</li>
                    </Localized>
                    <Localized id="faq-budget-answer-5">
                      <li>Travel for expert on the field (currently allowed only for Rust events)</li>
                    </Localized>
                  </ul>
                  <Localized id="faq-budget-answer-6">
                    <p>For some activities, extra budget is available for special needs. For example, VR headsets for the WebVR Camp activity. Details will be available on the relevant activity pages.</p>
                  </Localized>
                  <Localized id="faq-budget-answer-7">
                    <p>To make the request, you will need to make a Reps budget request. If you are not a Rep, please contact a local Rep to help you. We will fast-track valid requests, which are ones that meet the requirements of the activity. For larger budget requests, it will be processed like any other Reps budget request and there is no guarantee it will be approved and even if so, whether it will be on time.</p>
                  </Localized>
                  </div>
                  <div className="faq-sub-section__title">
                  <ChevronRight size={24} className="faq-title__icon icon" />
                  <Localized id="faq-swag-title">
                    <h2>Can I request swag for these activities?</h2>
                  </Localized>
                  </div>
                  <div className="faq-sub-section__body">

                  <Localized id="faq-swag-answer"
                            produceLink={<a href="https://wiki.mozilla.org/Participation/Projects/Activate_mozilla/Local_Swag">produce on your own</a>}
                            formLink={<a href="https://bugzilla.mozilla.org/form.reps.swag">swag request form</a>}
                  >
                    <p>In the case you need swag you can either request it via the <a href="https://bugzilla.mozilla.org/form.reps.swag">swag request form</a> or <a href="https://wiki.mozilla.org/Participation/Projects/Activate_mozilla/Local_Swag">produce on your own</a>. If you are not a Rep, you can also ask a nearby Rep to file the request for you. In all cases your request will be evaluated by the bug wrangler before being approved/rejected.</p>
                  </Localized>
                  </div>
                  </div>
              </Col>
            </Row>
        </Grid>
      </section>
    );
  }
}

export default FAQ;
