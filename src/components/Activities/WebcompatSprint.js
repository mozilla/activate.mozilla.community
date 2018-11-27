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
          <Localized id="webcompat-activity-intro">
            <p className="alert alert-info impactbox"><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>
              At Mozilla, we want the web running well for everyone, not just in one or two browsers. This means cross-browser, user-agent independent, and cross-device.
            </p>
          </Localized>

          <Localized id="webcompat-activity-general">
            <p>Web Compatibility, the ability for all Web content to run in all browsers, is important. There are multiple web content engines running on multiple devices, and sometimes with a little testing and some small tweaks to their site, developers can ensure that more users can have the full experience that is desired.</p>
          </Localized>

          <Localized id="webcompat-activity-background"
            hacksPost={<a href="https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/">recent blog post on Mozilla Hacks</a>}>
            <p>For more background and data on Web Compatibility, read the <a href="https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/">recent blog post on Mozilla Hacks</a>.</p>
          </Localized>

          <Localized id="webcompat-activity-format">
            <h2 id="activity-format">Activity Format</h2>
          </Localized>

          <Localized id="webcompat-activity-solo">
            <p>While this activity can be run solo, we encourage you to run an event in your community to get together people who care about the Web. The goal is to test sites, diagnose problems, and discuss how to evangelise locally to developers about a Web that works for everyone.</p>
          </Localized>

          <Localized id="webcompat-activity-organize"
            eventGuideLink={<a href="/eventguide/">event guide</a>}>
            <p>Read the <a href="/eventguide/">event guide</a> on how to set up an event page and how to organize an event.</p>
          </Localized>

          <Localized id="webcompat-activity-duration">
            <p>For duration, we recommend a half-day (or full evening) event with a minimum of 10-15 attendees.</p>
          </Localized>

          <Localized id="webcompat-activity-flow">
            <h2 id="event-flow">Event Flow</h2>
          </Localized>

          <ul>
            <Localized id="webcompat-activity-setup">
              <li>Set yourself up with Firefox. Any or all of the following versions:</li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-setup-1"
                firefoxLink={<a href="https://www.mozilla.org/firefox/channel/">Firefox</a>}>
                <li><a href="https://www.mozilla.org/firefox/channel/">Firefox</a></li>
              </Localized>
              <Localized id="webcompat-activity-setup-2"
                firefoxLink={<a href="https://www.mozilla.org/firefox/channel/">Firefox</a>}>
                <li><a href="https://www.mozilla.org/firefox/channel/">Firefox for Android</a></li>
              </Localized>
              <Localized id="webcompat-activity-setup-3"
                iosLink={<a href="https://www.mozilla.org/firefox/ios/">Firefox for iOS</a>}>
                <li><a href="https://www.mozilla.org/firefox/ios/">Firefox for iOS</a></li>
              </Localized>
            </ul>
            <Localized id="webcompat-activity-setup-4"
              reporterLink={<a href="https://addons.mozilla.org/addon/webcompatcom-reporter?src=external-activatewebcompat1">Install the Webcompat.com Reporter add-on</a>}>
              <li><a href="https://addons.mozilla.org/addon/webcompatcom-reporter?src=external-activatewebcompat1">Install the Webcompat.com Reporter add-on</a></li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-setup-5">
                <li>Firefox for Android Nightly and Aurora already have a “Report Site Issue” option in the main menu; no add-on needed.</li>
              </Localized>
              <Localized id="webcompat-activity-setup-6"
                webcompatLink={<a href="https://webcompat.com">webcompat.com</a>}>
                <li>No add-ons support for iOS, but people can report bugs manually at <a href="https://webcompat.com">webcompat.com</a></li>
              </Localized>
            </ul>
            <Localized id="webcompat-activity-flow-1">
              <li>Choose the sites you want to test</li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-flow-2"
                alexaLink={<a href="http://www.alexa.com/topsites/countries">Alexa Top Sites by Country</a>}>
                <li>We recommend the top sites in your country, as measured by a reputable local source or using the <a href="http://www.alexa.com/topsites/countries">Alexa Top Sites by Country</a> reference</li>
              </Localized>
              <Localized id="webcompat-activity-flow-3">
                <li>Also sites that you need or use frequently in your communities!</li>
              </Localized>
            </ul>
            <Localized id="webcompat-activity-flow-4">
              <li>Test and Report!</li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-flow-5">
                <li>If you encounter a site that does not work in Firefox, but works in another browser, then click the add-on button and follow the steps to report</li>
              </Localized>
              <Localized id="webcompat-activity-flow-6"
                reportingLink={<a href="https://wiki.mozilla.org/Compatibility/Guide#Reporting_a_Web_compatibility_issue">in reported issues</a>}>
                <li>Pay special attention to what we are looking for <a href="https://wiki.mozilla.org/Compatibility/Guide#Reporting_a_Web_compatibility_issue">in reported issues</a></li>
              </Localized>
              <Localized id="webcompat-activity-flow-7"
                guideLink={<a href="https://wiki.mozilla.org/Compatibility/Guide">go here</a>}>
                <li>If you want to become an expert in web compatibility, <a href="https://wiki.mozilla.org/Compatibility/Guide">go here</a></li>
              </Localized>
            </ul>
          </ul>

          <Localized id="webcompat-activity-end">
            <h2 id="directly-at-the-end-of-the-activity">Directly at the end of the activity</h2>
          </Localized>

          <Localized id="webcompat-activity-end-1">
            <p>Immediately after the event don’t forget to share the link to the impact form with your attendees:</p>
          </Localized>

          <p className="attention-link"><a href="http://mzl.la/howwasit">mzl.la/howwasit</a></p>

          <Localized id="webcompat-activity-end-2">
            <p>Remember this is how you’ll know who attended your event, and if you successfully inspired them to action! We recommend adding it to your final slide AND emailing it out after the event.</p>
          </Localized>

          <Localized id="webcompat-activity-output">
            <h2 id="output">Output</h2>
          </Localized>

          <Localized id="webcompat-activity-output-1">
            <p>In addition to the recommended event flow here are some things we’d like you, the event organizer, to do.</p>
          </Localized>

          <ul>
            <Localized id="webcompat-activity-output-2">
              <li>Fill out the post-event metrics on the event page you setup on the Reps portal</li>
            </Localized>
            <Localized id="webcompat-activity-output-3">
              <li>Optionally, tell us about your event. This can be before or after. We love to hear about upcoming plans, and of course love to hear about what was achieved at the event with a picture or two!</li>
            </Localized>
            <ul>
              <Localized id="webcompat-activity-output-4"
                discourseLink={<a href="https://discourse.mozilla-community.org/t/activate-mozilla-web-compatibility-sprint/10074/1">Here is the Discourse post to write to</a>}>
                <li><a href="https://discourse.mozilla-community.org/t/activate-mozilla-web-compatibility-sprint/10074/1">Here is the Discourse post to write to</a></li>
              </Localized>
            </ul>
            <Localized id="webcompat-activity-output-5"
              mailingLink={<a href="https://www.mozilla.org/about/forums/#compatibility">mailing list</a>}>
              <li>Encourage attendees who want to continue to work on Web Compat to sign up to the <a href="https://www.mozilla.org/about/forums/#compatibility">mailing list</a></li>
            </Localized>
          </ul>

          <Localized id="webcompat-activity-extra">
            <h2 id="extra">Extra</h2>
          </Localized>

          <Localized id="webcompat-activity-extra-1">
            <p>While the focus of this activity should be on testing sprints, there are other ways to stay more involved with the community after.</p>
          </Localized>

          <ul>
            <Localized id="webcompat-activity-extra-2"
              moreInfoLink={<a href="https://github.com/mozilla/participation-org/issues/237#issuecomment-163632354">More information</a>}>
              <li>Bug diagnosis: This is about trying to understand the underlying issues behind bug reports, and where possible, providing suggested fixes for site owners. <a href="https://github.com/mozilla/participation-org/issues/237#issuecomment-163632354">More information</a></li>
            </Localized>
            <Localized id="webcompat-activity-extra-3"
              moreInfoLink={<a href="https://github.com/mozilla/participation-org/issues/237#issuecomment-163632626">More information</a>}>
              <li>Site outreach: This is about trying to get in contact with websites that have issues and (politely!) providing ways that they can improve compatibility or fix their bugs. <a href="https://github.com/mozilla/participation-org/issues/237#issuecomment-163632626">More information</a></li>
            </Localized>
          </ul>

          <Localized id="webcompat-activity-extra-4"
            contributorsLink={<a href="https://webcompat.com/contributors">Webcompat’s contributors page</a>}>
            <p><a href="https://webcompat.com/contributors">Webcompat’s contributors page</a> has more basic information on how to get started and join the community.</p>
          </Localized>

        </Col>

        <Col lg={3} md={3} sm={3} className="sidebar hidden-xs">
          <Localized id="webcompat-activity-impact">
            <h2 id="impact-and-metrics">Impact and Metrics</h2>
          </Localized>

          <Localized id="webcompat-activity-impact-1">
            <p>At Mozilla, we want the web running well for everyone, not just in one or two browsers. This means cross-browser, and cross-device. Our global community can give visibility to this that no team could ever match!</p>
          </Localized>

          <Localized id="webcompat-activity-goals">
            <h3 id="goals-for-this-area">Goals for this area</h3>
          </Localized>

          <Localized id="webcompat-activity-impact-title">
            <strong>Impact:</strong>
          </Localized>

          <ul>
            <Localized id="webcompat-activity-impact-2">
              <li>300 Add-on installs</li>
            </Localized>
            <Localized id="webcompat-activity-impact-3">
              <li>200 compatibility issues filed</li>
            </Localized>
          </ul>

          <Localized id="webcompat-activity-strength">
            <strong>Strength:</strong>
          </Localized>

          <ul>
            <Localized id="webcompat-activity-strength-1">
              <li>50 Mozillians run events</li>
            </Localized>
            <Localized id="webcompat-activity-strength-2"
              compatList={<a href="https://www.mozilla.org/about/forums/#compatibility">compatibility list</a>}>
              <li>50 signups to the <a href="https://www.mozilla.org/about/forums/#compatibility">compatibility list</a></li>
            </Localized>
          </ul>

          <Localized id="webcompat-activity-audience">
            <h2 id="audience-for-this-activity">Audience for this activity</h2>
          </Localized>

          <Localized id="webcompat-activity-audience-1">
            <p>The audience this activity is anyone who is passionate on the topic, but being somewhat Web tech savvy is a help. No programming skills are necessary. It is for people who care about diversity on the Web.</p>
          </Localized>
        </Col>

      </ActivityDetail>
    );
  }
}

export default WebcompatSprint;
