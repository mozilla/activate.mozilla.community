import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Localized } from 'fluent-react/compat';

import ActivityDetail from './ActivityDetail';

class TechSpeakers extends Component {
  render() {
    return (
      <ActivityDetail
        titleImage="/images/techspeakers-post-header.png"
        titleKey="techspeakers-title"
        durationKey="techspeakers-duration">

        <Col lg={9} md={9} sm={9} xs={12}>
          <p class="alert alert-info impactbox"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
        As Mozilla we’re working to help to keep the internet healthy, open and accessible to all but we can’t do it alone. We need to engage with people who are on the front lines of building the internet: web developers, designers, and other technologists who care about the open web. We need to get them excited about Mozilla as a technology leader.</p>

          <p><strong>Mozilla Tech Speakers</strong> are volunteer contributors who have undergone a six week training program to learn how to spread open web technologies to developers all over the world, from the voice of Mozilla. The aim of this activity is for you to work with Tech Speakers to reach as many web developers as we can with tech topics, and to get their feedback back to Mozilla.</p>

          <p><img src="/images/techspeakers.jpg" alt="TechSpeakers Group picture" /></p>

          <p>Are you ready?</p>

          <h2 id="setting-up-your-event">Setting Up Your Event</h2>
          <p>This activity is all about throwing a big event where a Tech Speaker can come and talk about open web products and technologies to interested developers, designers, &amp; enthusiasts. Here are some of the basic pre-event steps you should take to make sure your event is a success.</p>

          <ol>
            <li>Look at the <a href="https://wiki.mozilla.org/TechSpeakers#Mozilla_Tech_Speakers">list of Tech Speakers</a> and find someone in your local area who would be a good fit for your event.</li>
            <li>Contact the Tech Speaker and agree on a date and topic for your event. We recommend one of the following topics (you can choose more than one):
              <ul>
                <li>Web VR</li>
                <li>Rust</li>
                <li>Web Extension</li>
              </ul>
            </li>
            <li>Once you’ve made sure your Tech Speaker is available and confirmed, find a venue that will fit the number of people you’re expecting (community centers, schools and co-working spaces are great places to consider).</li>
            <li><strong>Create an event page</strong> on MeetUp (or Facebook) so you have somewhere for your attendees to register.</li>
            <li>Start reaching out to <strong>web developers</strong> in your area and inviting them to your event.</li>
            <li>Read the <a href="/eventguide/">event guide</a> on how to set up an event page and how to organize an event.</li>
          </ol>

          <h2 id="after-the-event">After the Event</h2>
          <p>Immediately after the event don’t forget to share the link to the impact form with your attendees:</p>

          <p class="attention-link"><a href="http://mzl.la/howwasit">mzl.la/howwasit</a></p>

          <p>Remember this is how you’ll know who attended your event, and if you successfully inspired them to action! We recommend adding it to your final slide AND emailing it out after the event.</p>

          <p>Lastly, don’t forget to fill out the post-event metrics on the event page you set up on the Reps portal. It is really important to know how many people you got engaged through your event.</p>

          <h2 id="extra">Extra</h2>
          <p>For budget please follow the <a href="https://activate.mozilla.community/faq/">Activate FAQ</a>. All tech speaker’s expenses will be handled by the tech speaker program.</p>

        </Col>

        <Col lg={3} md={3} sm={3} className="xs-hidden sidebar">
          <h2 id="goals-for-this-activity">Goals for this Activity</h2>

          <p>Your goal is to get more web developers excited and aware of Mozilla as an influential tech leader. Here are some of the outcomes of your event that you should be working towards:</p>

          <ul>
            <li><strong>Organize</strong> an event for ~50 web developers</li>
            <li><strong>Activate</strong> at least 40 of them to <a href="http://mzl.la/howwasit">share feedback</a> after the talk</li>
          </ul>

          <h2 id="target-audience">Target Audience</h2>

          <p>We’ve thought long and hard about who would be a good fit for this activity, now it’s up to you to go out and find them!</p>

          <ul>
            <li><strong>Web Developers:</strong> people who have or want to make a living from developing and building for the web.</li>
            <li><strong>Where to find them:</strong> hubs, entrepreneur/co-working spaces, other web developer groups/meetups, job boards, web development companies (or companies with a lot of web developers), code schools.</li>
          </ul>
        </Col>

      </ActivityDetail>
    );
  }
}

export default TechSpeakers;
