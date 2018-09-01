import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Localized } from 'fluent-react/compat';

import ActivityDetail from './ActivityDetail';

class WebcompatSprint extends Component {
  render() {
    return (
      <ActivityDetail
        titleImage="/images/webcompat-post-header.png"
        titleKey="webcompat-title"
        durationKey="webcompat-duration">

        <Col lg={9} md={9} sm={9} xs={12}>
          <p class="alert alert-info impactbox"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
        At Mozilla, we want the web running well for everyone, not just in one or two browsers. This means cross-browser, user-agent independent, and cross-device.</p>

          <p>Web Compatibility, the ability for all Web content to run in all browsers, is important. There are multiple web content engines running on multiple devices, and sometimes with a little testing and some small tweaks to their site, developers can ensure that more users can have the full experience that is desired.</p>

          <p>For more background and data on Web Compatibility, read the <a href="https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/">recent blog post on Mozilla Hacks</a>.</p>

          <h2 id="activity-format">Activity Format</h2>

          <p>While this activity can be run solo, we encourage you to run an event in your community to get together people who care about the Web. The goal is to test sites, diagnose problems, and discuss how to evangelise locally to developers about a Web that works for everyone.</p>

          <p>Read the <a href="/eventguide/">event guide</a> on how to set up an event page and how to organize an event.</p>

          <p>For duration, we recommend a half-day (or full evening) event with a minimum of 10-15 attendees.</p>

          <h2 id="event-flow">Event Flow</h2>

          <ul>
            <li>Set yourself up with Firefox. Any or all of the following versions:
              <ul>
                <li><a href="https://www.mozilla.org/firefox/channel/">Firefox</a></li>
                <li><a href="https://www.mozilla.org/firefox/channel/">Firefox for Android</a></li>
                <li><a href="https://www.mozilla.org/firefox/ios/">Firefox for iOS</a></li>
              </ul>
            </li>
            <li><a href="https://addons.mozilla.org/addon/webcompatcom-reporter?src=external-activatewebcompat1">Install the Webcompat.com Reporter add-on</a>
              <ul>
                <li>Firefox for Android Nightly and Aurora already have a “Report Site Issue” option in the main menu; no add-on needed.</li>
                <li>No add-ons support for iOS, but people can report bugs manually at <a href="https://webcompat.com">webcompat.com</a></li>
              </ul>
            </li>
            <li>Choose the sites you want to test
              <ul>
                <li>We recommend the top sites in your country, as measured by a reputable local source or using the <a href="http://www.alexa.com/topsites/countries">Alexa Top Sites by Country</a> reference</li>
                <li>Also sites that you need or use frequently in your communities!</li>
              </ul>
            </li>
            <li>Test and Report!
              <ul>
                <li>If you encounter a site that does not work in Firefox, but works in another browser, then click the add-on button and follow the steps to report</li>
                <li>Pay special attention to what we are looking for <a href="https://wiki.mozilla.org/Compatibility/Guide#Reporting_a_Web_compatibility_issue">in reported issues</a></li>
                <li>If you want to become an expert in web compatibility, <a href="https://wiki.mozilla.org/Compatibility/Guide">go here</a></li>
              </ul>
            </li>
          </ul>

          <h2 id="directly-at-the-end-of-the-activity">Directly at the end of the activity</h2>
          <p>Immediately after the event don’t forget to share the link to the impact form with your attendees:</p>

          <p class="attention-link"><a href="http://mzl.la/howwasit">mzl.la/howwasit</a></p>

          <p>Remember this is how you’ll know who attended your event, and if you successfully inspired them to action! We recommend adding it to your final slide AND emailing it out after the event.</p>

          <h2 id="output">Output</h2>
          <p>In addition to the recommended event flow here are some things we’d like you, the event organizer, to do.</p>

          <ul>
            <li>Fill out the post-event metrics on the event page you setup on the Reps portal</li>
            <li>Optionally, tell us about your event. This can be before or after. We love to hear about upcoming plans, and of course love to hear about what was achieved at the event with a picture or two!
              <ul>
                <li><a href="https://discourse.mozilla-community.org/t/activate-mozilla-web-compatibility-sprint/10074/1">Here is the Discourse post to write to</a></li>
              </ul>
            </li>
            <li>Encourage attendees who want to continue to work on Web Compat to sign up to the <a href="https://www.mozilla.org/en-US/about/forums/#compatibility">mailing list</a></li>
          </ul>

          <h2 id="extra">Extra</h2>
          <p>While the focus of this activity should be on testing sprints, there are other ways to stay more involved with the community after.</p>

          <ul>
            <li>Bug diagnosis: This is about trying to understand the underlying issues behind bug reports, and where possible, providing suggested fixes for site owners. <a href="https://github.com/mozilla/participation-org/issues/237#issuecomment-163632354">More information</a></li>
            <li>Site outreach: This is about trying to get in contact with websites that have issues and (politely!) providing ways that they can improve compatibility or fix their bugs. <a href="https://github.com/mozilla/participation-org/issues/237#issuecomment-163632626">More information</a></li>
          </ul>

          <p><a href="https://webcompat.com/contributors">Webcompat’s contributors page</a> has more basic information on how to get started and join the community.</p>

        </Col>

        <Col lg={3} md={3} sm={3} className="sidebar hidden-xs">
          <h2 id="impact-and-metrics">Impact and Metrics</h2>

          <p>At Mozilla, we want the web running well for everyone, not just in one or two browsers. This means cross-browser, and cross-device. Our global community can give visibility to this that no team could ever match!</p>

          <h3 id="goals-for-this-area">Goals for this area</h3>

          <p><strong>Impact:</strong></p>

          <ul>
            <li>300 Add-on installs</li>
            <li>200 compatibility issues filed</li>
          </ul>

          <p><strong>Strength:</strong></p>

          <ul>
            <li>50 Mozillians run events</li>
            <li>50 signups to the <a href="https://www.mozilla.org/en-US/about/forums/#compatibility">compatibility list</a></li>
          </ul>

          <h2 id="audience-for-this-activity">Audience for this activity</h2>

          <p>The audience this activity is anyone who is passionate on the topic, but being somewhat Web tech savvy is a help. No programming skills are necessary. It is for people who care about diversity on the Web.</p>
        </Col>

      </ActivityDetail>
    );
  }
}

export default WebcompatSprint;
